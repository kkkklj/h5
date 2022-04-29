<script setup>
import { reactive,onBeforeMount,ref } from 'vue'
import {useRouter,useRoute} from 'vue-router'
import {$http,$API} from '../../utils/index';
import wxPop from '../../components/wxPop.vue';
const showPopup = () => {
  const {showPopup} = wxPopRef.value;
  showPopup()
};


const wxPopRef = ref(null);
const tags = reactive(['同户型', '海量方案', '团购优惠'])
const router = useRouter(),
      route = useRoute(),
      {query} = route;

onBeforeMount(() => {
  getList();
})

const toDetail = (id) => {
  router.push({
    name: 'schemeDetail',
    query: { id }
  })
}
const cardList = reactive([])
const getList = () => {
  return $http({
    url:`${$API}favorite-home-customer/show-project/${query.id||1}`,
    httpFilter:true
  }).then(data => {
    console.log(data)
    cardList.splice(0,0,...data.showSchemes);
    console.log(cardList)
  })
}

const toVr = (url) => location.href = url;

</script>
<template>
  <wx-pop ref="wxPopRef"></wx-pop>
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
    <div class="card" @click="toDetail(item.showSchemeId)" v-for="(item,index) in cardList" :key="index">
      <div class="img-wrap">
        <van-image class="img" width="100%" height="4.47rem" fit="cover" :src="item.cover" />
        <div class="img-cover">
          <div class="card-tags">
            <div v-for="(tag,i) in item.tagsArr" :key="i">{{tag}}</div>
          </div>
          <div class="vr-btn" @click.stop="toVr(item.vrUrl)" v-if="item.vrUrl"></div>
        </div>
      </div>
      <div class="card-desc">
        <div class="desc-lef">{{item.brandName}}</div>
        <div class="desc-rig">
          <div class="sheng">预计省
            <span>{{item.saveMoneyAmount}}</span>
            万
          </div>
          <div class="get-discount" @click.stop="showPopup">
            获取折扣
          </div>
        </div>
      </div>
    </div>
    <img src="../images/home/card.png" class="bottom-card"/>
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
    margin-top: .3rem;
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
  .bottom-card{
    width:6.7rem;
    height:3.2rem;
    margin-top:.3rem;
  }
}
</style>