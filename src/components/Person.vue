<template>
  <div class="hello">
    <div v-if="registered">
      <div style="min-width: 600px;margin: auto; max-width: 800px; padding: 20px 40px">
        <el-row class="block-b">
          <el-col :span="8" style="padding: 10px;padding-right: 0px">
            <div>
              <div><img style="margin-top: 5px;width: 120px;height: 120px" src="../assets/Ivan.png"></div>
              <div><el-button size="mini" style="width: 120px; height: 20px;padding-top:2px" class="green-el-button" plain>Загрузить фото</el-button></div>
              <div><el-button style="margin-top: 20px; height: 30px;padding-top: 7px" class="green-el-button" plain @click="callDeposit">Пополнить счет</el-button></div>
            </div>
          </el-col>
          <el-col :span="16" style="padding: 10px">
            <div>
              <div style="text-align: right; padding-right: 10px"><el-button @click="registered=false" size="mini" style="width: 120px; height: 20px;padding-top:2px" class="green-el-button" plain>Выйти</el-button></div>
              <div style="font-size: 24px; color: #00d00b; text-align: left">Добро пожаловать, Ivan</div>
              <div style="margin-top: 7px;text-align: left;color: #545454;font-size: 16px">Баланс: <span style="font-size: 14px;margin-right: 10px;color: #00d00b">1200$</span><img src="../assets/money coins.png" style="vertical-align: middle; height: 24px;width: 24px"> </div>
              <div style="margin-top: 5px;text-align: left"><el-radio-group v-model="google"><el-radio :label="1">Включить Google authenticator</el-radio></el-radio-group></div>
              <div style="margin-top: 7px;text-align: left;color: #545454;font-size: 14px;padding-left: 15px">Ваша реферальная ссылка</div>
              <div style="text-align: left"><el-input size="mini" value="Lorem ipsum dolor sit amet, consectetur adipiscing" style="background-color: #222028;border: 1px solid #00d00b; width: calc(100% - 10px);border-radius: 3px"></el-input></div>
              <div>
                <el-row :gutter="10" style="margin-top: 10px;padding-right: 10px">
                  <el-col :span="12"><el-button style="height: 30px;padding-top: 7px" class="green-el-button" plain @click="callOutput">Вывод средств</el-button></el-col>
                  <el-col :span="12"><el-button style="height: 30px;padding-top: 7px" class="green-el-button" plain @click="callSupport">Тех. поддержка</el-button></el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
        <div class="block-b">
          <div style="text-align: center;margin-top: 10px; font-size: 16px;color: #545454">Последние 10 ставок</div>
          <el-row style="margin: 20px 10px;margin-bottom: 40px">
            <el-col :span="8" style="border-right: 1px solid #00d00b">
              <div style="width: 100px;margin: auto;text-align: left;color: #545454;font-size: 14px">Дата<br/>12.01.2018</div>
            </el-col>
            <el-col :span="8" style="border-right: 1px solid #00d00b">
              <div style="width: 100px;margin: auto;text-align: left;color: #545454;font-size: 14px">Выигрыш<br/>100$ (<span style="color: #c8354e">5 из 36</span>)</div>
            </el-col>
            <el-col :span="8">
              <div style="width: 100px;margin: auto;text-align: left;color: #545454;font-size: 14px">Числа<br/><span style="color: #c8354e">1, 2, 3, 6, 10</span></div>
            </el-col>
          </el-row>
        </div>
        <div class="block-b">
          <div style="text-align: center;margin-top: 10px; font-size: 16px;color: #545454">Последние 10 операций</div>
          <el-row style="margin: 20px 10px;margin-bottom: 40px">
            <el-col :span="8" style="border-right: 1px solid #00d00b">
              <div style="width: 100px;margin: auto;text-align: left;color: #545454;font-size: 14px">Дата<br/>12.01.2018</div>
            </el-col>
            <el-col :span="8" style="border-right: 1px solid #00d00b">
              <div style="width: 100px;margin: auto;text-align: left;color: #545454;font-size: 14px">Выигрыш<br/>100$</div>
            </el-col>
            <el-col :span="8">
              <div style="width: 100px;margin: auto;text-align: left;color: #545454;font-size: 14px">Тип операции<br/>Вывод</div>
            </el-col>
          </el-row>
        </div>
        <div class="block-b">
          <div style="text-align: center;margin-top: 10px; font-size: 16px;color: #545454">Последние 10 дуэлей</div>
          <el-row style="margin: 20px 10px;margin-bottom: 40px">
            <el-col :span="5" style="border-right: 1px solid #00d00b">
              <div style="width: 80px;margin: auto;text-align: left;color: #545454;font-size: 14px">Дата<br/>12.01.2018</div>
            </el-col>
            <el-col :span="5" style="border-right: 1px solid #00d00b">
              <div style="width: 80px;margin: auto;text-align: left;color: #545454;font-size: 14px">Выигрыш<br/>100$</div>
            </el-col>
            <el-col :span="4" style="border-right: 1px solid #00d00b">
              <div style="width: 80px;margin: auto;text-align: left;color: #545454;font-size: 14px">Мой цвет<br/><span style="color: #c8354e">Красный</span></div>
            </el-col>
            <el-col :span="5" style="border-right: 1px solid #00d00b">
              <div style="width: 80px;margin: auto;text-align: left;color: #545454;font-size: 14px">Участники<br/>Tom, Nick</div>
            </el-col>
            <el-col :span="5">
              <div style="width: 80px;margin: auto;text-align: left;color: #545454;font-size: 14px">Статус<br/>Завершен</div>
            </el-col>
          </el-row>
        </div>
        <div class="block-b">
          <div style="text-align: center;margin-top: 10px; font-size: 16px;color: #545454">Последние 10 побед</div>
          <el-row style="margin: 20px 10px;margin-bottom: 40px">
            <el-col :span="8" style="border-right: 1px solid #00d00b">
              <div style="width: 100px;margin: auto;text-align: left;color: #545454;font-size: 14px">Дата<br/>12.01.2018</div>
            </el-col>
            <el-col :span="8" style="border-right: 1px solid #00d00b">
              <div style="width: 100px;margin: auto;text-align: left;color: #545454;font-size: 14px">Выигрыш<br/>100$ (<span style="color: #00d00b">4 из 20</span>)</div>
            </el-col>
            <el-col :span="8">
              <div style="width: 100px;margin: auto;text-align: left;color: #545454;font-size: 14px">Цвет/Числа<br/><span style="color: #00d00b">1, 2, 3, 6</span></div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div v-if="!registered">
      <div style="width: 640px;margin: auto; padding: 40px 0px;padding-bottom: 10px;font-size: 24px; color: #00d00b; text-align: left">Создание аккаунта</div>
      <div class="block-register">
        <el-row style="margin: 20px 10px;margin-bottom: 0px;text-align: left">
          <el-col :span="12" style="padding: 0px 10px">
            <div style="margin-top: 7px;text-align: left;color: #545454;font-size: 18px">Введите желаемое имя аккаунта</div>
            <div style="margin-top: 10px"><el-input size="medium" style=";background-color: #222028;border: 1px solid #00d00b; width: calc(100% - 20px);border-radius: 5px"></el-input></div>
          </el-col>
        </el-row>
        <el-row style="margin: 20px 10px;margin-bottom: 0px;text-align: left">
          <el-col :span="12" style="padding: 0px 10px">
            <div style="text-align: left;color: #545454;font-size: 18px">Введите пароль</div>
            <div style="margin-top: 10px"><el-input size="medium" style="background-color: #222028;border: 1px solid #c8354e; width: calc(100% - 20px);border-radius: 5px"></el-input></div>
          </el-col>
          <el-col :span="12" style="padding: 0px 10px">
            <div style="text-align: left;color: #545454;font-size: 18px">Введите адрес эл. почты</div>
            <div style="margin-top: 10px"><el-input size="medium" style="background-color: #222028;border: 1px solid #545454; width: calc(100% - 20px);border-radius: 5px"></el-input></div>
          </el-col>
        </el-row>
        <el-row style="margin: 20px 10px;margin-bottom: 0px;text-align: left">
          <el-col :span="12" style="padding: 0px 10px">
            <div style="text-align: left;color: #545454;font-size: 18px">Подтвердите пароль</div>
            <div style="margin-top: 10px"><el-input size="medium" style="background-color: #222028;border: 1px solid #545454; width: calc(100% - 20px);border-radius: 5px"></el-input></div>
          </el-col>
          <el-col :span="12" style="padding: 0px 10px">
            <div style="text-align: left;color: #545454;font-size: 18px">Подтвердите адрес эл. почты</div>
            <div style="margin-top: 10px"><el-input size="medium" style="background-color: #222028;border: 1px solid #545454; width: calc(100% - 20px);border-radius: 5px"></el-input></div>
          </el-col>
        </el-row>
        <div style="text-align: left; padding-left: 20px;margin-top: 10px">
          <el-radio-group v-model="google" style="font-size: 18px"><el-radio :label="1">Создать Google authenticator</el-radio></el-radio-group>
        </div>
        <div style="text-align: left; padding-left: 20px;margin-top: 10px">
          <el-radio-group v-model="google"><el-radio :label="1">Я принимаю условия и подтверждаю, что мой возраст не менее 13 лет</el-radio></el-radio-group>
        </div>
        <el-row style="margin: 20px 10px;margin-bottom: 20px;text-align: left">
          <el-col :span="12" style="padding: 0px 10px">
            <el-radio-group v-model="google" style="font-size: 18px"><el-radio :label="1">Я не робот</el-radio></el-radio-group>
          </el-col>
          <el-col :span="12" style="padding: 0px 10px">
            <el-button style="width: calc(100% - 20px);" class="green-el-button" @click="registered=true" plain>ПРОДОЛЖИТЬ</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Person',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      google: 1,
      registered: false
    }
  },
  methods: {
    callSupport () {
      this.$store.commit('CHANGE_SUPPORT', true)
    },
    callDeposit () {
      this.$store.commit('CHANGE_DEPOSIT', true)
    },
    callOutput () {
      this.$store.commit('CHANGE_OUTPUT', true)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
  .block-b{
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 1px solid #17171e;
  }
  .block-register{
    margin-top: 10px;
    margin-bottom: 10px;
    margin: auto;
    width: 600px;
    padding: 10px 20px;
    background-color: #1c1c22;
  }
  .green-el-button{
    margin: 0px;
    width: 100%;
    background-color: #222028;
    border-color: #00d00b;
    color: #545454;
  }
  .green-el-button:hover{
    width: 100%;
    background-color: #17171e;
    border-color: #00d00b;
    color: #545454;
    transition: 1s ease;
  }
  .green-el-button:active{
    width: 100%;
    background-color: #17171e;
    border-color: #00d00b;
    color: #545454;
  }
  .green-el-button:focus{
    width: 100%;
    background-color: #17171e;
    border-color: #00d00b;
    color: #545454;
  }
</style>
