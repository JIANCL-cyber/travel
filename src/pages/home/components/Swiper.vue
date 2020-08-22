<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/2007/e0/e0f18647b7978fa0a3.water.jpg_710x360_63c24f71.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/2006/55/55f6406af2a258b2a3.water.jpg_710x360_4b914c74.jpg'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1705/68/681e2de923399fc3a3.water.jpg_710x360_05a4df24.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background  #fff !important
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 50%
    background #eee
    .swiper-img
      width 100%
</style>
