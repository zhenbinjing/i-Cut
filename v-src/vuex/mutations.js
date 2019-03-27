export const ROUTER_LIST = (state, data) => {
  state.router = data.router;
};

export const TEXT_LIST = (state, data) => {
  state.text = data.text;
};

export const COUNT_LIST = (state, data) => {
  state.count = data.number.count;
};

const texts = '空';
const ctexts = '点击加载初始化值';

export const increment = state => {
  if (state.count === texts) {
    state.count = ctexts;
  } else if (state.count === ctexts) {
    state.count = ctexts;
  } else {
    state.count += 1;
  }
};

export const decrement = state => {
  if (state.count === texts) {
    state.count = ctexts;
  } else if (state.count === ctexts) {
    state.count = ctexts;
  } else {
    state.count -= 1;
  }
};
