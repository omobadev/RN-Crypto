//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import axios from "axios"
// @ts-ignore
import JWT from "expo-jwt"

import { AppStateType, InferActionsTypes } from "../../ReduxStore"
import { State } from "react-native-gesture-handler"
const key = "shh"

////////////////////////////////////////////////////////////////////////

const initialState = {
  BudgetInfo: {
    CGC: {
      price: null as string | null,
      value2: null as string | null,
    },

    MiningCGC: {
      price: null as string | null,
      value2: null as string | null,
    },

    DailyIncome: {
      price: null as string | null,
      value2: null as string | null,
    },
  },

  TransactionsList: [] as Array<{
    isIncome: boolean
    moneyAmount: string
    createdAt: string
    ID: string
  }>,
}

type initialStateType = typeof initialState

// *REDUCER* //
const UserGetReducer = (
  state = initialState,
  action: ActionTypes
): initialStateType => {
  if (action.type === "SET_USER_FINANCES_INFO") {
    return {
      ...state,
      BudgetInfo: {
        CGC: action.CGC,
        MiningCGC: action.MiningCGC,
        DailyIncome: action.DailyIncome,
      },
    }
  }

  if (action.type === "SET_TRANSACTIONS_HISTORY") {
    return {
      ...state,
      TransactionsList: action.transactionsList,
    }
  }

  return state
}

export default UserGetReducer

///////////////////////////////////////////////////////////////////////

type ActionTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  setUserFinancesInfoActionCreator: (
    CGC: {
      price: string
      value2: string
    },
    MiningCGC: {
      price: string
      value2: string
    },
    DailyIncome: {
      price: string
      value2: string
    }
  ) =>
    ({
      type: "SET_USER_FINANCES_INFO",
      CGC,
      MiningCGC,
      DailyIncome,
    } as const),

  setTransactionsHistoryActionCreator: (
    transactionsList: Array<{
      isIncome: boolean
      moneyAmount: string
      createdAt: string
      ID: string
    }>
  ) =>
    ({
      type: "SET_TRANSACTIONS_HISTORY",
      transactionsList,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

// Get user finances info
export const getUserGeneralFinancesInfoThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios.get("").then((res: any) => {
      dispatch(
        ActionCreatorsList.setUserFinancesInfoActionCreator(
          res.data.CGC,
          res.data.MiningCGC,
          res.data.DailyIncome
        )
      )
    })
  }
}

// Get transactions history
export const getTransactionsHistoryThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState()

    const data = JWT.encode(
      {
        action: "transactionsList",
        uid: state.AuthState.userID,
      },
      key
    )

    await axios
      .post("http://cgc.cgc.capital/api_interface", JSON.stringify(data))
      .then((res: any) => {
        dispatch(
          ActionCreatorsList.setTransactionsHistoryActionCreator(
            JWT.decode(res.data.data, key)
          )
        )
      })
  }
}
