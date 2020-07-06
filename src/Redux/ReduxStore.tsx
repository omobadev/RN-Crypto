// REDUX IMPORTS //
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"

// REDUCERS IMPORTS //
// Authentification reducers
import AuthReducer from "~/Redux/Reducers/AuthReducers/AuthSetReducer"
// Chats reducer
import ChatsGetReducer from "~/Redux/Reducers/ChatsReducers/ChatsGetReducer"
// Finances reducers
import FinancesGetReducer from "~/Redux/Reducers/FinancesReducers/FinancesGetReducer"
// User reducers
import UserGetReducer from "~/Redux/Reducers/UserReducers/UserGetReducer"
// Extra reducers
import ExtraGetReducer from "~/Redux/Reducers/ExtraReducers/ExtraGetReducer/ExtraGetReducer"

////////////////////////////////////////////////////////////////////////

let reducers = combineReducers({
  // Authentification reducers
  AuthState: AuthReducer,
  // Chats reducers
  ChatsGetState: ChatsGetReducer,
  //Finances reducer
  FinancesGetState: FinancesGetReducer,
  // User reducers
  UserGetState: UserGetReducer,
  // Extra reducers
  ExtraGetState: ExtraGetReducer,
})

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
