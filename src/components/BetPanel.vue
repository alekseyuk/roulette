<template>
  <div>
    <div>
      <div class="main-logo">
        <img src="../assets/company_logo.png">
      </div>
    </div>
    <div class="bet-buttons-group grey-style">
      <div class="button-for-bet">
        <router-link to="/duel_roulett">
          <el-button class="gray-el-button" plain>Дуэль</el-button>
        </router-link>
      </div>
      <div class="all-bets-info-line">
        <div class="all-bets-left-wrapper">
          <svg style="vertical-align: bottom" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18"><path d="M9 8c1.66 0 2.99-1.34 2.99-3S10.66 2 9 2C7.34 2 6 3.34 6 5s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V16h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg><span id="all-bets-2x-bets">159</span>
        </div>
        <div class="all-bets-right-wrapper">
          <img src="../assets/bux_gray.svg" class="icon-for-bet"><span style="margin-left: 5px">149,477</span>
        </div>
      </div>
    </div>
    <div class="bet-buttons-group green-style">
      <div class="button-for-bet">
        <router-link to="/main_roulett">
          <el-button class="green-el-button" plain @click="changeMode(2)">4 из 20</el-button>
        </router-link>
      </div>
      <div class="all-bets-info-line">
        <div class="all-bets-left-wrapper">
          <svg style="vertical-align: bottom" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18"><path d="M9 8c1.66 0 2.99-1.34 2.99-3S10.66 2 9 2C7.34 2 6 3.34 6 5s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V16h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg><span id="all-bets-2x-bets">159</span>
        </div>
        <div class="all-bets-right-wrapper">
          <img src="../assets/bux_green.svg" class="icon-for-bet"><span style="margin-left: 5px">149,477</span>
        </div>
      </div>
    </div>
    <div class="bet-buttons-group red-style">
      <div class="button-for-bet">
        <router-link to="/main_roulett">
          <el-button class="red-el-button" plain @click="changeMode(3)">5 из 36</el-button>
        </router-link>
      </div>
      <div class="all-bets-info-line">
        <div class="all-bets-left-wrapper">
          <svg style="vertical-align: bottom" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18"><path d="M9 8c1.66 0 2.99-1.34 2.99-3S10.66 2 9 2C7.34 2 6 3.34 6 5s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V16h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg><span id="all-bets-2x-bets">159</span>
        </div>
        <div class="all-bets-right-wrapper">
          <img src="../assets/bux_red.svg" class="icon-for-bet"><span style="margin-left: 5px">149,477</span>
        </div>
      </div>
    </div>
    <div class="bet-buttons-group blue-style">
      <div class="button-for-bet">
        <router-link to="/main_roulett">
          <el-button class="blue-el-button" plain @click="changeMode(4)">6 из 49</el-button>
        </router-link>
      </div>
      <div class="all-bets-info-line">
        <div class="all-bets-left-wrapper">
          <svg style="vertical-align: bottom" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18"><path d="M9 8c1.66 0 2.99-1.34 2.99-3S10.66 2 9 2C7.34 2 6 3.34 6 5s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V16h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg><span id="all-bets-2x-bets">159</span>
        </div>
        <div class="all-bets-right-wrapper">
          <img src="../assets/bux_blue.svg" class="icon-for-bet"><span style="margin-left: 5px">149,477</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BetPanel',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    changeMode (val) {
      this.$store.commit('CHANGE_MODE', val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-logo {
    padding-top: 20px;
    height: 160px;
    background-color: #1c1c22;
    width: 100%;
    text-align: center;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #00ce11;
  }
  .all-bets-info-line {
    text-align: right;
    margin: auto;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    height: 32px;
  }
  .all-bets-left-wrapper {
    position: absolute;
    left: 10px;
    right: 10px;
    overflow: hidden;
    text-align: left;
    line-height: 17px;
    font-size: 14px;
  }
  .all-bets-right-wrapper {
    position: absolute;
    right: 10px;
    line-height: 17px;
    font-size: 14px;
  }
  .icon-for-bet{
    width: 16px;
    height: 16px;
    vertical-align: bottom;
  }
  .bet-buttons-group{
    margin:auto;
    width: 20vw;
    max-width: 250px;
    min-width: 150px;
  }
  .grey-style{
    color: #616162;
  }
  .green-style{
    color: #00d00b;
  }
  .red-style{
    color: #c8354e;
  }
  .blue-style{
    color: #45b5da;
  }
  .gray-el-button{
    width: 100%;
    background-color: #1c1c22;
    border-color: #616162;
    color: #616162;
  }
  .gray-el-button:hover{
    width: 100%;
    background-color: #616162;
    border-color: #616162;
    color: #1c1c22;
    transition: 1s ease;
  }
  .gray-el-button:active{
    width: 100%;
    background-color: #616162;
    border-color: #616162;
    color: #1c1c22;
  }
  .gray-el-button:focus{
    width: 100%;
    background-color: #616162;
    border-color: #616162;
    color: #1c1c22;
  }
  .green-el-button{
    width: 100%;
    background-color: #1c1c22;
    border-color: #00d00b;
    color: #00d00b;
  }
  .green-el-button:hover{
    width: 100%;
    background-color: #00d00b;
    border-color: #00d00b;
    color: #1c1c22;
    transition: 1s ease;
  }
  .green-el-button:active{
    width: 100%;
    background-color: #00d00b;
    border-color: #00d00b;
    color: #1c1c22;
  }
  .green-el-button:focus{
    width: 100%;
    background-color: #00d00b;
    border-color: #00d00b;
    color: #1c1c22;
  }
  .red-el-button{
    width: 100%;
    background-color: #1c1c22;
    border-color: #c8354e;
    color: #c8354e;
  }
  .red-el-button:hover{
    width: 100%;
    background-color: #c8354e;
    border-color: #c8354e;
    color: #1c1c22;
    transition: 1s ease;
  }
  .red-el-button:active{
    width: 100%;
    background-color: #c8354e;
    border-color: #c8354e;
    color: #1c1c22;
  }
  .red-el-button:focus{
    width: 100%;
    background-color: #c8354e;
    border-color: #c8354e;
    color: #1c1c22;
  }
  .blue-el-button{
    width: 100%;
    background-color: #1c1c22;
    border-color: #45b5da;
    color: #45b5da;
  }
  .blue-el-button:hover{
    width: 100%;
    background-color: #45b5da;
    border-color: #45b5da;
    color: #1c1c22;
    transition: 1s ease;
  }
  .blue-el-button:active{
    width: 100%;
    background-color: #45b5da;
    border-color: #45b5da;
    color: #1c1c22;
  }
  .blue-el-button:focus{
    width: 100%;
    background-color: #45b5da;
    border-color: #45b5da;
    color: #1c1c22;
  }
  .el-button{
    border-radius: 10px;
    font-size: 18px;
  }
</style>
