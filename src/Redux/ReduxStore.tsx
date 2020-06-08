// REDUX IMPORTS //
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"

// REDUCERS IMPORTS //

////////////////////////////////////////////////////////////////////////

let reducers = combineReducers({})

type reducersType = typeof reducers
export type AppStateType = ReturnType<reducersType>

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesTypes<T>>

const composeEnhancers = compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store
