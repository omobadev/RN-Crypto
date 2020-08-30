//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import axios from "axios"
// @ts-ignore
import JWT from "expo-jwt"

import { AppStateType, InferActionsTypes } from "~/Redux/ReduxStore"
const key = "shh"

import { getTechSupportChatThunkCreator } from "~/Redux/Reducers/ExtraReducers/ExtraGetReducer"

////////////////////////////////////////////////////////////////////////

const initialState = {
  responseStatus: { show: false, positive: false },
}

type initialStateType = typeof initialState

// *REDUCER* //
const ExtraSetReducer = (
  state = initialState,
  action: ActionTypes
): initialStateType => {
  if (action.type === "SET_RESPONSE_STATUS") {
    return {
      ...state,
      responseStatus: action.responseStatus,
    }
  }

  return state
}

export default ExtraSetReducer

///////////////////////////////////////////////////////////////////////

type ActionTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  setResponseStatusActionCreator: (responseStatus: {
    positive: boolean
    show: boolean
  }) =>
    ({
      type: "SET_RESPONSE_STATUS",
      responseStatus,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

// Buy tarif
export const buyTarifThunkCreator = (tarifID: string): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState()

    await axios
      .post(
        "http://cgc.cgc.capital/api_interface",
        JSON.stringify(
          JWT.encode(
            {
              action: "new_abon",
              uid: state.AuthSetState.userID,
              pid: tarifID,
            },
            key
          )
        )
      )
      .then(async (res: any) => {
        dispatch(
          ActionCreatorsList.setResponseStatusActionCreator({
            positive: true,
            show: true,
          })
        )
      })
      .catch((err) => {
        dispatch(
          ActionCreatorsList.setResponseStatusActionCreator({
            positive: false,
            show: true,
          })
        )
      })
  }
}

// Send tech help message
export const sendTechChatMessageThunkCreator = (message: string): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState()

    await axios
      .post(
        "http://cgc.cgc.capital/api_interface",
        JSON.stringify(
          JWT.encode(
            {
              action: "write_admin_chat",
              uid: state.AuthSetState.userID,
              message: message,
            },
            key
          )
        )
      )
      .then(async (res: any) => {
        dispatch(getTechSupportChatThunkCreator())
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response)
        }
      })
  }
}
