import * as Actions from '../actions'

const initialState = {
  activeTab: 'About'
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
