//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import axios from "axios"
const { JSEncrypt } = require("jsencrypt")
import Base64 from "~/Redux/Code/Base64"

import { AppStateType, InferActionsTypes } from "../../ReduxStore"

////////////////////////////////////////////////////////////////////////

const initialState = {
  UserLogin: null as string | null,
  UserPassword: null as string | null,
  UserInvitedID: null as string | null,
  //
  UserName: null as string | null,
  Email: null as string | null,
  Country: null as string | null,
  City: null as string | null,
}

type initialStateType = typeof initialState

// *REDUCER* //
const AuthGetReducer = (
  state = initialState,
  action: ActionTypes
): initialStateType => {
  if (action.type === "SET_FIRST_SCREEN_VALUES") {
    return {
      ...state,
      UserLogin: action.UserLogin,
      UserPassword: action.UserPassword,
      UserInvitedID: action.UserInvitedID,
    }
  }

  if (action.type === "SET_SECOND_SCREEN_VALUES") {
    return {
      ...state,
      UserName: action.UserName,
      Email: action.Email,
      Country: action.Country,
      City: action.City,
    }
  }

  return state
}

export default AuthGetReducer

///////////////////////////////////////////////////////////////////////

type ActionTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  setFirstScreenValuesActionCreator: (
    UserLogin: string,
    UserPassword: string,
    UserInvitedID: string | null
  ) =>
    ({
      type: "SET_FIRST_SCREEN_VALUES",
      UserLogin,
      UserPassword,
      UserInvitedID,
    } as const),

  setSecondScreenValuesActionCreator: (
    UserName: string,
    Email: string,
    Country: string,
    City: string
  ) =>
    ({
      type: "SET_SECOND_SCREEN_VALUES",
      UserName,
      Email,
      Country,
      City,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

// Register user
export const RegisterUserThunkCreator = (secretCode: string): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState()

    const data = {
      login: Base64(String(state.AuthState.UserLogin)),
      password: Base64(String(state.AuthState.UserPassword)),
      invitedID: Base64(String(state.AuthState.UserInvitedID)),
      name: Base64(String(state.AuthState.UserName)),
      email: Base64(String(state.AuthState.Email)),
      country: Base64(String(state.AuthState.Country)),
      city: Base64(String(state.AuthState.City)),
      secretCode: Base64(String(secretCode)),
    }

    await axios
      .post("http://cgc.cgc.capital/api_interface", JSON.stringify(data))
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

// Login user
export const LoginUserThunkCreator = (
  email: string,
  password: string
): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState()

    const data = {
      email: Base64(String(email)),
      password: Base64(String(password)),
    }

    await axios
      .post("", JSON.stringify(data))
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
