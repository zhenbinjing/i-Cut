export const increment = ({ commit, state }) => commit('increment')
export const decrement = ({ commit, state }) => commit('decrement')
/*
import request from 'axios'

export const getTopics = ({ commit, state }) => {
  return request.get('http://i-cut.cc/axios.json').then((response) => {
    if (response.statusText === 'OK') {
      commit('TOPICS_LIST', response.data)
    }
  }).catch((error) => {
    console.log(error)
  })
}*/