//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import axios from "axios"
// @ts-ignore
import JWT from "expo-jwt"

import { AppStateType, InferActionsTypes } from "../../ReduxStore"
const key = "shh"

////////////////////////////////////////////////////////////////////////

const initialState = {
  UserCredentials: {
    ID: null as string | null,
    name: null as string | null,
    avatar: null as string | null,
    login: null as string | null,
    email: null as string | null,
    location: null as string | null,
    invitedID: null as string | null,
  },
}

type initialStateType = typeof initialState

// *REDUCER* //
const UserGetReducer = (
  state = initialState,
  action: ActionTypes
): initialStateType => {
  if (action.type === "SET_USER_DATA") {
    return {
      ...state,
      UserCredentials: {
        ID: action.ID,
        name: action.name,
        avatar: action.avatar,
        login: action.login,
        email: action.email,
        location: action.location,
        invitedID: action.invitedID,
      },
    }
  }

  return state
}

export default UserGetReducer

///////////////////////////////////////////////////////////////////////

type ActionTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  setUserDataActionCreator: (
    ID: string,
    name: string,
    avatar: string,
    login: string,
    email: string,
    location: string,
    invitedID: string
  ) =>
    ({
      type: "SET_USER_DATA",
      ID,
      name,
      avatar,
      login,
      email,
      location,
      invitedID,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

// Get user credentials
export const getUserCredentialsThunkCreator = (uid: string): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios
      .post(
        "https://cgc.capital/api_interface",
        JSON.stringify(
          JWT.encode(
            {
              action: "userinfo",
              uid: uid,
            },
            key
          )
        )
      )
      .then(async (res: any) => {
        const data = JWT.decode(res.data.data, key).userinfo
        dispatch(
          ActionCreatorsList.setUserDataActionCreator(
            data.uID,
            data.name,
            data.avatar,
            data.login,
            data.mail,
            `${data.city}, ${data.country}`,
            data.ref
          )
        )
      })
      .catch((err) => {
        if (err.response) {
        }
      })
  }
}
