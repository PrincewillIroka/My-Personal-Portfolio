export const CHANGEACTIVETAB = 'CHANGEACTIVETAB'
export const CHANGEMOBILEVIEW = 'CHANGEMOBILEVIEW'

export const toggleActiveTab = tab => ({
  type: CHANGEACTIVETAB,
  payload: tab
})

export const toggleMobileView = () => ({
  type: CHANGEMOBILEVIEW
})
