//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import axios from "axios"
// @ts-ignore
import JWT from "expo-jwt"

import { AppStateType, InferActionsTypes } from "~/Redux/ReduxStore"
const key = "shh"

////////////////////////////////////////////////////////////////////////

const initialState = {
  MonthlyIncome: null as string | null,
  OverallIncome: null as string | null,
  ConnectionsAmount: null as string | null,

  GraphData: [] as Array<any>,
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

  if (action.type === "SET_GRAPH_DATA") {
    return {
      ...state,
      GraphData: action.graphData,
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

  setGraphDataActionCreator: (graphData: Array<any>) =>
    ({
      type: "SET_GRAPH_DATA",
      graphData,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

// Get stats info
export const getStatsInfoThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState()

    await axios
      .post(
        "https://cgc.capital/api_interface",
        JSON.stringify(
          JWT.encode(
            {
              action: "statistics",
              uid: state.AuthSetState.userID,
            },
            key
          )
        )
      )
      .then(async (res: any) => {
        const data = JWT.decode(res.data.data, key)

        dispatch(ActionCreatorsList.setGraphDataActionCreator(data.graf))
        dispatch(
          ActionCreatorsList.setStatsInfoActionCreator(
            data.month,
            data.all_time,
            data.ref
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
