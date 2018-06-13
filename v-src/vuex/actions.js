import request from 'axios';

//const API_PROXY = 'https://bird.ioliu.cn/v1/?url=';

export const getTopics = ({ commit, state }) =>
  request
  .get(`/axios.json`)
    .then(response => {
      if (response.statusText === 'OK') {
        commit('TOPICS_LIST', response.data);
      }
    })
    .catch(error => {
      console.log(error);
    });

export const increment = ({ commit }) => commit('increment');
export const decrement = ({ commit }) => commit('decrement');
