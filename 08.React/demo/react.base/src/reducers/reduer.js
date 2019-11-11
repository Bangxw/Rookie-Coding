const UPDATE_TITLE = 'update title'
const GLOBAL_DATA = 'global data'

export const markTitle = (state = {}, action) => {
  switch (action.type) {
  case UPDATE_TITLE:
    return {
      ...state,
      net_st: action.net_st,
      mod_sig: action.mod_sig,
      isLocking: action.isLocking,
    }
  default:
    return state;
  }
}

export const updateTitle = (data) => {
  return { type: UPDATE_TITLE, ...data, }
}

export const globalData = (state = {}, action) => {
  switch (action.type) {
  case GLOBAL_DATA:
    return {
      ...state,
      showLeftMenu: action.showLeftMenu,
    }
  default:
    return state;
  }
}

export const updateGlobalData = (data) => {
  return { type: GLOBAL_DATA, ...data, }
}