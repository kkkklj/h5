<script setup>
import GetDsicount from '../components/getDiscount.vue'
import { reactive, onBeforeMount,onBeforeUnmount,ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { $http, $API } from '../utils/index';
import imgPlaceholder from '../static/images/placeholder.jpg';
import { ImagePreview } from 'vant';

const router = useRouter(),
  route = useRoute(),
  { query } = route;
onBeforeMount(() => {
  document
    .querySelector('body')
    .setAttribute('style', 'background-color:#fff');
  getData();
})

onBeforeUnmount(() => {
  document
    .querySelector('body')
    .setAttribute('style', '');
})

const preview = (images,startPosition = 0) => {
  ImagePreview({
    images,
    startPosition
  })
}


const swiper = reactive([]),
      headerData = reactive({}),
      mainList = reactive([]),
      pastList = reactive([]);
const vrUrl = ref('');
const getData = () => $http({
  url: `${$API}favorite-home-customer/show-scheme/${query.id || 1}`,
  httpFilter: true
}).then(data => {
  ['brandName','salePropertyName','styleName','squareNum','wardrobeSquareNum','saveMoneyAmount'].map(k => {
    headerData[k] = data[k]
  })
  mainList.splice(0,0,...data.renderingImages);
  pastList.splice(0,0,...data.caseDiagrams);
  const coverImgs = data.coverImages.map(i => i.imageUrl)
  swiper.splice(0,0,...coverImgs);
  if(swiper.length === 0) {
    swiper.push(imgPlaceholder);
  }
  vrUrl.value = data.vrUrl;
})

const toVr = () => {
  location.href = vrUrl.value;
}
</script>
<template>
  <div class="swipe-wrap">
    <div class="to-vr" @click="toVr" v-if="vrUrl">
      <img src="./images/home/icon-1.png" alt="">
      三维全景
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :show-indicators="false">
      <van-swipe-item v-for="(item, index) in swiper" :key="index" @click="preview(swiper,index)">
        <van-image class="img" width="100%" fit="cover" height="7.5rem"
          :src="item" />
      </van-swipe-item>
    </van-swipe>
  </div>
  <div class="header-wrap">
    <div class="tit">
      <div class="tit-lef">{{headerData.brandName}}</div>
      <div class="tit-rig">预计省
        <span>{{headerData.saveMoneyAmount}}</span>
        万
      </div>
    </div>
    <div class="header-about">
      <div class="about-col">
        <div class="about-item">
          楼盘
          <span>{{headerData.salePropertyName}}</span>
        </div>
        <div class="about-item">
          风格
          <span>{{headerData.styleName}}</span>
        </div>
      </div>
      <div class="about-col">
        <div class="about-item">
          面积
          <span>{{headerData.squareNum}}m²</span>
        </div>
        <div class="about-item">
          衣柜
          <span>{{headerData.wardrobeSquareNum}}m²</span>
        </div>
      </div>
    </div>
  </div>
  <div class="show-list">
    <div class="list-tit">效果展示</div>
    <van-image v-for="(item, index) in mainList" lazy-load :key="index" class="img" width="100%" height="5rem"
      :src="item.imageUrl" @click="preview(mainList.map(i => i.imageUrl),index)">
    </van-image>
  </div>
  <div class="past-wrap" v-if="pastList.length">
    <div class="tit">过往案例</div>
    <div class="list-wrap">
      <van-image v-for="(item, index) in pastList" fit="cover" :key="index" class="img" width="3.25rem" height="3.25rem"
        :src="item.imageUrl" @click="preview(pastList.map(i => i.imageUrl),index)">
      </van-image>
    </div>
  </div>
  <GetDsicount></GetDsicount>
</template>
<style lang="scss" scoped>
.swipe-wrap {
  position: relative;
  height: 7.5rem;
  .to-vr {
    position: absolute;
    bottom: .3rem;
    left: 50%;
    transform: translateX(-50%);
    width: 2.4rem;
    height: .8rem;
    background: rgba(34, 34, 34, 0.60);
    border-radius: .4rem;
    // filter: blur(.3rem);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .26rem;
    color: #FFFFFF;
    font-weight: bold;
    z-index: 100;
    img{
      width: .4rem;
      height: .4rem;
      margin-right: .16rem;
      
    }
    .img{
      display: block;
    }
  }
}

.header-wrap {
  padding: .58rem .4rem .4rem;
  border-bottom: .2rem solid #F5F5F5;

  .tit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .4rem;

    .tit-lef {
      font-size: .5rem;
      color: #222222;
      line-height: .7rem;
    }

    .tit-rig {
      font-size: .24rem;
      color: #555555;

      span {
        color: #FF6C23;
      }
    }
  }
}

.header-about {
  display: flex;

  .about-col {
    min-width: 3.34rem;
    border-right: .02rem solid #EBEBEB;
    margin-right: .2rem;

    &:nth-last-child(1) {
      border: none;
    }

    .about-item {
      font-size: .26rem;
      line-height: .37rem;
      color: #1FAB89;
      margin-bottom: .22rem;

      &:nth-last-child(1) {
        margin-bottom: 0;
      }

      span {
        color: #222;
        margin-left: .24rem;
      }
    }
  }
}

.show-list {
  .list-tit {
    padding: .4rem;
    font-size: .34rem;
    color: #222222;
    line-height: .48rem;
    font-weight: bold;
  }

  .img {
    margin-bottom: .12rem;
  }
}

.past-wrap {
  padding: .68rem .4rem .69rem;

  .tit {
    font-size: .34rem;
    color: #222222;
    line-height: .48rem;
    font-weight: bold;
    margin-bottom: .4rem;
  }

  .list-wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .img {
      margin-bottom: .2rem;
    }
  }
}
</style>