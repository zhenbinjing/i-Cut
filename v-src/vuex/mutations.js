export const TOPICS_LIST = (state, topics) => {
  state.topics = topics;
};
export const increment = state => {
  state.count += 1;
};
export const decrement = state => {
  state.count -= 1;
};
