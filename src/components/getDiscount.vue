<script setup>
import wxPop from "./wxPop.vue";
import { ref, onMounted } from "vue";
const wxPopRef = ref(null);


const showPopup = () => {
  const { showPopup } = wxPopRef.value;
  showPopup();
};
</script>
<template>
  <wx-pop ref="wxPopRef"></wx-pop>
  <div class="compo-discount-wrap">
    <div class="discount-box">
      <img
        class="discount-icon"
        src="../static/images/discount/discount.png"
        alt=""
      />
      <span>心怡家-专属渠道折扣</span>
      <div class="discount-btn" @click="showPopup">获取折扣</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// $--van-popup-background-color:transparent;



.compo-discount-wrap {
  height: 1.28rem;
  // padding-bottom: .48rem;

  .discount-box {
    position: fixed;
    bottom: 0;
    left: 0;
    width: calc(100% - .7rem);
    height: 1.28rem;
    display: flex;
    align-items: center;
    padding: 0 .3rem 0 .4rem;
    // padding-bottom: .48rem;
    background: #fff;

    .discount-icon {
      width: .44rem;
      height: .44rem;
      margin-right: .2rem;
    }

    span {
      font-size: .3rem;
      color: #222222;
      line-height: .42rem;
    }

    .discount-btn {
      width: 2.56rem;
      height: .88rem;
      background: #1FAB89;
      border: .02rem solid #1FAB89;
      border-radius: .44rem;
      line-height: .88rem;
      text-align: center;
      font-size: .3rem;
      color: #FFFFFF;
      margin-left: auto;
    }
  }
}

</style>
