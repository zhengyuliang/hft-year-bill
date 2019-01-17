<template>
  <div class="databody">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide bg-1">
          <div class="top"></div>
          <div class="inner">
            <h4>XXXXXXXX店铺</h4>
            <div class="title"></div>
            <div class="sub-title"></div>
            <div class="line"></div>
            <div class="all">
              <p class="p-text">年度总营业额</p>
              <h2>19,000,000 <span>元</span></h2>
            </div>
            <div class="all">
              <p class="ptext">交易订单平均金额：<span class="text-red">23.6</span>元</p>
            </div>
            <div class="all-text">
              2018年我的xxx店铺平均每单能收款xxx元，开店总收款xxxxx元，战胜了xx市xx%的人，钱赚的盆满钵满
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
          <div class="top">
            <div class="all">
                <p class="p-text">我的店铺年度总润达到</p>
                <h2 class="text-red">5,000 <span>元</span></h2>
              </div>
              <div class="all">
                <p class="p-text p-right">年度总营业额</p>
                <h2 class="h-num">19,000,000 <span>元</span></h2>
              </div>
              <div class="info">
                <h3>经营小Tips:</h3>
                <p>维护店内商品的进售价报表分析会更准确哦！</p>
              </div>
              <div class="line"></div>
              <p class="all-info">不积跬步，无以至千里；不积小流，无以成江海.</p>
          </div>
          <div class="footer">
            <div class="footer-inner">
              <div class="chart"></div>
              <h2 class="tixt">我的店铺xxx,其中最大订单xxxx，发生在xxxx年xx月xx日。何以解忧唯有暴富，希望2019年多些大老板光顾！</h2>
              <div class="price">
                <h3>最大订单交易金额：</h3>
                <h2>1,000 <span>元</span></h2>
              </div>
            </div>
            
            <span class="arrow"></span>
          </div>
        </div>
        <div class="swiper-slide bg-3">
          <div class="top"></div>
          <div class="info">
            <h3>经营小Tips:</h3>
            <p>申请开通随行付只需支付<span>2.2</span>费率，长沙地区申请开通建行随行付0费率。可为您节省<span>2.2</span>元。</p>
          </div>
          <div class="line"></div>
          <div class="footer">
            <div class="list">
              <div class="box"></div>
              <div class="bg-text">
                <p>您店铺里销售量最多的产品是:xxxxxxxxxx；</p>
                <p>销售额最高的产品是：xxxxxxxxxxxx；</p>
                <p>2019年要把握时代的脉搏，再创辉煌～！</p>
              </div>
            </div>
          </div>
          <div class="info">
            <h3>经营小Tips:</h3>
            <p>芙蓉王作为促销活动物品，在我们线上和+plus消费共享平台活动月一月发放了超过10万现金红包哦！</p>
          </div>
          <p class="f-info">致富的秘诀，在于“大胆创新、眼光独到”八个大字。</p>
        </div>
        <div class="swiper-slide bg-4">
          <div class="bg-top"></div>
          <p>您最早<span class="bg-blue">06</span>点<span class="bg-blue">06</span>分开始收银，最晚到<span class="bg-red">06</span>点<span class="bg-red">06</span>分还在工作，真是起的比鸡还早，睡的比狗还晚，勤奋的你，一定可以实现2019年的小愿望！</p>
          <button class="btn"></button>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
    data () {
        return {
            count: 0
        }
    },
    methods: {
        increment () {
            this.count++
        }
    },
    mounted(){
        var mySwiper = new Swiper('.swiper-container', {
          autoplay:false,
          loop:false,
          height:window.innerHeight,
          direction : 'vertical'
        })
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
      background-color: #f2f2f2;
      height: 100vh;
      box-sizing: border-box;
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
      .inner{
        box-sizing: border-box;
        height: 67vh;
        padding: 1rem;
        h4{
          font-size: .8rem;
        }
        .title{
          width: 100%;
          height: 1.2rem;
          // box-sizing: border-box;
          margin: .4rem auto 1rem;
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
          padding: .5rem 0;
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
          width: 100%;
          width: 80%;
          margin: 0 auto;
          padding-top: .5rem;
          padding-left: 3.2rem;
          font-size: .8rem;
          &::before{
            content: "";
            width: 2.5rem;
            height: 1.5rem;
            background-size: contain;
            background-position: center;
            background-image: url("../assets/icon_inner_3.png");
            background-repeat: no-repeat;
            position: absolute;
            top: .5rem;
            left: .75rem;
          }
        }
        p{
          font-size: .6rem;
          padding: .25rem 1.5rem .25rem 4rem;
          text-align: left;
          text-indent: 1rem;
        }
        .arrow{
          position: absolute;
          width: 1.5rem;
          height: 1rem;
          background-size: contain;
          background-position: center;
          background-image: url("../assets/icon_inner_4.png");
          background-repeat: no-repeat;
          bottom: .75rem;
          left: 50%;
          z-index: 2;
          display: block;
          margin-left: -.75rem;
        }
      }
    }
    .bg-2{
      height: 100vh;
      box-sizing: border-box;
      background-color: #f2f2f2;
      .top{
        background-color: #fff;
        height: 47vh;
        box-sizing: border-box;
        padding: 0 1rem;
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
            text-align: left;
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
        padding: 1rem;
        height: 53vh;
        box-sizing: border-box;
        .footer-inner{
          background-size: contain;
          background-position: bottom right;
          background-image: url("../assets/icon_inner_8.png");
          background-repeat: no-repeat;
        }
        .chart{
          width: 70%;
          background-color: #fff;
          margin: 0 auto;
          height: 22vh;
        }
        .tixt{
          font-size: .7rem;
          font-weight: normal;
          margin-top: .5rem;
          text-align: left;
        }
        .price{
          padding: 0 1rem;
          box-sizing: border-box;
          text-align: left;
          margin-top: 1rem;
          h3{
            padding-top: 1rem;
          }
        }
      }
      .info{
        padding: .5rem 0;
        box-sizing: border-box;
        h3{
          text-align: left;
          position: relative;
          width: 100%;
          width: 80%;
          margin: 0 auto;
          // padding-top: 10px;
          padding-left: 3.5rem;
          font-size: .8rem;
          &::before{
            content: "";
            width: 2.5rem;
            height: 1.5rem;
            background-size: contain;
            background-position: center;
            background-image: url("../assets/icon_inner_3.png");
            background-repeat: no-repeat;
            position: absolute;
            top: 0px;
            left: .75rem;
          }
        }
        p{
          font-size: .6rem;
          box-sizing: border-box;
          padding: .25rem 0 .25rem 2.5rem;
          text-align: left;
          text-indent: 1rem;
        }
      }
    }
    .bg-3{
      background-color: #f2f2f2;
    }
    .bg-4{
      background-color: #f2f2f2;
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
  }
</style> 