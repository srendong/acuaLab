import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import parameters from './reducers/parameters'


const reducer = combineReducers({
    parameters
})

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
  }

export default createStore(reducer , applyMiddleware(logger, thunk));