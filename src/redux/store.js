import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//persist
import { persistStore } from 'redux-persist'
import rootReducer from './rootReducer'

const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

const persistor = persistStore(store)

export {store, persistor}