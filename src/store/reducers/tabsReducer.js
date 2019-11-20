import * as Actions from '../actions'

const initialState = {
  activeTab: 'About',
  isMobileView: false
}

const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGEACTIVETAB: {
      return {
        ...state,
        activeTab: action.payload
      }
    }
    case Actions.CHANGEMOBILEVIEW: {
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
