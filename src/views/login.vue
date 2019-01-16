<template>
  <div class="wrap">
    <div class="sales-bg">
      <div class="form-bg-l">
        <view-box class="use-bg"></view-box>
        <div class="form-bg">
          <flexbox class="item-i">
            <flexbox-item class="form-i">
              <x-input class="phone-i" placeholder="请输入手机号码" v-model="phone" :max="maxclength"></x-input>
              <p class="icon-phone"></p>
            </flexbox-item>
          </flexbox>
          <flexbox class="item-i">
            <flexbox-item class="form-i">
              <x-input class="phone-i" placeholder="请输入登入密码" v-model="password" :max="maxplength"></x-input>
              <p class="icon-pass"></p>
            </flexbox-item>
          </flexbox>
          <!-- <div class="forget-p">忘记密码？</div> -->
        </div>
        <div class="login-s">
          <p class="save-p">
            <span class="ioc-g"></span>
            <span class="c-save">记住密码</span>
          </p>
          <p>
            <x-button class="sumbit-btn" @click.native="login">登录</x-button>
          </p>
        </div>
      </div>
      <div class="com-name">珠海惠付通科技有限公司</div>
    </div>
  </div>
</template>
<script>
import { ViewBox, XInput, Flexbox, XButton, FlexboxItem } from "vux";
export default {
  components: {
    ViewBox,
    Flexbox,
    FlexboxItem,
    XInput,
    XButton
  },
  data() {
    return {
      phone: "",
      password: "",
      maxclength: 11,
      maxplength: 6
    };
  },
  methods: {
    login() {
      this.$router.push({ path: "/bill-has-open" });
    }
  }
};
</script>

<style lang="scss" scoped>
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
  font-size: 1rem;
  background: #fff;
}

.form-bg-l {
  width: 88%;
  position: fixed;
  left: 50%;
  margin-left: -44%;
  top: 24vh;
}

.form-i {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
}

.phone-i {
  width: 90%;
}

.item-i {
  margin-bottom: 6vw;
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
  background: linear-gradient(to right, rgb(22, 221, 219), rgb(49, 176, 224));
  border-radius: 5px;
  color: #fff;
  font-size: 1.2rem;
  line-height: 12vw;
  box-shadow: 4px 4px 10px rgba(22, 221, 219, 0.3);
}
.weui-btn:after {
  border: 0;
}
.login-s {
  margin-top: 5.6vw;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.com-name {
  width: 100%;
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: 1rem;
  position: absolute;
  bottom: 10vw;
}
</style>