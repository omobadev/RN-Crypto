//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import axios from "axios"
// @ts-ignore
import JWT from "expo-jwt"

import { AppStateType, InferActionsTypes } from "../../ReduxStore"
const key = "shh"

////////////////////////////////////////////////////////////////////////

const initialState = {
  usersIDsList: [] as Array<any>,
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
      usersIDsList: action.usersIDsList,
    }
  }

  return state
}

export default AuthGetReducer

///////////////////////////////////////////////////////////////////////

type ActionTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  setUsersIDsListActionCreator: (usersIDsList: Array<any>) =>
    ({
      type: "SET_USERS_IDS_LIST",
      usersIDsList,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

// Login user
export const getUsersIDsListThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    const data = JWT.encode(
      {
        action: "selectid",
      },
      key
    )

    await axios
      .post("http://cgc.cgc.capital/api_interface", JSON.stringify(data))
      .then(async (res) => {
        const usersList = JWT.decode(res.data.data, key)
        dispatch(ActionCreatorsList.setUsersIDsListActionCreator(usersList))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
