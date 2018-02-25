<template>
  <div id="chat-wrapper">
    <div v-if="globalAuthorise">
      <div style="height: 100px;padding-top: 30px">
        <div style="display: inline-block;margin: 0px 10px;vertical-align: middle"><img src="@/assets/Ava.png"></div>
        <div style="display: inline-block;margin: 0px 10px"><span style="font-size: 18px;color: #9A9A9D">Иван</span></div>
        <div style="display: inline-block;margin: 0px 10px"><img src="@/assets/icons8-sort50.png"></div>
      </div>
      <div id="social">
        <a href="https://twitter.com/" target="_blank">
          <img class="social-logo" src="../assets/twitter-sm.png">
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img class="social-logo" src="../assets/facebook-sm.png">
        </a>
        <a href="https://vk.com/" target="_blank">
          <img class="social-logo" src="../assets/vk-sm.png">
        </a>
      </div>
      <div id="chat-players" style="color:#00d00b;font-size: 16px;display: block;line-height: 16px">
      <span >2265</span><svg style="vertical-align: bottom" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M9 8c1.66 0 2.99-1.34 2.99-3S10.66 2 9 2C7.34 2 6 3.34 6 5s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V16h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
      </div>
    </div>
    <div v-if="!globalAuthorise">
      <el-button style="width: calc(100% - 20px);margin: auto;margin-top: 50px" class="green-el-button" @click="openAuth" plain>АВТОРИЗИРОВАТЬСЯ</el-button>
    </div>
    <ul id="chat-tabs">
    <li class="tab" v-bind:class="{ active: (lang==1) }"><a @click="lang=1" class="channel-select" data-channel="English"><span class="icon round"><img src="@/assets/squared/united-kingdom.png"></span><span style="font-size: 16px; color: rgb(154,154,157);margin-left: 30px" v-if="lang==1" class="name" data-lang="russian" data-__original="Russian" data-__trid="1000020" data-__translated="ru">English</span></a></li>
    <li class="tab" v-bind:class="{ active: (lang==2) }"><a @click="lang=2" class="channel-select" data-channel="Turkish"><span class="icon round"><img src="@/assets/squared/turkey.png"></span><span style="font-size: 16px; color: rgb(154,154,157);margin-left: 30px" v-if="lang==2" class="name" data-lang="russian" data-__original="Russian" data-__trid="1000020" data-__translated="ru">Turkey</span></a></li>
    <li class="tab" v-bind:class="{ active: (lang==3) }"><a @click="lang=3" class="channel-select" data-channel="Russian"><span class="icon round"><img src="@/assets/squared/russia.png"></span><span style="font-size: 16px; color: rgb(154,154,157);margin-left: 30px" v-if="lang==3" class="name" data-lang="russian" data-__original="Russian" data-__trid="1000020" data-__translated="ru">Русский</span></a></li>
    <li class="tab" v-bind:class="{ active: (lang==4) }"><a @click="lang=4" class="channel-select" data-channel="Portuguese"><span class="icon round"><img src="@/assets/squared/brazil.png"></span><span style="font-size: 16px; color: rgb(154,154,157);margin-left: 30px" v-if="lang==4" class="name" data-lang="russian" data-__original="Russian" data-__trid="1000020" data-__translated="ru">Brazil</span></a></li>
    <li class="tab" v-bind:class="{ active: (lang==5) }"><a @click="lang=5" class="channel-select" data-channel="Spanish"><span class="icon round"><img src="@/assets/squared/spain.png"></span><span style="font-size: 16px; color: rgb(154,154,157);margin-left: 30px" v-if="lang==5" class="name" data-lang="russian" data-__original="Russian" data-__trid="1000020" data-__translated="ru">Spain</span></a></li>
    </ul><div id="chat"><div class="message message-veteran " data-channel="English" data-uuid="msgidEnglish58" data-index="57"><div class="message-avatar-wrapper"></div></div></div>
    <div class="chat-body">
      <div
        v-bind:key="index"
        v-for="(item, index) in messages"
        class="message-in-box" style="padding: 10px 20px">
        <div style="text-align: left">
          <div style="display: inline-block;margin: 0px 7px;vertical-align: middle"><img style="width: 30px;height: 30px" src="@/assets/Ava.png"></div>
          <div style="display: inline-block;margin: 0px 7px"><span style="font-size: 14px;color: #9A9A9D">{{item.name}}</span></div>
        </div>
        <div>
          <div style="color:#9A9A9D;background-color:#2f2f2f;margin-left:50px; border-radius: 10px; width: 13vw; padding: 10px 10px;text-align: left">
            {{item.message}}
          </div>
        </div>
        <div style="text-align: right;font-size: 11px;color: #9A9A9D">{{item.time}}</div>
      </div>
    </div>
    <div class="chat-input">
      <div style="font-size: 18px; padding: 15px 30px;color:#9A9A9D" v-if="!authorise">
        <span style="color:#00d00b; cursor: pointer;border-bottom: 2px dashed #9A9A9D" @click="authorise=true">Авторизируйтесь</span>, чтобы войти в чат
      </div>
      <div style="font-size: 18px; padding: 10px 10px;text-align: center;color:#9A9A9D" v-if="authorise">
        <div style="display: inline-block;width: 14vw;margin: auto;line-height: 60px">
          <el-input
            style="background-color: transparent !important;border: none"
            type="textarea"
            :rows="2"
            v-model="text"
            placeholder="Ivan, введите ваше сообщение"
            >
          </el-input>
        </div>
        <div style="display: inline-block;vertical-align: middle;margin-left: 20px"><el-button type="success" round style="padding: 3px 5px;background-color:#00d00b;border: none" @click="pushMessage"><img style="transform:rotate(45deg)" src="@/assets/arrow.svg"></el-button></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ChatBox',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      lang: 3,
      authorise: false,
      text: '',
      messages: [
        {
          name: 'Ivan',
          message: 'Hello to all in this chat.Lorem ipsum dolor sit amet',
          time: '14:33'
        },
        {
          name: 'Maria',
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
          time: '14:33'
        },
        {
          name: 'Richard',
          message: 'Hello to all in this chat.Lorem ipsum dolor sit amet',
          time: '14:33'
        }
      ]
    }
  },
  methods: {
    pushMessage () {
      this.messages.push(
        {
          name: 'Ivan',
          message: this.text,
          time: '14:33'
        }
      )
      this.text = ''
    },
    openAuth () {
      this.$store.commit('CHANGE_AUTH_POPUP', true)
    }
  },
  computed: {
    globalAuthorise () {
      return this.$store.state.globalAuthorise
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#social {
    position: absolute;
    top: 100px;
    left: 20px;
}
.social-logo {
    height: 16px;
    margin-left: 8px;
    margin-right: 2px;
}
#chat-players {
    position: absolute;
    top: 100px;
    right: 20px;
    color: #aaa;
    display: none;
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
#chat-tabs {
    position: absolute;
    display: table;
    top: 130px;
    left: 0;
    width: 25vw;
    min-width: 200px;
    max-width: 300px;
    height: 40px;
    overflow: hidden;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    border-top: 1px solid #26262c;
    border-bottom: 1px solid #26262c;
}
#chat-tabs .tab {
    display: table-cell;
    position: relative;
    height: 35px;
    width: 35px;
    margin-left: -3px;
    margin-top: 5px;
    overflow: hidden;
    font-size: 11px;
    line-height: 35px;
}
#chat-tabs .tab.active {
  width: 100px;
  background: #222028;
  border-bottom: 2px solid #00d00b;
  transition: 1s ease;
}
#chat-tabs .tab .icon {
    display: block;
    position: absolute;
    left: 10px;
    top: 10px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
}
.tab .icon.round img {
    border-radius: 100%;
  }
  .chat-input{
    position: fixed;
    bottom: 40px;
    right: 0px;
    width: 25vw;
    min-width: 200px;
    max-width: 300px;
    height: 80px;
    text-align: left;
    border-top: 1px solid #26262c;
    border-bottom: 1px solid #26262c;
  }
  .chat-body{
    position: fixed;
    top:190px;
    height: calc(100vh - 312px);
    width: 25vw;
    min-width: 200px;
    max-width: 300px;
    overflow-y: auto;
  }
  .channel-select{
    cursor: pointer;
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
