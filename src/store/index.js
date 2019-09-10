import { createStore } from 'redux'
import tabsReducer from './reducers/tabsReducer'

const store = createStore(tabsReducer)

export default store
