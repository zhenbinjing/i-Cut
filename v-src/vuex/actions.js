import request from 'axios';

export const loadings = ({ commit, state }) =>
  request
    .get(`https://i-cut.cc/axios.json`)
    .then(response => {
      if (response.statusText === 'OK') {
        commit('loadings', response.data);
      }
    })
    .catch(error => {
      console.log(error);
    });

export const increment = ({ commit }) => commit('increment');
export const decrement = ({ commit }) => commit('decrement');
