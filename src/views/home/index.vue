<script setup>
import { reactive } from 'vue'
import {useRouter} from 'vue-router'
const tags = reactive(['同户型', '海量方案', '团购优惠'])
const router = useRouter();
const toDetail = () => {
  router.push({
    name: 'schemeDetail',
    query: { id: 1 }
  })
}
</script>
<template>
  <div class="home-header">
    <div class="header-name"></div>
    <div class="header-desc">找心怡的家装方案</div>
    <div class="header-tags">
      <div class="tag" v-for="(item, index) in tags" :key="index">
        {{ item }}
      </div>
    </div>

  </div>
  <div class="list-wrap">
    <div class="card" @click="toDetail">
      <div class="img-wrap">
        <van-image class="img" width="100%" height="4.47rem" src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
        <div class="img-cover">
          <div class="card-tags">
            <div>现代</div>
            <div>120m²</div>
          </div>
          <div class="vr-btn"></div>
        </div>
      </div>
      <div class="card-desc">
        <div class="desc-lef">索菲亚全屋定制</div>
        <div class="desc-rig">
          <div class="sheng">预计省
            <span>2.5</span>
            万
          </div>
          <div class="get-discount">
            获取折扣
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$aColor:red;

.home-header {
  height: 5.9rem;
  @include gSetBg('../images/home/bg-1.png');
  padding-top: 0.1px;

  .header-name {
    width: 2.92rem;
    height: 0.92rem;
    @include gSetBg('../images/home/title.png');
    margin: 1.3rem auto .26rem;
  }

  .header-desc {
    text-align: center;
    font-size: 0.3rem;
    color: #222222;
    line-height: .42rem;
    font-weight: bold;
  }

  .header-tags {
    display: flex;
    margin-top: .35rem;
    align-items: center;
    justify-content: center;

    .tag {
      padding: .04rem .14rem .06rem .14rem;
      background: #1FAB89;
      border-radius: .04rem;
      margin-left: .12rem;
      font-size: .26rem;
      color: #FFFFFF;

      &:nth-child(1) {
        margin-left: 0;
      }
    }
  }
}

.list-wrap {
  margin-top: -1.3rem;
  padding: 0 .4rem;

  .card {
    border-radius: .2rem;
    overflow: hidden;
    background: #fff;

    .img-wrap {
      position: relative;

      .img-cover {
        position: absolute;
        top: 0.2rem;
        left: 0;
        width: calc(100% - 0.4rem);
        padding: 0 0.2rem;
        display: flex;
        justify-content: space-between;

        .card-tags {
          display: flex;
          align-items: center;

          div {
            padding: .04rem .12rem .03rem;
            border-radius: .04rem;
            background: rgba(0, 0, 0, 0.20);
            color: #fff;
            font-size: .24rem;
            margin-right: .08rem;
            line-height: .33rem;
            height: auto;
          }
        }

        .vr-btn {
          width: .6rem;
          height: .6rem;
          background: rgba(0, 0, 0, 0.20);
          border-radius: 50%;
          position: relative;

          &::before {
            content: '';
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: .4rem;
            height: .4rem;
            @include gSetBg('../images/home/icon-1.png');
          }
        }
      }
    }

    .img {
      display: block;
    }

    .card-desc {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .38rem 0rem .37rem .2rem;
      font-size: .34rem;
      color: #000000;

      .desc-lef {
        line-height: .45rem;
      }

      .desc-rig {
        display: flex;
        align-items: center;
        line-height: .4rem;

        .sheng {
          font-size: .24rem;
          color: #555555;

          span {
            color: #FF6C23;
          }
        }

        .get-discount {
          width: 1.84rem;
          height: .72rem;
          background: #1FAB89;
          margin-left: .2rem;
          border-radius: .4rem 0 0 .4rem;
          line-height: .72rem;
          text-align: center;
          font-size: .28rem;
          color: #fff;
        }

        img {
          width: .24rem;
          height: .24rem;
          margin-right: .02rem;
          display: block;
        }

        span {
          font-weight: bold;
          font-size: .34rem;
          color: #222222;
          margin-right: .04rem;
        }

        .sp-2 {
          font-size: .24rem;
          color: #555555;
        }
      }
    }
  }
}
</style>