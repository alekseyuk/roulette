export const CHANGE_MODE = function (state, val) {
  state.mode = val
  console.log('mode: ' + state.mode)
}
export const CHANGE_AUTH_POPUP = function (state, val) {
  state.showAuthPopup = val
}
export const CHANGE_GOOGLE_AUTH = function (state, val) {
  state.showGoogleAuth = val
}
export const CHANGE_GLOBAL_AUTH = function (state, val) {
  state.globalAuthorise = val
}
export const CHANGE_SUPPORT = function (state, val) {
  state.support = val
}
export const CHANGE_DEPOSIT = function (state, val) {
  state.deposit = val
}
export const CHANGE_OUTPUT = function (state, val) {
  state.output = val
}
