//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import axios from "axios"
// @ts-ignore
import JWT from "expo-jwt"

import { AppStateType, InferActionsTypes } from "../../ReduxStore"
const key = "shh"

////////////////////////////////////////////////////////////////////////

const initialState = {
  hasAbon: false as boolean,

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
    INPH: {
      price: null as string | null,
      value2: null as string | null,
    },
    wallet: null as string | null,
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
        INPH: action.INPH,
        wallet: action.wallet,
      },
    }
  }

  if (action.type === "SET_ABON_STATUS") {
    return {
      ...state,
      hasAbon: action.abonStatus,
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
    },
    INPH: {
      price: string
      value2: string
    },
    wallet: string
  ) =>
    ({
      type: "SET_USER_FINANCES_INFO",
      CGC,
      MiningCGC,
      DailyIncome,
      INPH,
      wallet,
    } as const),

  setAbonStatusActionCreator: (abonStatus: boolean) =>
    ({
      type: "SET_ABON_STATUS",
      abonStatus,
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
    const state = getState()

    await axios
      .post(
        "https://cgc.capital/api_interface",
        JSON.stringify(
          JWT.encode(
            {
              action: "finance",
              uid: state.AuthSetState.userID,
            },
            key
          )
        )
      )
      .then(async (res: any) => {
        const data = JWT.decode(res.data.data, key)

        dispatch(
          ActionCreatorsList.setUserFinancesInfoActionCreator(
            {
              price: data.cgc,
              value2: data.cgcUSD,
            },
            {
              price: data.profit,
              value2: data.profitUSD,
            },
            {
              price: data.profitSec,
              value2: data.profitSecUSD,
            },
            {
              price: data.inph,
              value2: data.inphUSD,
            },
            data.wallet
          )
        )
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response)
        }
      })

    await axios
      .post(
        "https://cgc.capital/api_interface",
        JSON.stringify(
          JWT.encode(
            {
              action: "get_abon_time",
              uid: state.AuthSetState.userID,
            },
            key
          )
        )
      )
      .then(async (res: any) => {
        const data = JWT.decode(res.data.data, key)
        dispatch(
          ActionCreatorsList.setAbonStatusActionCreator(
            data.time === 0 ? false : true
          )
        )
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response)
        }
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
        uid: state.AuthSetState.userID,
      },
      key
    )

    await axios
      .post("https://cgc.capital/api_interface", JSON.stringify(data))
      .then((res: any) => {
        dispatch(
          ActionCreatorsList.setTransactionsHistoryActionCreator(
            JWT.decode(res.data.data, key)
          )
        )
      })
  }
}
