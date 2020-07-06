//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import axios from "axios"

import { AppStateType, InferActionsTypes } from "../../ReduxStore"

////////////////////////////////////////////////////////////////////////

const initialState = {
  UserCredentials: {
    ID: null as string | null,
    name: null as string | null,
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
    login: string,
    email: string,
    location: string,
    invitedID: string
  ) =>
    ({
      type: "SET_USER_DATA",
      ID,
      name,
      login,
      email,
      location,
      invitedID,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

// Get user credentials
export const getUserCredentialsThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios.get("").then((res: any) => {
      dispatch(
        ActionCreatorsList.setUserDataActionCreator(
          res.data.ID,
          res.data.name,
          res.data.login,
          res.data.email,
          res.data.location,
          res.data.invitedID
        )
      )
    })
  }
}
