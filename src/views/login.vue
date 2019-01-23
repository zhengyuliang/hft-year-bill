<template>
  <div class="wrap">
    <toast v-model="showPositionValue" type="text" :time="1200" is-show-mask :text="ToastMassage" :position="position"></toast>
    <div class="sales-bg">
      <div class="form-bg-l">
        <view-box class="use-bg"></view-box>
        <div class="form-bg">
          <div class="item-i">
            <div class="form-i">
              <x-input class="phone-i" placeholder="请输入手机号码" v-model="phone" :max="maxclength"></x-input>
              <p class="icon-phone"></p>
            </div>
          </div>
          <div class="item-i">
            <div class="form-i form-code">
              <x-input class="phone-i" placeholder="请输入手机验证码" v-model="password" :max="maxplength"></x-input>
              <!-- <p class="icon-pass"></p> -->
            </div>
            <div class="form-i form-i-n" :class="canClick === true? '': 'send-color'" @click="sendCode">
              <!-- <x-input class="phone-i" placeholder="请输入登入密码" v-model="password" :max="maxplength"></x-input>
              <p class="icon-pass"></p>-->
              {{content}}
            </div>
          </div>
          <!-- <div class="forget-p">忘记密码？</div> -->
        </div>
        <div class="login-s">
          <!-- <p class="save-p">
            <span class="ioc-g"></span>
            <span class="c-save">记住密码</span>
          </p> -->
          <p>
            <x-button class="sumbit-btn" @click.native="login">{{loginc}}</x-button>
          </p>
        </div>
      </div>
      <div class="com-name">珠海惠付通科技有限公司</div>
    </div>
  </div>
</template>
<script>
  import Vue from "vue";
  import {
    request,
    Modules
  } from "../utils/HttpRequest/request";
  // import sessionManagement from "../utils/sessionManagement";
  import {
    ViewBox,
    XInput,
    Flexbox,
    XButton,
    FlexboxItem,
    AlertPlugin,
    LoadingPlugin,
    Toast
  } from "vux";

  Vue.use(AlertPlugin);
  Vue.use(LoadingPlugin);
  export default {
    components: {
      ViewBox,
      Flexbox,
      FlexboxItem,
      XInput,
      XButton,
      Toast
    },
    data() {
      return {
        phone: "",
        password: "",
        maxclength: 11,
        maxplength: 6,
        loginc: '登录',
        content: "获取验证码",
        totalTime: 60,
        canClick: true,
        clock: null,
        showPositionValue: false,
        position: "middle",
        ToastMassage: "",
        loginStatus: false
      };
    },
    methods: {
      sendCode() {
        if (!this.canClick) return;
        if (!this.checkphone()) {
          return false;
        }

        this.canClick = false;
        this.content = "剩余" + this.totalTime + "s";
        this.clock = window.setInterval(() => {
          this.totalTime--;
          this.content = "剩余" + this.totalTime + "s";
          if (this.totalTime < 0) {
            window.clearInterval(this.clock);
            this.content = "获取验证码";
            this.totalTime = 59;
            this.canClick = true;
          }
        }, 1000);
        this.getCodeData();
      },
      // 获取验证码接口
      getCodeData() {
        var param = {
          mobile: this.phone
        };
        request({
            url: Modules.SCODE,
            params: param,
            method: "post"
          })
          .then(res => {
            console.log(res.data.result, "获取短信");
            if (res.data.result === 0) {
              this.showPositionValue = true;
              this.ToastMassage = "验证码已发送到手机";
            } else {
              this.canClick = true;
              this.content = "获取验证码";
              this.showPositionValue = true;
              this.ToastMassage = "发送失败，请重试";
            }
          })
          .catch(err => {
            this.showPositionValue = true;
            this.ToastMassage = "发送失败，请重试";
            window.clearInterval(this.clock);
            this.content = "获取验证码";
            this.canClick = true;
          });
      },
      login() {
        if (!this.checkphone()) {
          return fasle;
        }
        if (!this.password.trim()) {
          this.showPositionValue = true;
          this.ToastMassage = "验证码不能为空";
          return;
        }
        if (this.loginStatus) return;
        this.loginc = '登录中...'
        this.loginStatus = true;
        var param = {
          mobile: this.phone,
          check_code: this.password
        };
        request({
            url: Modules.LOGIN,
            params: param,
            config: {},
            method: "post"
          })
          .then(res => {
            if (res.data.result === 0) {
              var info = res.data.data;
              sessionStorage.setItem("USERINFO", JSON.stringify(info));
              this.$router.push({
                path: "/bill-has-open"
              });
            } else {
              this.showMassage(res.data.msg);
            }
            this.loginc = '登录'
            this.loginStatus = false;
          })
          .catch(err => {
            this.loginc = '登录'
            this.loginStatus = false;
            this.showPositionValue = true;
            this.ToastMassage = "发送失败，请重试";
          });
      },
      // 验证手机号
      checkphone() {
        var str = "";
        var phone = this.phone + "";
        if (phone.trim() == "") {
          str = "手机号码不能为空";
        } else if (phone.length != 11) {
          str = "手机号格式不正确";
        } else if (!/^1[34578]\d{9}$/.test(phone)) {
          str = "手机号格式不正确";
        }
        if (str) {
          // this.showMassage(str);
          this.showPositionValue = true;
          this.ToastMassage = str;
          return false;
        } else {
          return true;
        }
      },
      //showMassage弹框提示
      showMassage(tips) {
        this.$vux.alert.show({
          title: tips
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .wrap {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    .sales-bg {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("../assets/login-bg.png");
    }

    .use-bg {
      background-image: url("../assets/user-bg.png");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
      width: 20vw;
      height: 20vw;
      margin: 1vw auto;
    }

    .form-bg {
      border-radius: 8px;
      width: 100%;
      box-sizing: border-box;
      padding: 5vw;
      font-size: 0.8rem;
      background: #fff;
      margin-top: 30px;
    }

    .form-bg-l {
      // margin: 60vw auto;
      width: 88%;
      position: absolute;
      left: 50%;
      margin-left: -44%;
      top: 22vh;
      z-index: 100;
    }

    .form-i {
      width: 100%;
      display: flex;
      font-size: 0.8rem;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #ccc;
    }

    .form-i-n {
      padding: 10px;
      width: 30%;
      border: rgb(22, 221, 219) solid 1px;
      border-radius: 5px;
      font-size: 0.8rem;
    }

    .item-i .form-code {
      flex: 2;
    }

    .send-color {
      background: #ccc;
      color: #333;
    }

    .phone-i {
      width: 90%;
      font-size: 0.8rem;
      padding: 10px;
      border: 0;
    }

    .item-i {
      margin-bottom: 6vw;
      display: flex;
    }

    .icon-pass {
      width: 5vw;
      height: 6vw;
      background-image: url("../assets/w-bg.png");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
    }

    .icon-phone {
      width: 5vw;
      height: 6vw;
      background-image: url("../assets/p-bg.png");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
    }

    .forget-p {
      color: #6078ea;
      text-align: right;
    }

    .ioc-g {
      display: inline-block;
      width: 4vw;
      height: 4vw;
      margin-right: 1vw;
      border: #ccc solid 2px;
      border-radius: 50%;
    }

    .save-p {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .sumbit-btn {
      display: block;
      width: 40vw;
      height: 12vw;
      background: linear-gradient(to right,rgb(49, 176, 224) ,rgb(22, 221, 219));
      border-radius: 5px;
      color: #fff;
      font-size: 1rem;
      line-height: 12vw;
          border: 1px solid rgb(255, 255, 255);
      // box-shadow: 4px 4px 10px rgba(22, 221, 219, 0.3);
    }

    .weui-btn:after {
      border: 0;
    }

    .login-s {
      margin-top: 5.6vw;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .com-name {
      width: 100%;
      color: rgb(255, 255, 255);
      text-align: center;
      font-size: 1rem;
      position: absolute;
      top: 20px;
    }
  }
</style>