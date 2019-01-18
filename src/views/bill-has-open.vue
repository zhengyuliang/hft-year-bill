<template>
  <div class="wrap">
    <toast
      v-model="showPositionValue"
      type="text"
      :time="1200"
      is-show-mask
      :text="ToastMassage"
      :position="position"
    ></toast>
    <div class="sales-bg">
      <view-box class="use-bg"></view-box>
      <view-box class="has-o-bg"></view-box>
      <group class="selected-s" label-width="5.5em" label-margin-right="2em" label-align="justify">
        <selector placeholder="请选择对应门店" @on-change="changeValue" :options="shopList" v-model="shop"></selector>
      </group>
      <x-button class="sumbit-btn" @click.native="openBill">打开私人账单</x-button>
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
  GroupTitle,
  Toast
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
    GroupTitle,
    Toast
  },
  data() {
    return {
      shop: "",
      shopList: [],
      showPositionValue: false,
      ToastMassage: "",
      position: "middle"
    };
  },
  methods: {
    changeValue(value) {
      this.shop = value;
      console.log(this.shop);
    },
    openBill() {
      if (!this.shop) {
        this.showPositionValue = true;
        this.ToastMassage = "请选择对应门店";
      } else {
        this.$router.push({ path: "/dataList", query: { shop_id: this.shop } });
      }
    }
  },
  mounted() {
    var shopList = JSON.parse(sessionStorage.getItem("USERINFO"));
    for (var i = 0; i < shopList.length; i++) {
      this.shopList.push({
        key: shopList[i].shop_id,
        value: shopList[i].shop_name
      });
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
.sumbit-btn {
  display: block;
  width: 40vw;
  height: 12vw;
  background: linear-gradient(to right, #1ba2e8, #36eae8);
  border-radius: 5px;
  color: #fff;
  font-size: 1rem;
  line-height: 12vw;
  box-shadow: 4px 4px 10px rgba(22, 221, 219, 0.3);
  position: absolute;
  bottom: 20vw;
  left: 50%;
  margin-left: -20vw;
}
.weui-btn:after {
  border: 0;
}
</style>