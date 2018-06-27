export const loadings = (state, data) => {
  state.count = data.number.count;
};

export const increment = state => {
  if(state.count === "空")
  {
    state.count = "点击初始化值"
  }
  else if(state.count === "点击初始化值")
  {
    state.count = "点击初始化值"
  } 
  else{
    state.count += 1;
  }
};
export const decrement = state => {
  if(state.count === "空")
  {
    state.count = "点击初始化值"
  }
  else if(state.count === "点击初始化值")
  {
    state.count = "点击初始化值"
  } 
  else{
    state.count -= 1;
  }
};
