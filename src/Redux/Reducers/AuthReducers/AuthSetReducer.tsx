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

  if (action.type === "SET_IS_AUTHENTIFICATED_STATUS") {
    return {
      ...state,
      isAuthentificated: action.isAuthentificatedStatus,
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

  setIsAuthentificatedStatusActionCreator: (isAuthentificatedStatus: boolean) =>
    ({
      type: "SET_IS_AUTHENTIFICATED_STATUS",
      isAuthentificatedStatus,
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
        login: state.AuthState.UserLogin,
        password: state.AuthState.UserPassword,
        inviteID: "AAA",
        name: state.AuthState.UserName,
        email: state.AuthState.Email,
        country: state.AuthState.Country,
        city: state.AuthState.City,
        secretCode: secretCode,
      },
      key
    )

    await axios
      .post("http://cgc.cgc.capital/api_interface", JSON.stringify(data))
      .then(async (res) => {
        await AsyncStorage.setItem(
          "uid",
          JSON.stringify(JWT.decode(res.data.data, key).uid)
        )
        dispatch(
          ActionCreatorsList.setIsAuthentificatedStatusActionCreator(true)
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
      .post("http://cgc.cgc.capital/api_interface", JSON.stringify(data))
      .then(async (res) => {
        await AsyncStorage.setItem(
          "uid",
          JSON.stringify(JWT.decode(res.data.data, key).uid)
        )
        dispatch(
          ActionCreatorsList.setIsAuthentificatedStatusActionCreator(true)
        )
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

// Verify if authentificated
export const VerifyIfAuthentificatedThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    const uid = await AsyncStorage.getItem("uid")
    dispatch(
      ActionCreatorsList.setIsAuthentificatedStatusActionCreator(
        uid ? true : false
      )
    )
  }
}
