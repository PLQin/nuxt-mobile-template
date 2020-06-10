import Cookies from 'js-cookie'

export const state = () => ({
  token: ''
})

export const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
    Cookies.set('token', token)
  },
  SET_LOGOUT: (state, redirect) => {
    state.token = ''
    Cookies.remove('token')
  }
}

export const actions = {}
