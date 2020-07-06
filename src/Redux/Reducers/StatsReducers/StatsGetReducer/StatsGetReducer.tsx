//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import axios from "axios"

import { AppStateType, InferActionsTypes } from "~/Redux/ReduxStore"

////////////////////////////////////////////////////////////////////////

const initialState = {
  MonthlyIncome: null as string | null,
  OverallIncome: null as string | null,
  ConnectionsAmount: null as string | null,
}

type initialStateType = typeof initialState

// *REDUCER* //
const StatsGetReducer = (
  state = initialState,
  action: ActionTypes
): initialStateType => {
  if (action.type === "SET_STATS_INFO") {
    return {
      ...state,
      MonthlyIncome: action.MonthlyIncome,
      OverallIncome: action.OverallIncome,
      ConnectionsAmount: action.ConnectionsAmount,
    }
  }

  return state
}

export default StatsGetReducer

///////////////////////////////////////////////////////////////////////

type ActionTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  setStatsInfoActionCreator: (
    MonthlyIncome: string | null,
    OverallIncome: string | null,
    ConnectionsAmount: string | null
  ) =>
    ({
      type: "SET_STATS_INFO",
      MonthlyIncome,
      OverallIncome,
      ConnectionsAmount,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

// Get stats info
export const getStatsInfoThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios.get("").then((res: any) => {
      dispatch(
        ActionCreatorsList.setStatsInfoActionCreator(
          res.data.MonthlyIncome,
          res.data.OverallIncome,
          res.data.ConnectionsAmount
        )
      )
    })
  }
}
