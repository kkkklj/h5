<script setup>
import { ref } from 'vue';
const themeVars = {
  popupBackgroundColor: "transparent",
};
const show = ref(false);
const showPopup = () => {
  console.log(11)
  show.value = true;
};
defineExpose({
  showPopup
})
</script>
<template>
  <van-config-provider :theme-vars="themeVars">
    <van-popup v-model:show="show" class="discount-pop">
      <div class="wx-card">
        <van-image
          class="avater"
          width="1.5rem"
          height="1.5rem"
          round
          src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <div class="wx-name">团购福利酱</div>
        <div class="qr-code">
          <img
            src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
            alt=""
          />
          <div class="code-desc">长按识别二维码，找我领折扣优惠</div>
        </div>
        <div class="card-bottom">心怡家</div>
      </div>
      <div class="close" @click="show = false"></div>
    </van-popup>
  </van-config-provider>
</template>
<style lang="scss" scoped>
.wx-card {
  width: 6.3rem;
  height: 9.2rem;
  @include gSetBg("../static/images/wx-pop.png");
  position: relative;

  .avater {
    margin: 0 auto 0.2rem;
    padding-top: 0.7rem;
    display: block;
  }

  .wx-name {
    font-size: 0.36rem;
    color: #ffffff;
    text-align: center;
    line-height: 0.5rem;
  }

  .qr-code {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 2.4rem;
    height: 2.4rem;
    transform: translate(-50%, -50%);

    img {
      width: 2.4rem;
      height: 2.4rem;
    }

    .code-desc {
      position: absolute;
      bottom: -0.7rem;
      text-align: center;
      font-size: 0.28rem;
      color: #222222;
      min-width: 4.5rem;
      transform: translateX(-50%);
      left: 50%;
    }
  }

  .card-bottom {
    display: flex;
    position: absolute;
    bottom: 0.4rem;
    align-items: center;
    justify-content: center;
    font-size: 0.28rem;
    color: #999999;
    left: 50%;
    transform: translateX(-50%);
    @mixin fn() {
      height: 0.02rem;
      width: 0.23rem;
      display: block;
      content: "";
      background-color: #999999;
    }
    &::before {
      @include fn();
      margin-right: 0.14rem;
    }
    &::after {
      @include fn();
      margin-left: 0.14rem;
    }
  }
}
.discount-pop {
  .close {
    width: 0.64rem;
    height: 0.64rem;
    margin: 1rem auto 0;
    @include gSetBg("../static/images/close.png");
  }
}
</style>
