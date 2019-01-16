<template>
  <div class="wrap-body">
    <div class="pa btn" @click="openBill"></div>
    <div class="pa start"></div>
    <span class="pa logo"></span>
    <div class="pa text"></div>
    <div class="pa man"></div>
    <div class="pa footer" ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    openBill() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap-body {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../assets/bg-index.png");
  .pa {
    position: absolute;
  }
  .logo {
    width: 80%;
    height: 40px;
    top: 10px;
    right: 10px;
    display: block;
    z-index: 3;
    background-position: right;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url("../assets/hft-logo.png");
  }
  .text {
    width: 90%;
    height: 100px;
    top: 60px;
    left: 5%;
    display: block;
    z-index: 6;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url("../assets/icon-text.png");
  }
  .man {
    bottom: 35px;
    left: 10%;
    height: 100%;
    width: 80%;
    display: block;
    z-index: 2;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url("../assets/icon-man.png");
  }
  .footer {
    width: 100%;
    height: 120px;
    display: block;
    left: 0;
    bottom: 0;
    z-index: 6;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("../assets/icon-footer-bg.png");
  }
  .btn {
    width: 50%;
    height: 60px;
    display: block;
    left: 25%;
    bottom: 70px;
    z-index: 7;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url("../assets/icon-btn.png");
  }
}
</style>