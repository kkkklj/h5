<script setup>
import GetDsicount from '../components/getDiscount.vue'
import { reactive, onBeforeMount } from 'vue';
const imgList = reactive([
  "https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  "https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  "https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  "https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg",
  "https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg",
])
onBeforeMount(() => {
  document
    .querySelector('body')
    .setAttribute('style', 'background-color:#fff')
})
</script>
<template>
  <div class="swipe-wrap">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :show-indicators="false">
      <van-swipe-item v-for="(item,index) in imgList" :key="index">
         <van-image class="img" width="100%" fit="cover" height="7.5rem" src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
      </van-swipe-item>
    </van-swipe>
  </div>
  <div class="header-wrap">
    <div class="tit">
      <div class="tit-lef">欧派</div>
      <div class="tit-rig">预计省
        <span>2.5</span>
        万
      </div>
    </div>
    <div class="header-about">
      <div class="about-col">
        <div class="about-item">
          楼盘
          <span>中冶逸璟台</span>
        </div>
        <div class="about-item">
          楼盘
          <span>中冶逸璟台</span>
        </div>
      </div>
      <div class="about-col">
        <div class="about-item">
          楼盘
          <span>中冶逸璟台</span>
        </div>
        <div class="about-item">
          楼盘
          <span>中冶逸璟台</span>
        </div>
      </div>
    </div>
  </div>
  <div class="show-list">
    <div class="list-tit">效果展示</div>
    <van-image v-for="(item, index) in imgList" lazy-load :key="index" class="img" width="100%" height="5rem" :src="item">
    </van-image>
  </div>
  <div class="past-wrap">
    <div class="tit">过往案例</div>
    <div class="list-wrap">
      <van-image v-for="(item, index) in imgList" fit="cover" :key="index" class="img" width="3.25rem" height="3.25rem" :src="item">
      </van-image>
    </div>
  </div>
  <GetDsicount></GetDsicount>
</template>
<style lang="scss" scoped>
.swipe-wrap {}

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
      &:nth-last-child(1){
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