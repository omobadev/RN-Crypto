//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import AsyncStorage from "@react-native-community/async-storage"
import axios from "axios"
// @ts-ignore
import JWT from "expo-jwt"

import { AppStateType, InferActionsTypes } from "../../ReduxStore"
const key = "shh"

////////////////////////////////////////////////////////////////////////

const initialState = {
  isAuthentificated: false as boolean,
  userID: null as string | null,

  UserLogin: null as string | null,
  UserPassword: null as string | null,
  UserInvitedID: null as string | null,
  //
  UserName: null as string | null,
  Email: null as string | null,
  Country: null as string | null,
  City: null as string | null,
  //
  LoginError: false as boolean,
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
      UserInvitedID: action.inviteID,
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

  if (action.type === "SET_USER_INVITED_ID") {
    return {
      ...state,
      UserInvitedID: action.userInvitedID,
    }
  }

  if (action.type === "SET_AUTHENTIFICATED_INFO") {
    return {
      ...state,
      isAuthentificated: action.isAuthentificatedStatus,
      userID: action.uid,
    }
  }

  if (action.type === "SET_LOGIN_ERROR_STATUS") {
    return {
      ...state,
      LoginError: action.loginErrorStatus,
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
    inviteID: string
  ) =>
    ({
      type: "SET_FIRST_SCREEN_VALUES",
      UserLogin,
      UserPassword,
      inviteID,
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

  setUserInvitedIDActionCreator: (userInvitedID: string) =>
    ({
      type: "SET_USER_INVITED_ID",
      userInvitedID,
    } as const),

  setAuthentificatedInfoActionCreator: (
    isAuthentificatedStatus: boolean,
    uid: string | null
  ) =>
    ({
      type: "SET_AUTHENTIFICATED_INFO",
      isAuthentificatedStatus,
      uid,
    } as const),

  setLoginErrorStatusActionCreator: (loginErrorStatus: boolean) =>
    ({
      type: "SET_LOGIN_ERROR_STATUS",
      loginErrorStatus,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

// Register user
export const RegisterUserThunkCreator = (secretCode: string): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState()

    const data = JWT.encode(
      {
        action: "register",
        login: state.AuthSetState.UserLogin,
        password: state.AuthSetState.UserPassword,
        inviteID: state.AuthSetState.UserInvitedID,
        name: state.AuthSetState.UserName,
        email: state.AuthSetState.Email,
        country: state.AuthSetState.Country,
        city: state.AuthSetState.City,
        secretCode: secretCode,
      },
      key
    )

    await axios
      .post("https://cgc.capital/api_interface", JSON.stringify(data))
      .then(async (res) => {
        const uid = JSON.stringify(JWT.decode(res.data.data, key).uid)
        await AsyncStorage.setItem("uid", uid)

        dispatch(
          ActionCreatorsList.setAuthentificatedInfoActionCreator(true, uid)
        )
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response)
        }
      })
  }
}

// Login user
export const LoginUserThunkCreator = (
  email: string,
  password: string
): ThunkType => {
  return async (dispatch, getState: any) => {
    const data = JWT.encode(
      {
        action: "login",
        email: email,
        password: password,
      },
      key
    )

    await axios
      .post("https://cgc.capital/api_interface", JSON.stringify(data))
      .then(async (res) => {
        if (res) {
          dispatch(ActionCreatorsList.setLoginErrorStatusActionCreator(false))
          const uid = JWT.decode(res.data.data, key).uID
          await AsyncStorage.setItem("uid", uid)
          dispatch(
            ActionCreatorsList.setAuthentificatedInfoActionCreator(true, uid)
          )
        }
      })
      .catch((err) => {
        console.log("eeo")
        console.log(err)
        dispatch(ActionCreatorsList.setLoginErrorStatusActionCreator(true))
      })
  }
}

// Verify if authentificated
export const VerifyIfAuthentificatedThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    const uid = await AsyncStorage.getItem("uid")
    dispatch(
      ActionCreatorsList.setAuthentificatedInfoActionCreator(
        uid ? true : false,
        uid
      )
    )
  }
}
