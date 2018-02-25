<template>
  <div>
    <div style="min-width: 600px;margin: auto; max-width: 800px; padding: 20px 0px">
      <div style="text-align: center" v-if="mode===0">
        <div style="margin-top: 0px;text-align: right; margin-right: 50px"><img src="../assets/money coins.png" style="vertical-align: middle"><span style="font-size: 18px;margin-left: 10px;color: #00d00b">1200$</span> </div>
        <div style="width: 300px; margin: auto;margin-bottom: 20px; margin-top: 20px">
          <div style="color: gray; font-size: 12px"><span style="margin: 0px 8px">Сброс</span><span style="margin: 0px 8px">+10</span><span style="margin: 0px 8px;color: #00d00b">+100</span><span style="margin: 0px 8px">1k</span><span style="margin: 0px 8px">10k</span><span style="margin: 0px 8px">1/2</span><span style="margin: 0px 8px">2x</span><span style="margin: 0px 8px">Макс.</span></div>
          <el-input placeholder="100" style="background-color: transparent"></el-input>
        </div>
        <el-row style="margin: auto; width: 600px">
          <el-col :span="4" style="padding: 0px 10px; padding-top: 90px">
            <div style="text-align: left; margin: 4px"><div style="height: 5px; width: 40px;background-color: #45b5da"></div></div>
            <div style="text-align: left; margin: 4px"><div style="height: 5px; width: 60px;background-color: #00d00b"></div></div>
            <div style="text-align: left; margin: 4px"><div style="height: 5px; width: 44px;background-color: #45b5da"></div></div>
            <div style="text-align: left; margin: 4px"><div style="height: 5px; width: 58px;background-color: #c8354e"></div></div>
            <div style="text-align: left; margin: 4px"><div style="height: 5px; width: 40px;background-color: #43434b"></div></div>
            <div style="text-align: left; margin: 4px"><div style="height: 5px; width: 65px;background-color: #45b5da"></div></div>
            <div style="text-align: left; margin: 4px"><div style="height: 5px; width: 18px;background-color: #c8354e"></div></div>
            <div style="text-align: left; margin: 4px"><div style="height: 5px; width: 30px;background-color: #00d00b"></div></div>
            <div style="text-align: left; margin: 4px"><div style="height: 5px; width: 35px;background-color: #c8354e"></div></div>
            <div style="text-align: left; margin: 4px"><div style="height: 5px; width: 60px;background-color: #45b5da"></div></div>
            <div style="text-align: left; margin: 4px"><div style="height: 5px; width: 35px;background-color: #00d00b"></div></div>
            <div style="text-align: left; margin: 4px"><div style="height: 5px; width: 57px;background-color: #c8354e"></div></div>
            <div style="text-align: left; margin: 4px"><div style="height: 5px; width: 46px;background-color: #43434b"></div></div>
            <div style="text-align: left; margin: 4px"><div style="height: 5px; width: 36px;background-color: #00d00b"></div></div>
            <div style="text-align: left; margin: 4px"><div style="height: 5px; width: 65px;background-color: #45b5da"></div></div>
            <div style="text-align: left; margin: 4px"><div style="height: 5px; width: 18px;background-color: #c8354e"></div></div>
            <div style="text-align: left; margin: 4px"><div style="height: 5px; width: 30px;background-color: #00d00b"></div></div>
            <div style="text-align: left; margin: 4px"><div style="height: 5px; width: 35px;background-color: #43434b"></div></div>
            <div style="text-align: left; margin: 4px"><div style="height: 5px; width: 60px;background-color: #45b5da"></div></div>
            <div style="text-align: left; margin: 4px"><div style="height: 5px; width: 35px;background-color: #00d00b"></div></div>
            <div style="text-align: left; margin: 4px"><div style="height: 5px; width: 57px;background-color: #43434b"></div></div>
            <div style="text-align: left; margin: 4px"><div style="height: 5px; width: 46px;background-color: #45b5da"></div></div>
            <div style="text-align: left; margin: 4px"><div style="height: 5px; width: 36px;background-color: #00d00b"></div></div>
          </el-col>
          <el-col :span="16" style="padding: 0px">
            <div class="hello" style="width: 400px;height: 400px;background: url('https://csgo500.com/static/images/wheel_400.png')">
              <div class="arr-circle" style="margin: auto;width: 360px;height: 360px;text-align: center; padding-top: 40px">
                <img style="transform: rotate(180deg)" src="../assets/arr ci0.png">
              </div>
              <div style="position: absolute;top: 250px;left: 120px;width: 360px;text-align: center; padding-top: 40px"><span style="font-size: 24px;margin-left: 10px;color: #00d00b">12.35 s</span></div>
            </div>
          </el-col>
          <el-col :span="4" style="padding: 0px 10px; padding-top: 60px">
            <div style="text-align: left;margin: 0px 5px;padding-top: 0px; height: 20px; color: #c8354e;font-size: 16px">jack +100</div>
            <div style="text-align: left;margin: 0px 5px;padding-top: 0px; height: 20px; color: #45b5da;font-size: 16px">jack +100</div>
            <div style="text-align: left;margin: 0px 5px;padding-top: 0px; height: 20px; color: #00d00b;font-size: 16px">jack +100</div>
            <div style="text-align: left;margin: 0px 5px;padding-top: 0px; height: 20px; color: #545454;font-size: 16px">jack +100</div>
            <div style="text-align: left;margin: 0px 5px;padding-top: 0px; height: 20px; color: #00d00b;font-size: 16px">jack +100</div>
            <div style="text-align: left;margin: 0px 5px;padding-top: 0px; height: 20px; color: #45b5da;font-size: 16px">jack +100</div>
            <div style="text-align: left;margin: 0px 5px;padding-top: 0px; height: 20px; color: #c8354e;font-size: 16px">jack +100</div>
            <div style="text-align: left;margin: 0px 5px;padding-top: 0px; height: 20px; color: #545454;font-size: 16px">jack +100</div>
            <div style="text-align: left;margin: 0px 5px;padding-top: 0px; height: 20px; color: #45b5da;font-size: 16px">jack +100</div>
            <div style="text-align: left;margin: 0px 5px;padding-top: 0px; height: 20px; color: #545454;font-size: 16px">jack +100</div>
            <div style="text-align: left;margin: 0px 5px;padding-top: 0px; height: 20px; color: #c8354e;font-size: 16px">jack +100</div>
            <div style="text-align: left;margin: 0px 5px;padding-top: 0px; height: 20px; color: #45b5da;font-size: 16px">jack +100</div>
            <div style="text-align: left;margin: 0px 5px;padding-top: 0px; height: 20px; color: #00d00b;font-size: 16px">jack +100</div>
            <div style="text-align: left;margin: 0px 5px;padding-top: 0px; height: 20px; color: #c8354e;font-size: 16px">jack +100</div>
          </el-col>
        </el-row>
        <div style="width: 160px; margin: auto;margin-top: 20px">
          <div style="display: inline-block;margin: 0px 5px"><span style="font-size: 22px;color: #00d00b">Автоставки</span></div>
          <div style="display: inline-block;margin: 0px 5px"><img src="../assets/arrow top.png"></div>
        </div>
        <div style="margin-top: 30px">
          <div style="width: 400px; margin: auto">
            <div style="display: inline-block;margin: 0px 5px"><img src="../assets/webmoney.png"></div>
            <div style="display: inline-block;margin: 0px 5px"><img src="../assets/paypal.png"></div>
            <div style="display: inline-block;margin: 0px 5px"><img src="../assets/yandex.png"></div>
            <div style="display: inline-block;margin: 0px 5px"><img src="../assets/raschet-logo.png"></div>
          </div>
        </div>
      </div>
    </div>
      <four-from-twenty></four-from-twenty>
      <five-from-thirtyfive></five-from-thirtyfive>
      <six-from-fourtynine></six-from-fourtynine>
  </div>
</template>

<script>
import FourFromTwenty from './FourFromTwenty.vue'
import FiveFromThirtyfive from './FiveFromThirtyfive.vue'
import SixFromFourtynine from './SixFromFourtynine.vue'

export default {
  components: {FourFromTwenty, FiveFromThirtyfive, SixFromFourtynine},
  name: 'MainRoulett',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    mode () {
      return this.$store.state.mode
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.arr-circle{
  animation: circle 4s  infinite;
}
.arr-circle1{
  animation: circle1 2s ease infinite;
}
.arr-circle2{
  animation: circle2 6s ease infinite;
}
.arr-circle3{
  animation: circle3 4s ease infinite;
}
@keyframes circle {
  from {transform: rotate(-180deg)}
  to {transform: rotate(180deg)}
}
  @keyframes circle1 {
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
}@keyframes circle2 {
  from {transform: rotate(-90deg)}
  to {transform: rotate(270deg)}
}
  @keyframes circle3 {
  from {transform: rotate(90deg)}
  to {transform: rotate(430deg)}
}

</style>
