import request from 'axios';

export const getTopics = ({ commit, state }) =>
  request
    .get(`//i-cut.cc/axios.json`)
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
