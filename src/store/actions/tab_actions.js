export const CHANGE_ACTIVE_TAB = "CHANGE_ACTIVE_TAB";
export const CHANGE_MOBILE_VIEW = "CHANGE_MOBILE_VIEW";
export const HAS_CLICKED_HAMBURGER_BTN = "HAS_CLICKED_HAMBURGER_BTN";

export const toggleActiveTab = (tab) => ({
  type: CHANGE_ACTIVE_TAB,
  payload: tab,
});

export const toggleMobileView = (value) => ({
  type: CHANGE_MOBILE_VIEW,
  payload: value,
});

export const toggleClickedHamburgerBtn = (value) => ({
  type: HAS_CLICKED_HAMBURGER_BTN,
});
