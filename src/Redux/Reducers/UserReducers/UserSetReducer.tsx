//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import axios from "axios"
// @ts-ignore
import JWT from "expo-jwt"

import { AppStateType, InferActionsTypes } from "../../ReduxStore"
const key = "shh"

////////////////////////////////////////////////////////////////////////

const initialState = {}

type initialStateType = typeof initialState

// *REDUCER* //
const UsersSetReducer = (state = initialState, action: ActionTypes): initialStateType => {
  return state
}

export default UsersSetReducer

///////////////////////////////////////////////////////////////////////

type ActionTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

// Upload avatar
export const uploadAvatarThunkCreator = (avatar: Blob): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState()

    await axios
      .post(
        "http://cgc.cgc.capital/api_interface",
        JSON.stringify(
          JWT.encode(
            {
              action: "send_avatar",
              uid: state.AuthSetState.userID,
              image: avatar,
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
