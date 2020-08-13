// REDUX IMPORTS //
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"

// REDUCERS IMPORTS //
// Authentification reducers
import AuthReducer from "~/Redux/Reducers/AuthReducers/AuthSetReducer"
import AuthGetReducer from "~/Redux/Reducers/AuthReducers/AuthGetReducer"
// Chats reducer
import ChatsGetReducer from "~/Redux/Reducers/ChatsReducers/ChatsGetReducer"
// Finances reducers
import FinancesGetReducer from "~/Redux/Reducers/FinancesReducers/FinancesGetReducer"
import FinancesSetReducer from "~/Redux/Reducers/FinancesReducers/FinancesSetReducer"
// Stats reducers
import StatsGetReducer from "~/Redux/Reducers/StatsReducers/StatsGetReducer/StatsGetReducer"
// User reducers
import UserGetReducer from "~/Redux/Reducers/UserReducers/UserGetReducer"
// Extra reducers
import ExtraSetReducer from "~/Redux/Reducers/ExtraReducers/ExtraSetReducer"
import ExtraGetReducer from "~/Redux/Reducers/ExtraReducers/ExtraGetReducer"

////////////////////////////////////////////////////////////////////////

let reducers = combineReducers({
  // Authentification reducers
  AuthSetState: AuthReducer,
  AuthGetState: AuthGetReducer,
  // Chats reducers
  ChatsGetState: ChatsGetReducer,
  //Finances reducers
  FinancesGetState: FinancesGetReducer,
  FinancesSetState: FinancesSetReducer,
  // Stats reducers
  StatsGetState: StatsGetReducer,
  // User reducers
  UserGetState: UserGetReducer,
  // Extra reducers
  ExtraSetState: ExtraSetReducer,
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
