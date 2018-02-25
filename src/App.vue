<template>
  <div id="app">
    <div class="left-global-block">
      <bet-panel></bet-panel>
    </div>
    <el-menu
      :default-active="$route.path"
      :router="true"
      :collapse = true
      class = "el-menu-demo-vertical"
      mode="vertical"
      background-color="#545c64"
      text-color="#505057"
      active-text-color="#01d10c">
        <el-menu-item index="/main_roulett"><svg fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"/></svg><span slot="title">Главная</span></el-menu-item>
        <el-menu-item index="/duel_roulett"><svg fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"/></svg><span slot="title">Дуэль</span></el-menu-item>
        <el-menu-item index="/person"><svg fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18"><path d="M9 8c1.66 0 2.99-1.34 2.99-3S10.66 2 9 2C7.34 2 6 3.34 6 5s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V16h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg><span slot="title">Пользователь</span></el-menu-item>
        <el-menu-item index="/settings"><svg fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg><span slot="title">Настройки</span></el-menu-item>
        <el-menu-item index="/info"><svg fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg><span slot="title">Инфо</span></el-menu-item>
    </el-menu>
    <div class="middle-dynamic" v-bind:class="{ largemiddle: !showed }"><router-view></router-view></div>
    <div class="chat-box" v-bind:class="{ hiddenchat: !showed }" >
      <chat-box v-if="showed"></chat-box>
    </div>
    <div v-bind:class="{ smallbutton: !showed }" class="bottom-panel"><div style="margin: 10px 17px;cursor:pointer" @click="showed=!showed"><img src="@/assets/icons8.png"></div> </div>
    <div>
      <div class="language-selector">
        <p class="language-drawer" v-show="active">
          <a class="lang-selector en" title="English"><img src="./assets/united-kingdom.png" alt="English" title="English"></a>
          <a class="lang-selector ru" title="Русский (Russian)"><img src="./assets/russia.png" alt="Русский (Russian)" title="Русский (Russian)"></a>
          <a class="lang-selector pt_br" title="Português Brasileiro (Brazilian Portuguese)"><img src="./assets/brazil.png" alt="Português Brasileiro (Brazilian Portuguese)" title="Português Brasileiro (Brazilian Portuguese)"></a>
          <a class="lang-selector de" title="Deutsch (German)"><img src="./assets/germany.png" alt="Deutsch (German)" title="Deutsch (German)"></a>
          <a class="lang-selector pl" title="Polskie (Polish)"><img src="./assets/poland.png" alt="Polskie (Polish)" title="Polskie (Polish)"></a>
          <a class="lang-selector tr" title="Türkçe (Turkish)"><img src="./assets/turkey.png" alt="Türkçe (Turkish)" title="Türkçe (Turkish)"></a><br>
          <a class="lang-selector se" title="Sverige (Swedish)"><img src="./assets/sweden.png" alt="Sverige (Swedish)" title="Sverige (Swedish)"></a>
          <a class="lang-selector ro" title="Română (Romanian)"><img src="./assets/Romania.png" alt="Română (Romanian)" title="Română (Romanian)"></a>
          <a class="lang-selector it" title="Italiano (Italian)"><img src="./assets/italy.png" alt="Italiano (Italian)" title="Italiano (Italian)"></a>
          <a class="lang-selector es" title="Español (Spanish)"><img src="./assets/Spain.png" alt="Español (Spanish)" title="Español (Spanish)"></a>
          <a class="lang-selector fr" title="Français (French)"><img src="./assets/France.png" alt="Français (French)" title="Français (French)"></a>
          <a class="lang-selector zh" title="中文 (Chinese)"><img src="./assets/china.png" alt="中文 (Chinese)" title="中文 (Chinese)"></a>
        </p>
        <a class="current-language lang-selector" @click="mouseOver">
          <div style="display: inline-block"><img src="./assets/russia.png"></div><div style="line-height: 40px;display: inline-block;padding-left: 5px"><img src="./assets/icons8-sort-down-50.png" style="vertical-align: top"></div>
        </a>
      </div>
    </div>
    <div v-if="showAuthPopup" style="z-index: 1000;position: fixed;left: 0px;top: 0px;width: 100vw;height: 100vh;background-color: rgba(39,39,45,0.85)">
      <div style="width: 400px; height: 270px; margin: auto;margin-top: 100px;background-color: #1c1c22;box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 7px 0 rgba(0, 0, 0, 0.12), 0 5px 3px -2px rgba(0, 0, 0, 0.2);">
        <div style="padding: 20px 0px;font-size: 24px; color: #00d00b; text-align: center">Авторизация</div>
        <div style="margin-top: 10px"><el-input placeholder="Логин" size="medium" style="background-color: #222028;border: 1px solid #545454; width: 250px;border-radius: 5px"></el-input></div>
        <div style="margin-top: 10px"><el-input placeholder="Пароль" size="medium" style="background-color: #222028;border: 1px solid #545454; width: 250px;border-radius: 5px"></el-input></div>
        <div style="text-align: right; padding-right: 75px; color: #545454">Забыли пароль?</div>
        <el-button style="width: 150px;margin: auto;margin-top: 20px" class="green-el-button" @click="toGoogle" plain>Войти</el-button>
        <div style="text-align: center; color: #545454">Создать профиль</div>
      </div>
    </div>
    <div v-if="showGoogleAuth" style="z-index: 1000;position: fixed;left: 0px;top: 0px;width: 100vw;height: 100vh;background-color: rgba(28,28,34,0.85)">
      <div style="width: 400px; height: 200px; margin: auto;margin-top: 100px;background-color: #1c1c22;box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 7px 0 rgba(0, 0, 0, 0.12), 0 5px 3px -2px rgba(0, 0, 0, 0.2);">
        <div style="padding: 20px 0px;font-size: 24px; color: #00d00b; text-align: center">Google authenticator</div>
        <div style="margin-top: 10px"><el-input placeholder="Введите Ваш Google идентификатор" size="medium" style="background-color: #222028;border: 1px solid #545454; width: 350px;border-radius: 5px"></el-input></div>
        <el-button style="width: 150px;margin: auto;margin-top: 20px" class="green-el-button" @click="fullyAuthorised" plain>Продолжить</el-button>
      </div>
    </div>
    <div v-if="showSupport" style="z-index: 1000;position: fixed;left: 0px;top: 0px;width: 100vw;height: 100vh;background-color: rgba(28,28,34,0.85)">
      <div style="width: 400px;padding: 20px 40px; height: 360px; margin: auto;margin-top: 100px;background-color: #1c1c22;box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 7px 0 rgba(0, 0, 0, 0.12), 0 5px 3px -2px rgba(0, 0, 0, 0.2);">
        <div style="text-align: center; color: #545454;font-size: 18px">Техническая поддержка</div>
        <div style="text-align: left; color: #545454;margin-top: 10px">Введите тему вопроса</div>
        <div><el-input size="medium" style="background-color: #222028;border: 1px solid #545454; width: 400px;border-radius: 5px"></el-input></div>
        <div style="text-align: left; color: #545454;margin-top: 10px">Введите адрес эл. почты</div>
        <div><el-input size="medium" style="background-color: #222028;border: 1px solid #545454; width: 400px;border-radius: 5px"></el-input></div>
        <div style="text-align: left; color: #545454;margin-top: 10px">Введите текст сообщения</div>
        <el-input
          style="border: 1px solid #545454; width: 400px;border-radius: 5px"
          type="textarea"
          :rows="5"
          v-model="textarea">
        </el-input>
        <div style="text-align: right"><el-button style="width: 150px;margin-top: 20px" class="green-el-button" @click="closeSupport" plain>Отправить</el-button></div>
      </div>
    </div>
    <div v-if="showDeposit" style="z-index: 1000;position: fixed;left: 0px;top: 0px;width: 100vw;height: 100vh;background-color: rgba(28,28,34,0.85)">
      <div style="width: 400px;padding: 20px 40px; height: 270px; margin: auto;margin-top: 100px;background-color: #1c1c22;box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 7px 0 rgba(0, 0, 0, 0.12), 0 5px 3px -2px rgba(0, 0, 0, 0.2);">
        <div style="text-align: center; color: #545454;font-size: 18px">Пополнение счета</div>
        <div style="text-align: left; color: #545454;margin-top: 10px">Введите сумму</div>
        <el-row>
          <el-col :span="14" style="padding: 0px 5px">
            <div><el-input value="100$" size="medium" style="background-color: #222028;border: 1px solid #545454;border-radius: 5px"></el-input></div>
          </el-col>
          <el-col :span="5" style="padding: 0px 5px">
            <el-button size="medium" style="margin: auto" class="green-el-button" plain>100$</el-button>
          </el-col>
          <el-col :span="5" style="padding: 0px 5px">
            <el-button size="medium" style="margin: auto" class="green-el-button" plain>200$</el-button>
          </el-col>
        </el-row>
        <div style="text-align: left; color: #545454;margin-top: 30px">Выберите платежную систему</div>
        <el-row>
          <el-col :span="6" style="padding: 0px 5px"><img style="vertical-align: middle" src="./assets/Nem_logotype_overunder_lightbg_WEB.png"/></el-col>
          <el-col :span="6" style="padding: 0px 5px"><img style="vertical-align: middle" src="./assets/sia-400x200.png"/></el-col>
          <el-col :span="6" style="padding: 0px 5px"><img style="vertical-align: middle" src="./assets/Bitcoin-768x768.png"/></el-col>
          <el-col :span="6" style="padding: 0px 5px; padding-top: 15px"><img style="width: 100px;vertical-align: middle" src="./assets/bitshares-400x200.png"/></el-col>
        </el-row>
        <div style="text-align: right"><el-button style="width: 150px;margin: auto;margin-top: 20px" class="green-el-button" @click="closeDeposit" plain>Продолжить</el-button></div>
      </div>
    </div>
    <div v-if="showOutput" style="z-index: 1000;position: fixed;left: 0px;top: 0px;width: 100vw;height: 100vh;background-color: rgba(28,28,34,0.85)">
      <div style="width: 400px;padding: 20px 40px; height: 270px; margin: auto;margin-top: 100px;background-color: #1c1c22;box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 7px 0 rgba(0, 0, 0, 0.12), 0 5px 3px -2px rgba(0, 0, 0, 0.2);">
        <div style="text-align: center; color: #545454;font-size: 18px">Вывод средств</div>
        <div style="text-align: left; color: #545454;margin-top: 10px">Введите сумму</div>
        <el-row>
          <el-col :span="14" style="padding: 0px 5px">
            <div><el-input value="100$" size="medium" style="background-color: #222028;border: 1px solid #545454;border-radius: 5px"></el-input></div>
          </el-col>
          <el-col :span="5" style="padding: 0px 5px">
            <el-button size="medium" style="margin: auto" class="green-el-button" plain>100$</el-button>
          </el-col>
          <el-col :span="5" style="padding: 0px 5px">
            <el-button size="medium" style="margin: auto" class="green-el-button" plain>200$</el-button>
          </el-col>
        </el-row>
        <div style="text-align: left; color: #545454;margin-top: 30px">Выберите платежную систему</div>
        <el-row>
          <el-col :span="6" style="padding: 0px 5px"><img style="vertical-align: middle" src="./assets/Nem_logotype_overunder_lightbg_WEB.png"/></el-col>
          <el-col :span="6" style="padding: 0px 5px"><img style="vertical-align: middle" src="./assets/sia-400x200.png"/></el-col>
          <el-col :span="6" style="padding: 0px 5px"><img style="vertical-align: middle" src="./assets/Bitcoin-768x768.png"/></el-col>
          <el-col :span="6" style="padding: 0px 5px; padding-top: 15px"><img style="width: 100px;vertical-align: middle" src="./assets/bitshares-400x200.png"/></el-col>
        </el-row>
        <div style="text-align: right"><el-button style="width: 150px;margin: auto;margin-top: 20px" class="green-el-button" @click="closeOutput" plain>Продолжить</el-button></div>
      </div>
    </div>
  </div>
</template>

<script>
import ChatBox from './components/ChatBox'
import BetPanel from './components/BetPanel'

export default {
  name: 'App',
  components: {
    ChatBox,
    BetPanel
  },
  data () {
    return {
      active: false,
      showed: true
    }
  },
  methods: {
    mouseOver: function () {
      this.active = !this.active
    },
    toGoogle: function () {
      this.$store.commit('CHANGE_AUTH_POPUP', false)
      this.$store.commit('CHANGE_GOOGLE_AUTH', true)
    },
    fullyAuthorised: function () {
      this.$store.commit('CHANGE_GOOGLE_AUTH', false)
      this.$store.commit('CHANGE_GLOBAL_AUTH', true)
    },
    closeSupport () {
      this.$store.commit('CHANGE_SUPPORT', false)
    },
    closeDeposit () {
      this.$store.commit('CHANGE_DEPOSIT', false)
    },
    closeOutput () {
      this.$store.commit('CHANGE_OUTPUT', false)
    }
  },
  computed: {
    showAuthPopup () {
      return this.$store.state.showAuthPopup
    },
    showGoogleAuth () {
      return this.$store.state.showGoogleAuth
    },
    showSupport () {
      return this.$store.state.support
    },
    showDeposit () {
      return this.$store.state.deposit
    },
    showOutput () {
      return this.$store.state.output
    }
  }
}
</script>

<style>
  html{overflow-x: auto}
body{
  font-family: OpenSans, Calibri, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #1c1c22;
  min-width: 800px;
}
.el-menu-demo-vertical{
  height: 100vh;
  width: 60px;
  position: fixed;
  top: 0px;
  left: 25vw
}
@media only screen and (min-width: 1200px) {
  .el-menu-demo-vertical{
    left: 300px
  }
}
@media only screen and (max-width: 800px) {
  .el-menu-demo-vertical{
    left: 200px
  }
}
.left-global-block{
  position: fixed;
  top: 0px;
  left: 0px;
  width: 25vw;
  max-width: 300px;
  min-width: 200px;
  background-color: #1c1c22;
  height: 100vh;
}
.middle-dynamic{
  position: fixed;
  top: 0px;
  left: calc(25vw + 60px);
  width: calc(50vw - 60px);
  background-color: #222028;
  height: 100vh;
  transition: 1s ease;
  overflow-x: auto;
}
@media only screen and (min-width: 1200px) {
  .middle-dynamic{
    left: 360px;
    width: calc(100vw - 660px);
  }
}
@media only screen and (max-width: 800px) {
  .middle-dynamic{
    left: 260px;
    width: calc(100vw - 460px);
  }
}
.largemiddle{
  position: fixed;
  top: 0px;
  left: calc(25vw + 60px);
  width: calc(75vw - 100px);
  background-color: #222028;
  height: 100vh;
  transition: 1s ease;
}
@media only screen and (min-width: 1200px) {
  .largemiddle{
    left: 360px;
    width: calc(100vw - 400px);
  }
}
@media only screen and (max-width: 800px) {
  .largemiddle{
    left: 260px;
    width: calc(100vw - 300px);
  }
}
.chat-box{
  position: fixed;
  top: 0px;
  right: 0px;
  width: 25vw;
  max-width: 300px;
  min-width: 200px;
  background-color: #1c1c22;
  height: 100vh;
}
.hiddenchat{
  width: 40px;
  min-width: 40px;
  right: 0px;
  background-color: #1c1c22;
  transition: 1s ease;
}
.el-menu {
  border: none;
}
.el-menu{
  background-color: #1c1c22 !important;
}
.el-menu-item{
  background-color: #1c1c22 !important;
}
.is-active {
  border-right: 2px solid #00d00b;
  background-color: #222028 !important;
}
.language-selector {
  display: block;
  width: 60px;
  height: 50px;
  text-align: center;
  position: fixed;
  left: 25vw;
  bottom: 50px;
  background-color: #1c1c22;
  color: #a0a0a0;
  z-index: 300;
  cursor: pointer;
}
.language-selector:hover{
  background-color: #222028;
}
@media only screen and (min-width: 1200px) {
  .language-selector {
    left: 300px;
  }
}
@media only screen and (max-width: 800px) {
  .language-selector {
    left: 200px;
  }
}
.language-selector .language-drawer {
  width: 280px;
  position: fixed;
  z-index: 400;
  left: calc(25vw + 60px);
  bottom: 5px;
  background-color: #1c1c22;
  height: 80px;
}
@media only screen and (min-width: 1200px) {
  .language-selector .language-drawer {
    left: 360px;
  }
}
@media only screen and (max-width: 800px) {
  .language-selector .language-drawer {
    left: 260px;
  }
}
.lang-selector {
  padding: 5px;
  height: 40px;
  display: inline-block;
}
  .bottom-panel{
    position: fixed;
    bottom: 0px;
    right: 0px;
    width: 25vw;
    min-width: 200px;
    max-width: 300px;
    height: 40px;
    text-align: left;
  }
  .smallbutton{
    position: fixed;
    bottom: 0px;
    right: 0px;
    width: 40px;
    min-width: 40px;
  }
  .el-textarea__inner {
    background-color: transparent !important;
    border: none;
  }
  .el-input__inner{
    background-color: #1c1c22 !important;
    border: none;
  }
    .el-radio__input.is-checked .el-radio__inner {
    border-color: #00d00b !important;
    background: #00d00b !important;
}
  .el-radio__input.is-checked+.el-radio__label{
    color: #525252 !important;
  }
  .el-radio__label{padding-left: 5px; font-size: 16px}
  .el-radio__inner::after{background: #1c1c22}
  .green-el-button{
    margin: 0px;
    width: 100%;
    background-color: #222028;
    border-color: #00d00b;
    color: #545454;
  }
  .green-el-button:hover{
    width: 100%;
    background-color: #17171e !important;
    border-color: #00d00b !important;
    color: #545454 !important;
    transition: 1s ease;
  }
  .green-el-button:active{
    width: 100%;
    background-color: #17171e !important;
    border-color: #00d00b !important;
    color: #545454 !important;
  }
  .green-el-button:focus{
    width: 100%;
    background-color: #17171e !important;
    border-color: #00d00b !important;
    color: #545454 !important;
  }

  ::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-button{background: #414141;height:6px;width:6px}  ::-webkit-scrollbar-track-piece{background: #414141
                                                                                                                 }  ::-webkit-scrollbar-thumb{background: #191919;border-radius:6px}
</style>
