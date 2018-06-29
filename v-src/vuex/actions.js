import axios from 'axios';

export const getData = ({ commit, state }) =>
  axios.get('https://i-cut.cc/axios.json').then(res => {
    commit('DATA_LIST', res.data);
  });

export const loadings = ({ commit, state }) =>
  axios.get('https://i-cut.cc/axios.json').then(res => {
    commit('COUNT_LIST', res.data);
  });

export const increment = ({ commit }) => commit('increment');
export const decrement = ({ commit }) => commit('decrement');
