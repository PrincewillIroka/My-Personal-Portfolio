import * as Actions from '../actions'

const initialState = {
  activeTab: 'About',
  isMobileView: false
}

const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGE_ACTIVE_TAB: {
      return {
        ...state,
        activeTab: action.payload
      }
    }
    case Actions.CHANGE_MOBILE_VIEW: {
      return {
        ...state,
        isMobileView: !state.isMobileView
      }
    }
    default: {
      return state
    }
  }
}

export default tabsReducer
