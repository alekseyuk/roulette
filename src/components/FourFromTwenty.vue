<template>
  <div>
    <div style="width: 650px;margin: auto; max-width: 800px; padding: 20px 40px"  v-if="mode===2">
      <div style="text-align: center">
        <el-row style="margin: auto;margin-top: 10px">
          <el-col :span="12">
            <div style="margin: auto; max-width: 200px">
              <el-row :gutter="20">
                <el-col :span="10" style="margin: 0px 5px;padding-top: 3px;border-radius: 5px; background-color: #1c1c22;height: 30px; color: #00ce11;font-size: 18px"><img src="../assets/person.png" style="vertical-align: middle"> 5 </el-col>
                <el-col :span="10" style="margin: 0px 5px;padding-top: 3px;border-radius: 5px; background-color: #1c1c22;height: 30px; color: #00ce11;font-size: 18px"><img src="../assets/money coins.png" style="vertical-align: middle;height: 16px;width: 16px"> 115,55 </el-col>
              </el-row>
            </div>
            <div class="hello" style="margin: auto;margin-top: 70px;width:300px;height: 300px;background-image: url('http://image.ibb.co/mDKg3H/4from20.png')">
              <div class="arr-circle" style="position: absolute;top: 100px;left: 35px;width: 260px;height: 260px;text-align: center; padding-top: 40px">
                <img style="transform: rotate(180deg)" src="../assets/arr ci0.png">
              </div>
              <div class="arr-circle1" style="position: absolute;top: 100px;left: 35px;width: 260px;height: 260px;text-align: center; padding-top: 40px">
                <img style="transform: rotate(180deg)" src="../assets/arr ci0.png">
              </div>
              <div class="arr-circle2" style="position: absolute;top: 100px;left: 35px;width: 260px;height: 260px;text-align: center; padding-top: 40px">
                <img style="transform: rotate(180deg)" src="../assets/arr ci0.png">
              </div>
              <div class="arr-circle3" style="position: absolute;top: 100px;left: 35px;width: 260px;height: 260px;text-align: center; padding-top: 40px">
                <img style="transform: rotate(180deg)" src="../assets/arr ci0.png">
              </div>
              <div style="position: absolute;top: 190px;left: 35px;width: 260px;height: 260px;text-align: center; padding-top: 40px"><span style="font-size: 24px;margin-left: 10px;color: #00d00b">12.35 s</span></div>
            </div>
            <div style="margin: auto; max-width: 300px; margin-top: 50px">
              <el-row :gutter="20">
                <el-col :span="10" style="margin: 0px 5px;padding-top: 3px;border-radius: 5px; height: 30px; color: #545454;font-size: 18px">Ваш выигрыш </el-col>
                <el-col :span="10" style="margin: 0px 5px;padding-top: 3px;border-radius: 5px; background-color: #1c1c22;height: 30px; color: #00ce11;font-size: 18px"> 12,55 $ </el-col>
              </el-row>
            </div>
            <div style="margin: auto; max-width: 300px; margin-top: 10px">
              <div style="text-align: left;margin: 0px 5px;padding-top: 0px; height: 20px; color: #545454;font-size: 16px">12:02 числа: <span style="color: #00ce11">3, 33, 43, 2</span> результат: <span style="color: #00ce11">+100</span></div>
              <div style="text-align: left;margin: 0px 5px;padding-top: 0px; height: 20px; color: #545454;font-size: 16px">12:02 числа: <span style="color: #00ce11">3, 33, 43, 2</span> результат: <span style="color: #00ce11">+100</span></div>
              <div style="text-align: left;margin: 0px 5px;padding-top: 0px; height: 20px; color: #545454;font-size: 16px">12:02 числа: <span style="color: #00ce11">3, 33, 43, 2</span> результат: <span style="color: #00ce11">+100</span></div>
              <div style="text-align: left;margin: 0px 5px;padding-top: 0px; height: 20px; color: #545454;font-size: 16px">12:02 числа: <span style="color: #00ce11">3, 33, 43, 2</span> результат: <span style="color: #00ce11">+100</span></div>
            </div>
          </el-col>
          <el-col :span="12">
            <div style="margin-top: 20px;text-align: right; margin-right: 50px"><img src="../assets/money coins.png" style="vertical-align: middle"><span style="font-size: 18px;margin-left: 10px;color: #00d00b">1200$</span> </div>
            <div style="margin: auto; max-width: 320px; margin-top: 20px">
              <el-row :gutter="20">
                <el-col :span="11" style="margin: 0px 5px;padding-top: 3px;border-radius: 5px; height: 30px; color: #545454;font-size: 18px">Призовой фонд</el-col>
                <el-col :span="11" style="margin: 0px 5px;padding-top: 3px;border-radius: 5px; background-color: #1c1c22;height: 30px; color: #00ce11;font-size: 18px"> 12,55 $ </el-col>
              </el-row>
            </div>
            <div style="text-align: left;margin: auto;margin-top: 10px;margin-bottom: 10px;max-width: 320px;padding-top: 0px;padding-left: 15px; height: 20px; color: #545454;font-size: 18px">Выберите 4 числа из 20</div>
            <div style="margin: auto;max-width: 300px;margin-top: 20px;margin-bottom: 20px">
              <el-row style="width: 300px;margin: 10px 0px">
                <el-col :span="3" v-for="index in [1,2,3,4,5,6,7,8]" v-bind:key="index"><el-button @click="pushNumber(index)" round style="padding: 7px 10px;background-color:#1c1c22;border: none;font-size: 16px">{{index}}</el-button></el-col>
              </el-row>
              <el-row style="width: 300px;margin: 10px 0px">
                <el-col :span="3"><el-button @click="pushNumber(9)" round style="padding: 7px 10px;background-color:#1c1c22;border: none;font-size: 16px">9</el-button></el-col>
                <el-col :span="3" v-for="index in [10,11,12,13,14,15,16]" v-bind:key="index"><el-button @click="pushNumber(index)" round style="padding: 7px 7px;background-color:#1c1c22;border: none;font-size: 16px">{{index}}</el-button></el-col>
              </el-row>
              <el-row style="width: 300px;margin: 10px 0px">
                <el-col :span="3" v-for="index in [17,18,19,20]" v-bind:key="index"><el-button @click="pushNumber(index)" round style="padding: 7px 7px;background-color:#1c1c22;border: none;font-size: 16px">{{index}}</el-button></el-col>
              </el-row>
            </div>
            <div style="margin: auto; max-width: 320px; margin-top: 20px">
              <el-row :gutter="20">
                <el-col :span="8" style="margin: 0px 5px;padding-top: 3px;border-radius: 5px; height: 30px; color: #545454;font-size: 18px">Ваш выбор</el-col>
                <el-col :span="3" v-for="index in numbers" v-bind:key="index"><el-button v-bind:class="{'widebut':index<10}" round class="your-choise">{{index}}</el-button><span @click="deleteNumber(index)" style="position: absolute;margin-left: 15px;font-size: 10px;background-color: #71716f;border-radius: 10px;top: 0px;padding: 0px 4px;cursor: pointer;color: white">X</span></el-col>
              </el-row>
            </div>
            <div style="width: 320px; margin: auto;margin-bottom: 20px; margin-top: 20px">
              <div style="color: gray; font-size: 12px"><span style="margin: 0px 8px">Сброс</span><span style="margin: 0px 8px">+10</span><span style="margin: 0px 8px;color: #00d00b">+100</span><span style="margin: 0px 8px">1k</span><span style="margin: 0px 8px">10k</span><span style="margin: 0px 8px">1/2</span><span style="margin: 0px 8px">2x</span><span style="margin: 0px 8px">Макс.</span></div>
              <el-input placeholder="100" style="background-color: transparent"></el-input>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FourFromTwenty',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      numbers: []
    }
  },
  computed: {
    mode () {
      return this.$store.state.mode
    }
  },
  methods: {
    pushNumber (val) {
      if (this.numbers.length < 4 && this.numbers.indexOf(val) === -1) {
        this.numbers.push(val)
      }
    },
    deleteNumber (val) {
      var index = this.numbers.indexOf(val)
      if (index > -1) {
        this.numbers.splice(index, 1)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  .widebut{
    padding: 7px 10px !important;
  }
  .your-choise{
    padding: 7px 7px;
    background-color:#1c1c22;
    border: none;
    font-size: 16px;
    color:#00d00b
  }
</style>
