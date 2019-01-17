<template>
  <div class="wrap">
    <div class="sales-bg">
      <view-box class="use-bg"></view-box>
      <view-box class="has-o-bg"></view-box>
      <group class="selected-s" label-width="5.5em" label-margin-right="2em" label-align="justify">
        <selector placeholder="请选择对应门店" :options="['wu','工艺技术', '其他']" v-model="shop"></selector>
      </group>
      <div class="open-btn">打开私人账单</div>
    </div>
  </div>
</template>
<script>
import {
  ViewBox,
  XInput,
  Flexbox,
  XButton,
  FlexboxItem,
  Selector,
  Group,
  GroupTitle
} from "vux";
export default {
  components: {
    ViewBox,
    Flexbox,
    FlexboxItem,
    XInput,
    XButton,
    Selector,
    Group,
    GroupTitle
  },
  data() {
    return {
      shop: ""
    };
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
  background-image: url("../assets/bill-h-bg.png");
}
.has-o-bg {
  position: absolute;
  top: 60vw;
  left: 50%;
  margin-left: -35vw;
  background-image: url("../assets/bill-h-con.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  width: 70vw;
  height: 20vw;
}
.open-btn {
  position: absolute;
  bottom: 20vw;
  left: 50%;
  margin-left: -35vw;
  background-image: url("../assets/open-b-btn.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  width: 70vw;
  height: 20vw;
  line-height: 20vw;
  color: rgb(255, 255, 255);
  font-size: 1.4rem;
}
.use-bg {
  position: absolute;
  top: 28vw;
  left: 50%;
  margin-left: -12vw;
  background-image: url("../assets/logo-b.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  width: 24vw;
  height: 24vw;
}
.selected-s {
  position: absolute;
  top: 80vw;
  width: 70%;
  text-align: center;
  left: 50%;
  margin-left: -35%;
  color: #fff;
}
</style>