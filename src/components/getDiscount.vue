<script setup>
import { ref, onMounted } from 'vue';
const qrCodeUrl = ref("//124.221.136.33:9000/fhome/2022/04/23/1650675829645.jpg")
const show = ref(false);
const showPopup = () => {
  show.value = true;
};
const themeVars = {
  popupBackgroundColor: 'transparent'
}
function getBase64(url) {
  let Img = new Image(),
    dataURL = '';
  Img.src = url;
  Img.setAttribute("crossOrigin", 'Anonymous')
  return new Promise((resolve, reject) => {
    Img.onload = function () {
      var canvas = document.createElement('canvas'),
        width = Img.width,
        height = Img.height;
      canvas.width = width;
      canvas.height = height;
      canvas.getContext('2d').drawImage(Img, 0, 0, width, height);
      dataURL = canvas.toDataURL('image/jpeg');
      resolve(dataURL);
    };
    Img.onerror = (e) => reject(e);
  })
}
onMounted(() => {
  getBase64('http://124.221.136.33:9000/fhome/2022/04/23/1650675829645.jpg').then(data => {

    qrCodeUrl.value = data;
  })
})
</script>
<template>
  <van-config-provider :theme-vars="themeVars">
    <van-popup v-model:show="show" class="discount-pop">
      <div class="wx-card">
        <van-image class="avater" width="1.5rem" height="1.5rem" round
          src="//124.221.136.33:9000/fhome/2022/04/23/1650679677402.jpg" />
        <div class="wx-name">团购福利酱</div>
        <div class="qr-code">
          <img :src="qrCodeUrl" alt="">
          <div class="code-desc">长按识别二维码，找我领折扣优惠</div>
        </div>
        <div class="card-bottom">心怡家</div>
      </div>
      <div class="close" @click="show = false"></div>
    </van-popup>
  </van-config-provider>

  <div class="compo-discount-wrap">
    <div class="discount-box">
      <img class="discount-icon" src="../static/images/discount/discount.png" alt="">
      <span>心怡家-专属渠道折扣</span>
      <div class="discount-btn" @click="showPopup">获取折扣</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// $--van-popup-background-color:transparent;

.wx-card {
  width: 6.3rem;
  height: 9.2rem;
  @include gSetBg('../static/images/wx-pop.png');
  position: relative;

  .avater {
    margin: 0 auto .2rem;
    padding-top: .7rem;
    display: block;
  }

  .wx-name {
    font-size: .36rem;
    color: #FFFFFF;
    text-align: center;
    line-height: .5rem;
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
      user-select: auto;
      pointer-events: auto;
      -webkit-touch-callout: auto;
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -o-user-select: auto;
    }

    .code-desc {
      position: absolute;
      bottom: -0.7rem;
      text-align: center;
      font-size: .28rem;
      color: #222222;
      min-width: 4.5rem;
      transform: translateX(-50%);
      left: 50%;
    }

  }

  .card-bottom {
    display: flex;
    position: absolute;
    bottom: .4rem;
    align-items: center;
    justify-content: center;
    font-size: .28rem;
    color: #999999;
    left: 50%;
    transform: translateX(-50%);

    @mixin fn() {
      height: .02rem;
      width: .23rem;
      display: block;
      content: '';
      background-color: #999999;
    }

    &::before {
      @include fn();
      margin-right: .14rem;
    }

    &::after {
      @include fn();
      margin-left: .14rem;
    }
  }
}

.discount-pop {
  .close {
    width: .64rem;
    height: .64rem;
    margin: 1rem auto 0;
    @include gSetBg('../static/images/close.png');

  }
}

.compo-discount-wrap {
  height: 1.28rem;
  padding-bottom: .48rem;

  .discount-box {
    position: fixed;
    bottom: 0;
    left: 0;
    width: calc(100% - .7rem);
    height: 1.28rem;
    display: flex;
    align-items: center;
    padding: 0 .3rem 0 .4rem;
    padding-bottom: .48rem;
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