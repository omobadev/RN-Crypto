//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import axios from "axios"

import { AppStateType, InferActionsTypes } from "../../ReduxStore"

////////////////////////////////////////////////////////////////////////

const initialState = {
  UserCredentials: {} as {
    ID: string
    name: string
    login: string
    email: string
    location: string
    invitedID: string
  },

  BudgetInfo: {} as {
    CGC: {
      price: string
      value2: string
    }

    MiningCGC: {
      price: string
      value2: string
    }
    DailyIncome: {
      price: string
      value2: string
    }
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

      BudgetInfo: action.BudgetInfo,
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
    invitedID: string,
    BudgetInfo: {
      CGC: {
        price: string
        value2: string
      }
      MiningCGC: {
        price: string
        value2: string
      }
      DailyIncome: {
        price: string
        value2: string
      }
    }
  ) =>
    ({
      type: "SET_USER_DATA",
      ID,
      name,
      login,
      email,
      location,
      invitedID,
      BudgetInfo,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

// Get dialogs chats list
export const getUserDataThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios.get("").then((res: any) => {
      dispatch(
        ActionCreatorsList.setUserDataActionCreator(
          res.data.ID,
          res.data.name,
          res.data.login,
          res.data.email,
          res.data.location,
          res.data.invitedID,
          res.data.BudgetInfo
        )
      )
    })
  }
}
