export const state = () => ({
  islogin: true
})

export const mutations = {
  login(state){
    state.islogin = true
  },
  logout(state){
    state.islogin = false
  }
}