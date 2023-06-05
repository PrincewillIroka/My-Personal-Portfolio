export const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB'
export const CHANGE_MOBILE_VIEW = 'CHANGE_MOBILE_VIEW'

export const toggleActiveTab = tab => ({
  type: CHANGE_ACTIVE_TAB,
  payload: tab
})

export const toggleMobileView = () => ({
  type: CHANGE_MOBILE_VIEW
})
