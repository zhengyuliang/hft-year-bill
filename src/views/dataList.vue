<template>
  <div class="databody">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide bg-1">
          <div class="top"></div>
          <div class="inner">
            <h4>{{dataList.store_name}}</h4>
            <div class="title"></div>
            <div class="sub-title"></div>
            <div class="line"></div>
            <div class="all">
              <p class="p-text">年度总营业额</p>
              <h2>{{total_payment}} <span>元</span></h2>
            </div>
            <div class="all">
              <p class="ptext">交易订单平均金额：<span class="text-red">{{dataList.per_received}}</span>元</p>
            </div>
            <div class="all-text">
              2018年,{{dataList.store_name}}平均每单能收款{{dataList.per_received}}元，总收款{{dataList.total_payment}}元，战胜了{{dataList.city}}市{{defeat}}%的人，钱赚的盆满钵满
            </div>
            <div class="line"></div>
            <div class="all-info">
              伟大的成绩和辛勤劳动是成正比例的，有一分劳动就有一分收获
            </div>
          </div>
          <div class="footer">
            <h3>经营小Tips:</h3>
            <p>省到就是赚到，惠付通软硬件免费申请，软件免费迭代更新，方便您更好的经营管理店铺</p>
            <span class="arrow"></span>
          </div>
        </div>
        <div class="swiper-slide bg-2">
          <div class="topp">
            <div class="all">
                <p class="p-text">我的店铺年度订单量</p>
                <h2 class="text-red">{{dataList.total_order}} <span>单</span></h2>
              </div>
              <!-- <div class="all">
                <p class="p-text p-right">年度总营业额</p>
                <h2 class="h-num">{{total_payment}}<span>元</span></h2>
              </div> -->
              <div class="info">
                <h3>经营小Tips:</h3>
                <p>维护店内商品的进售价报表分析会更准确哦！</p>
              </div>
              <div class="line"></div>
              <p class="all-info">不积跬步，无以至千里；不积小流，无以成江海.</p>
          </div>
          <div class="footer">
            <div class="chart" id="myChart"></div>
            <div class="bg-text">
              <div class="tixt">店铺最大订单发生<p>{{max_order_time}}</p></div>
              <div class="price">
                <h3>最大订单交易金额：</h3>
                <h2>{{max_order}} <span>元</span></h2>
              </div>
            </div>
            
            <span class="arrow arrow-1"></span>
          </div>
        </div>
        <div class="swiper-slide bg-3">
          <div class="top"></div>
          <div class="inner">
            <div class="chart3">
              <h3>支付类型占比</h3>
              <div class="chart3-inner">
                <div class="chartPie" id="pie"></div>
                <div class="chartBox">
                  <p><span class="color-1"></span>{{wechat_rate}}%</p>
                  <p><span class="color-2"></span>{{cash_rate}}%</p>
                  <p><span class="color-3"></span>{{alipay_rate}}%</p>
                </div>
                <div class="chartext">
                  在您的店铺消费顾客，现金支付的方式达到{{dataList.cash}}元
                </div>
              </div>
            </div>
            <div class="info">
              <h3>经营小Tips:</h3>
              <!-- <p>申请开通随行付只需支付<span>2.2</span>费率，长沙地区申请开通建行随行付0费率。可为您节省<span>2.2</span>元。</p> -->
              <p>惠付通提供随行付、建行龙支付(仅限长沙地区)等第三方支付，费率优惠，更有收银奖励活动参与！</p>
            </div>
            <div class="line"></div>
          </div>
          
          <div class="footer">
            <div class="list">
              <div class="box">
                <img src="../assets/icon_inner_15.png" alt="">
                <p>年度总额：{{total_payment}}</p>
              </div>
              <div class="bg-text">
                <p>销售量最多的商品:<span>{{dataList.goods_count_name}}</span></p>
                <p>销售额最高的商品：<span>{{dataList.goods_amount_name}}</span></p>
                <p>2019年要把握时代的脉搏，再创辉煌～！</p>
              </div>
            </div>
             <div class="info">
              <h3>经营小Tips:</h3>
              <p>芙蓉王作为促销活动物品，在我们线上和+plus消费共享平台活动月一月发放了超过10万现金红包哦！</p>
            </div>
            <p class="f-info">致富的秘诀，在于“大胆创新、眼光独到”八个大字。</p>
          </div>
         
          <span class="arrow arrow-1"></span>
        </div>
        <div class="swiper-slide bg-4">
          <div class="bg-top"></div>
          <p>您最早<span class="bg-blue">{{dataList.first_deal_time}}</span>开始收银，最晚到<span class="bg-red">{{dataList.late_deal_time}}</span>还在工作，真是起的比鸡还早，睡的比狗还晚，勤奋的你，一定可以实现2019年的小愿望！</p>
          <button class="btn"></button>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
import Swiper from 'swiper';
import {request,Modules} from '../utils/HttpRequest/request';
import 'swiper/dist/css/swiper.min.css';
import numeral from 'numeral';
import moment from 'moment';

export default {
    data () {
        return {
            dataList:'',
            total_payment:'', //总收款
            defeat:0, //战胜百分比
            max_order:'', //最大订单
            max_order_time:'', //最大订单发生于的时间 
            alipay_rate:'',//支付客户百分比
            cash_rate:'',// 现金支付百分比
            wechat_rate:'' //微信支付百分比
        }
    },
    methods: {
        getData () {
          let stringjson = "store_name,total_payment,total_payment_Q1,total_payment_Q2,total_payment_Q3,total_payment_Q4,per_received,max_order,max_order_date,alipay,cash,wechat,alipay_rate,cash_rate,wechat_rate,late_deal_time,first_deal_time,profit,sale_rank,defeat,goods_count_barcode,goods_count_name,goods_amount_barcode,goods_amount_name,city,district,total_order";
          let params={
            "query_type": "get_year_report_by_storeid",
            "store_id": 121,
            "projection_expression": stringjson
          };
          request({
            method:'post',
            params:params,
            url: Modules.DATA,
            config:{
              headers: {
                  'x-api-key':'XpF1tKUX0CatqWK6uH9UU1CkZ1TNUwnN5USWT1ka'
              }
            }
          }).then(res =>{
            console.log(res);
            let data = JSON.parse(res.data);
            this.dataList = data[0];
            let dataNume = data[0];
            console.log(data);
            let number = numeral(dataNume.total_payment).format('0,0');
            this.total_payment = number;
            this.max_order = numeral(dataNume.max_order).format('0,0');
            this.max_order_time = moment(dataNume.max_order_date).format("YYYY年MM月DD日");
            this.defeat = this.getPercent(dataNume.defeat);
            this.alipay_rate = this.getPercent(dataNume.alipay_rate);
            this.cash_rate = this.getPercent(dataNume.cash_rate);
            this.wechat_rate = this.getPercent(dataNume.wechat_rate);
            this.drawLine();
            this.drawPie();
          }).catch(err => {
            console.log(err);
          })
        },
        drawLine() {
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById("myChart"));
          let data = [+this.dataList.total_payment_Q1,+this.dataList.total_payment_Q2,+this.dataList.total_payment_Q3,+this.dataList.total_payment_Q4];
          console.log(data);
          // 绘制图表
          myChart.setOption({
            title: { text: "订单交易金额平均分布区间" },
            tooltip: {},
            xAxis: {
              data: ["第一季度", "第二季度", "第三季度", "第四季度"],
              axisLabel:{
                textStyle: {
                    color: '#a3abb4'
                }
              }
            },
            yAxis: {},
            grid:{
              left: '15%',   //距离左边的距离
              right: '8%', //距离右边的距离
              bottom: '15%',//距离下边的距离
              top: '20%' //距离上边的距离
            },
            series: [
              {
                name: "总销量",
                type: "bar",
                itemStyle:{
                  color:'#448df6',
                  barBorderRadius:[5,5,0,0]
                },
                barWidth:40,
                data: data
              }
            ]
          });
        },
        // 饼图数据内容
        drawPie(){
            let pie = this.$echarts.init(document.getElementById("pie"));
            let cash = +this.dataList.cash;
            let wechat = +this.dataList.wechat;
            let alipay = +this.dataList.alipay;
            let data = [
                  {value:wechat, name:'微信'},
                  {value:cash, name:'现金'},
                  {value:alipay, name:'支付宝'}
              ];
            pie.setOption({
              title: { text: "" },
              tooltip: {},
              series: [
                {
                  // name: "访问来源",
                  type:'pie',
                  radius: ['40%', '70%'],
                  avoidLabelOverlap: false,
                  label: {
                      normal: {
                          show: false,
                          position: 'center'
                      },
                      emphasis: {
                          show: true,
                          textStyle: {
                              fontSize: '12',
                              fontWeight: 'bold'
                          }
                      }
                  },
                  labelLine: {
                      normal: {
                          show: true
                      }
                  },
                  data:data,
                  color:['#a9d86e','#75b1ff','#f8a20f'],
                  itemStyle: {
                   normal:{
                      label:{
                        show:true,
                        formatter: '{b} : {c} \n ({d}%)'
                      },
                      labelLine:{
                        show:true
                      }
                    },
                   emphasis: {
                       shadowBlur: 10,
                       shadowOffsetX: 0,
                       shadowColor: 'rgba(0, 0, 0, 0.5)'
                   }
                 }
                }
              ]
          });
        },
        // 转化百分比
        getPercent(str){
          let percent = +str;
          let result = (percent * 100).toFixed(2);
          return result;
        }
    },
    mounted(){
        var mySwiper = new Swiper('.swiper-container', {
          autoplay:false,
          loop:false,
          height:window.innerHeight,
          direction : 'vertical'
        })
        this.getData();
    }
}
</script>

<style lang="scss" scoped>
  .databody{
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    bottom:0;
 
    .bg-1{
      height: 100vh;
      box-sizing: border-box;
      .inner{
        box-sizing: border-box;
        height: 67vh;
        padding: 1rem .5rem;
        h4{
          font-size: .65rem;
        }
        .title{
          width: 100%;
          height: 1.2rem;
          // box-sizing: border-box;
          margin: .4rem auto .8rem;
          background-size:contain;
          background-position: center;
          background-image: url("../assets/icon_inner_1.png");
          background-repeat: no-repeat;
        }
        .sub-title{
          width: 100%;
          height: .6rem;
          background-size:contain;
          background-position:  center left;
          background-image: url("../assets/icon_inner_2.png");
          background-repeat: no-repeat;
          margin-bottom: .5rem;
        }
        
        .all{
          border-bottom: 1px dashed #6c6c6c;
          padding: .5rem 0 .2rem;
          h2{
            color: #0f95cd;
            font-size: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            span{
              font-size: .8rem;
              color: #666;
              display: block;
              margin-left: .25rem;
            }
          }
          .ptext{
              font-size: .7rem;
            }
          .p-text{
            text-align: left;
            font-size: .7rem;
          }
          .text-red{
            display: inline-block;
            color: #e17bb0;
            font-size: 1.9rem;
          }
        }
        
        .all-text{
          padding: .6rem 0;
          font-size: .7rem;
        }
      }
      .footer{
        height: 30vh;
        box-sizing: border-box;
        position: relative;
        background-color: #fff;
        background-image: url("../assets/icon_inner_5.png");
        background-position: center bottom;
        background-repeat: no-repeat;
        background-size: contain;
        padding-left: .5rem;
        &::before{
          content: "";
          width: 100%;
          height: .75rem;
          background-size: 6%;
          background-position: bottom left;
          background-image: url("../assets/icon_inner_6.png");
          background-repeat: repeat-x;
          position: absolute;
          top: -.75rem;
          left: 0;
        }
        h3{
          text-align: left;
          position: relative;
          margin: 0 auto;
          padding-top: .5rem;
          padding-left: 1.5rem;
          font-size: .75rem;
          &::before{
            content: "";
            width: 1.5rem;
            height: 1rem;
            background-size: contain;
            background-position: center;
            background-image: url("../assets/icon_inner_3.png");
            background-repeat: no-repeat;
            position: absolute;
            top: .5rem;
            left: 0;
          }
        }
        p{
          font-size: .6rem;
          padding: .25rem .5rem .25rem 1.5rem;
          text-align: left;
          // text-indent: 1rem;
        }
       
      }
    }
    .bg-2{
      height: 100vh;
      box-sizing: border-box;
      .topp{
        background-color: #fff;
        height: 37vh;
        box-sizing: border-box;
        padding: 0 .5rem;
        padding-bottom: .5rem;
        position: relative;
        &::after{
          content: "";
          width: 100%;
          height: .75rem;
          background-size: 6%;
          background-position: top left;
          background-image: url("../assets/icon_inner_6_1.png");
          background-repeat: repeat-x;
          position: absolute;
          bottom: -.75rem;
          left: 0;
        }
        .all{
          border-bottom: 1px dashed #6c6c6c;
          padding: 0 1rem;
          .p-text{
            text-align: left;
            font-size: .7rem;
            padding-top: .5rem;
            padding-bottom: .25rem;
          }
          .p-right{
            text-align: right;
          }
          .text-red{
            display: block;
            color: #e17bb0;
            font-size: 2rem;
            text-align: center;
            padding-left: 1rem;
            font-weight: 500;
            span{
              font-size: .8rem;
              color: #666;
              display: inline-block;
            }
          }
          .h-num{
            text-align: right;
            color: #0f95cd;
            font-size: 2rem;
            font-weight: 500;
            span{
              color: #666;
              font-size: .75rem;
            }
          }
        }
      }
      .footer{
        padding: 1rem .5rem;
        height: 63vh;
        box-sizing: border-box;
        .bg-text{
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-top: .5rem;
        }
        .chart{
          width: 100%;
          background-color: #fff;
          margin: 0 auto;
          height: 38vh;
          border-left: 2px solid #76b1fe;
        }
        .tixt{
          font-size: .7rem;
          font-weight: normal;
          // margin-top: .5rem;
          text-align: left;
          flex: 1;
        }
        .price{
          padding: 0 1rem;
          box-sizing: border-box;
          text-align: left;
          flex: 1;
          h3{
            // padding-top: 1rem;
            font-size: .7rem;
            font-weight: normal;
          }
          h2{
            color: #ea7933;
            font-size: 1.6rem;
            font-weight: 500;
            display: flex;
            align-items: flex-end;
          }
          span{
            font-size: .8rem;
            color: #666;
          }
        }
      }
     
    }
    .bg-3{
      background-color: #f2f2f2;
      height: 100vh;
      box-sizing: border-box;
      .inner{
        height: 40vh;
        box-sizing: border-box;
        padding: 1rem .5rem;
      }
      .footer{
        height: 57vh;
        box-sizing: border-box;
        padding: 1rem .5rem;
        position: relative;
        background-color: #fff;
        background-size: 60%;
        background-position: 73% 74%;
        // background-image: url("../assets/icon_inner_9.png");
        background-repeat: no-repeat;
        position: absolute;
        &::before{
          content: "";
          width: 100%;
          height: .75rem;
          background-size: 6%;
          background-position: bottom left;
          background-image: url("../assets/icon_inner_6.png");
          background-repeat: repeat-x;
          position: absolute;
          top: -.75rem;
          left: 0;
        }
        .list{
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          font-size: .7rem;
          padding-bottom: 1rem;
          .box{
            background-color: #fff;
            border: 1px solid #ececec;
            // height: 15vh;
            width: 8rem;
            img{
              width: 90%;
              margin: .5rem 0;
            }
            p{
              font-size: .6rem;
              color: #666;
              padding: 0 .2rem .5rem .2rem;
            }
          }
          .bg-text{
            display: block;
            flex: 1;
            text-align: left;
            padding-left: .5rem;
            font-size: .65rem;
            span{
              display: block;
              color: #999;
            }
          }
        }
      }
    }
    .bg-4{
      background-color: #fff;
      background-image: url("../assets/icon_inner_12.png");
      background-position: center bottom;
      background-repeat: no-repeat;
      background-size: contain;
      .bg-top{
        width: 70%;
        background-image: url("../assets/icon_inner_10.png");
        background-position: center bottom;
        background-repeat: no-repeat;
        background-size: contain;
        height: 50vh;
        margin: 0 auto;
        // margin-top: 1rem;
      }
      p{
        color: #999;
        font-size: .8rem;
        padding: 1rem 2rem;
        line-height: 1.5;
        .bg-blue{
          color: #0f95cd;
          font-weight: 500;
        }
        .bg-red{
          color: #e17bb0;
          font-weight: 500;
        }
      }
      .btn{
        width: 50%;
        margin: 0 auto;
        height: 2.5rem;
        background-image: url("../assets/icon_inner_13.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        background-color: transparent;
        border: none;
      }
      
    }
    .top{
      box-sizing: border-box;
      background-color: #fff;
      display: block;
      height: 3vh;
      position: relative;
      &::after{
        content: "";
        width: 100%;
        height: .75rem;
        background-size: 6%;
        background-position: top left;
        background-image: url("../assets/icon_inner_6_1.png");
        background-repeat: repeat-x;
        position: absolute;
        bottom: -.75rem;
        left: 0;
      }
    }
    .line{
      height: .15rem;
      width: 100%;
      border-top: 1px dashed #6c6c6c;
      border-bottom: 1px dashed #6c6c6c;
    }
    .all-info{
      font-size: .6rem;
      padding: .5rem 0 0;
      box-sizing: border-box;
      color: #717d89;
    }
    .f-info{
      font-size: .6rem;
      padding: .5rem 0 0;
      box-sizing: border-box;
      color: #717d89;
      position: absolute;
      bottom: 2rem;
      width: 100%;
    }
     .arrow{
      position: absolute;
      width: 1.5rem;
      height: 1rem;
      background-size: contain;
      background-position: center;
      background-image: url("../assets/icon_inner_4.png");
      background-repeat: no-repeat;
      bottom: .2rem;
      left: 50%;
      z-index: 2;
      display: block;
      margin-left: -.75rem;
      &.arrow-1{
        background-image: url("../assets/icon_inner_7.png");
      }
    }
    .info{
      padding: .5rem 0;
      box-sizing: border-box;
      h3{
        text-align: left;
        position: relative;
        margin: 0 auto;
        padding-left: 1.5rem;
        font-size: .75rem;
        &::before{
          content: "";
          width: 1.5rem;
          height: 1.0rem;
          background-size: contain;
          background-position: center;
          background-image: url("../assets/icon_inner_3.png");
          background-repeat: no-repeat;
          position: absolute;
          top: .1rem;
          left: 0;
        }
      }
      p{
        font-size: .6rem;
        box-sizing: border-box;
        padding: .25rem 0 .25rem 1.5rem;
        text-align: left;
        // text-indent: 1rem;
      }
    }
    .chart3{
      background-color: #fff;
      // width: 100%;
      // height: 20vh;
      margin: 0 auto;
      border: 1px solid #ececec;
      box-sizing: border-box;
      h3{
        font-size: .7rem;
        text-align: left;
        color: #666;
        border: 1px solid #ececec;
        padding: .25rem .5rem;
        width: 100%;
      }
      .chart3-inner{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 20vh;
      }
      .chartPie{
        flex: 2;
        height: 100%;
      }
      .chartBox{
        flex: 1;
        font-size: .7rem;
        text-align: left;
        p{
          display: flex;
          align-items: center;
          font-size: .6rem;
          padding: .25rem 0;
        }
        span{
          width: 1.2rem;
          height: .6rem;
          display: inline-block;
          margin-right: .2rem;
        }
        .color-1{
          background-color: #a9d86e;
        }
        .color-2{
          background-color: #75b1ff;
        }
        .color-3{
          background-color: #f8a20f;
        }
      }
      .chartext{
        flex: 2;
        font-size: .7rem;
        text-align: left;
        padding-left: .5rem;
      }

    }
    
  }
</style> 