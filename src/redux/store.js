import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import measurements from './reducers/ measurements'
import tanks from './reducers/tanks'



const reducer = combineReducers({
  measurements,
  tanks
})

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
  }

export default createStore(reducer , applyMiddleware(logger, thunk));