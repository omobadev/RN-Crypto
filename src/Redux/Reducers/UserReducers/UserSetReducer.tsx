//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
// @ts-ignore
import JWT from "expo-jwt"
import uploadImageAsync from "~/Redux/Reducers/Helpers/UploadImageFn"

import { AppStateType, InferActionsTypes } from "../../ReduxStore"
const key = "shh"

////////////////////////////////////////////////////////////////////////

const initialState = {}

type initialStateType = typeof initialState

// *REDUCER* //
const UsersSetReducer = (
  state = initialState,
  action: ActionTypes
): initialStateType => {
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
export const uploadAvatarThunkCreator = (avatar: string): ThunkType => {
  return async (dispatch, getState: any) => {
    const jsonVal = JSON.stringify(
      JWT.encode(
        {
          action: "send_avatar",
          uid: 2,
        },
        key
      )
    )

    uploadImageAsync(avatar, jsonVal)
  }
}
