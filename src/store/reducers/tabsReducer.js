import * as Actions from '../actions'

const initialState = {
  activeTab: 'Contact'
}

const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGEACTIVETAB: {
      return {
        ...state,
        activeTab: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export default tabsReducer
