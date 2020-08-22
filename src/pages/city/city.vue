<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cityList"></city-search>
    <city-list
      :cities="cityList"
      :hotcities="hotcityList"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="cityList"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlphabet from './components/alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotcityList: [],
      cityList: {},
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotcityList = data.hotCities
        this.cityList = data.cities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
