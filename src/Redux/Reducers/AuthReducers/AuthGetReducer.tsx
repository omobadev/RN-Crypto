//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import axios from "axios"
// @ts-ignore
import JWT from "expo-jwt"

import { AppStateType, InferActionsTypes } from "../../ReduxStore"
const key = "shh"

////////////////////////////////////////////////////////////////////////

const initialState = {
  regUsersList: [] as Array<any>,
  usersList: [] as Array<any>,
}

type initialStateType = typeof initialState

// *REDUCER* //
const AuthGetReducer = (
  state = initialState,
  action: ActionTypes
): initialStateType => {
  if (action.type === "SET_USERS_IDS_LIST") {
    return {
      ...state,
      usersList: action.usersList,
    }
  }

  if (action.type === "SET_REG_USERS_LIST") {
    return {
      ...state,
      regUsersList: action.regUsersList,
    }
  }

  return state
}

export default AuthGetReducer

///////////////////////////////////////////////////////////////////////

type ActionTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  setUsersIDsListActionCreator: (usersList: Array<any>) =>
    ({
      type: "SET_USERS_IDS_LIST",
      usersList,
    } as const),

  setRegUsersListActionCreator: (regUsersList: Array<any>) =>
    ({
      type: "SET_REG_USERS_LIST",
      regUsersList,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

// Get users list
export const getUsersListThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    const data = JWT.encode(
      {
        action: "selectid",
      },
      key
    )

    await axios
      .post("https://cgc.capital/api_interface", JSON.stringify(data))
      .then(async (res) => {
        const usersList = JWT.decode(res.data.data, key)
        dispatch(ActionCreatorsList.setUsersIDsListActionCreator(usersList))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

// Get reg users list
export const getRegUsersListThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios
      .post(
        "https://cgc.capital/api_interface",
        JSON.stringify(
          JWT.encode(
            {
              action: "select_reg_id",
            },
            key
          )
        )
      )
      .then(async (res: any) => {
        const data = JWT.decode(res.data.data, key)

        console.log(data)
        dispatch(ActionCreatorsList.setRegUsersListActionCreator(data))
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response)
        }
      })
  }
}
