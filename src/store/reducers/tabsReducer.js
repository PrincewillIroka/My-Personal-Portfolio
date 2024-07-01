import * as Actions from "../actions";

const initialState = {
  activeTab: "About",
  isMobileView: false,
  hasClickedHamburgerBtn: false,
};

const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGE_ACTIVE_TAB: {
      return {
        ...state,
        activeTab: action.payload,
      };
    }
    case Actions.CHANGE_MOBILE_VIEW: {
      return {
        ...state,
        isMobileView: action.payload,
      };
    }
    case Actions.HAS_CLICKED_HAMBURGER_BTN: {
      let { hasClickedHamburgerBtn } = state;
      hasClickedHamburgerBtn = !hasClickedHamburgerBtn;
      return {
        ...state,
        hasClickedHamburgerBtn,
      };
    }
    default: {
      return state;
    }
  }
};

export default tabsReducer;
