import { INCREASE, DECREASE, } from '@actions/common'

// reducer
export const reducer = (state = 10000, action) => {
  switch (action.type) {
  case INCREASE:
    return state += 100;
  case DECREASE:
    return state -= 100
  default: return state;
  }
}
