//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import axios from "axios"
// @ts-ignore
import JWT from "expo-jwt"

import { AppStateType, InferActionsTypes } from "~/Redux/ReduxStore"
const key = "shh"

////////////////////////////////////////////////////////////////////////

const initialState = {}

type initialStateType = typeof initialState

// *REDUCER* //
const ExtraSetReducer = (state = initialState, action: ActionTypes): initialStateType => {
  return state
}

export default ExtraSetReducer

///////////////////////////////////////////////////////////////////////

type ActionTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

// Buy tarif
export const buyTarifThunkCreator = (tarifID: string, currency: string): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState()

    const renderCurrency = () => {
      if (currency === "CGC") {
        return 4
      } else if (currency === "INPH") {
        return 14
      }
    }

    await axios
      .post(
        "http://cgc.cgc.capital/api_interface",
        JSON.stringify(
          JWT.encode(
            {
              action: "new_abon",
              uid: state.AuthSetState.userID,
              pid: tarifID,
              cid: renderCurrency(),
            },
            key
          )
        )
      )
      .then(async (res: any) => {
        console.log(JWT.decode(res.data.data, key))
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response)
        }
      })
  }
}
