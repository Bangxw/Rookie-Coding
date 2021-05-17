import { createStore, } from 'redux'
import { reducer, } from '@reducers/common'

const store = createStore(reducer)

export default store
