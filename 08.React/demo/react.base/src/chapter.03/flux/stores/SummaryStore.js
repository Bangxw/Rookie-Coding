import AppDispatcher from '../AppDispatcher'
import * as ActionTypes from '../actions/ActionType'
import { EventEmitter } from 'events'
import CounterStore from './CounterStore'

const CHNAGE_EVENT = 'changed'

let computeSummary = (obj) => {
  let summary = 0
  for(const key in obj) {
    if(obj.hasOwnProperty(key)) {
      summary += obj[key]
    }
  }
  return summary
}

const SummaryStore = Object.assign({}, EventEmitter.prototype, {
  getSummary: function() {
    return computeSummary(CounterStore.getCounterValues())
  },
  emitChange: function() {
    this.emit(CHNAGE_EVENT)
  },
  addChangeListener: function(callback) {
    this.on(CHNAGE_EVENT, callback)
  },
  removeChangelistener: function(callback) {
    this.removeListener(CHNAGE_EVENT, callback)
  }
});

SummaryStore.dispatchToken = AppDispatcher.register((action) => {
  console.log(action)
  if((action.type === ActionTypes.INCREMENT) || (action.type === ActionTypes.DECREMENT)) {
    AppDispatcher.waitFor([CounterStore.dispatchToken]);
    SummaryStore.emitChange();
  }
})

export default SummaryStore