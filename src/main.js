// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import {
  Button, Message, Container, Footer, Main, Aside, Header, Menu, MenuItem, Loading, Upload, Table,
  TableColumn, Row, Col, Input, Select, Option, Tooltip, Steps, Step, Notification, DatePicker, RadioGroup,
  RadioButton, Radio, ButtonGroup, Switch, Progress
} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/ru-RU'
import locale from 'element-ui/lib/locale'

locale.use(lang)
Vue.prototype.$message = Message
Vue.prototype.$notify = Notification
Vue.use(Vuex)

Vue.use(Button)
Vue.use(Container)
Vue.use(Footer)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Loading)
Vue.use(Upload)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Tooltip)
Vue.use(Steps)
Vue.use(Step)
Vue.use(DatePicker)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Radio)
Vue.use(ButtonGroup)
Vue.use(Switch)
Vue.use(Progress)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
