//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import axios from "axios"
// @ts-ignore
import JWT from "expo-jwt"

import { AppStateType, InferActionsTypes } from "~/Redux/ReduxStore"
const key = "shh"

////////////////////////////////////////////////////////////////////////

const initialState = {
  PaymentAmount: null as string | null,
  endDate: null as string | null,

  ReferalLink: null as string | null,

  TarifsList: [] as Array<{
    color: string
    sale: string
    price: string
    duration: string
  }>,
}

type initialStateType = typeof initialState

// *REDUCER* //
const ExtraGetReducer = (
  state = initialState,
  action: ActionTypes
): initialStateType => {
  if (action.type === "SET_TARIFS_INFO") {
    return {
      ...state,
      PaymentAmount: action.PaymentAmount,
      endDate: action.endDate,
    }
  }

  if (action.type === "SET_TARIFS_LIST") {
    return {
      ...state,
      TarifsList: action.tarifsList,
    }
  }

  if (action.type === "SET_REFERAL_LINK") {
    return {
      ...state,
      ReferalLink: action.referalLink,
    }
  }

  return state
}

export default ExtraGetReducer

///////////////////////////////////////////////////////////////////////

type ActionTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  setTarifsInfoActionCreator: (PaymentAmount: string, endDate: string) =>
    ({
      type: "SET_TARIFS_INFO",
      PaymentAmount,
      endDate,
    } as const),

  setTarifsListActionCreator: (
    tarifsList: Array<{
      color: string
      sale: string
      price: string
      duration: string
    }>
  ) =>
    ({
      type: "SET_TARIFS_LIST",
      tarifsList,
    } as const),

  setReferaLinkActionCreator: (referalLink: string) =>
    ({
      type: "SET_REFERAL_LINK",
      referalLink,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

// Get tarifs info
export const getTarifsInfoThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios.get("").then((res: any) => {
      dispatch(ActionCreatorsList.setTarifsListActionCreator(res.data))
    })
  }
}

// Get tarifs list
export const getTarifsListThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios.get("").then((res: any) => {
      dispatch(
        ActionCreatorsList.setTarifsInfoActionCreator(
          res.data.PaymentAmount,
          res.data.endDate
        )
      )
    })
  }
}

// Get referal link
export const getReferalLinkThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState()

    await axios
      .post(
        "http://cgc.cgc.capital/api_interface",
        JWT.encode(
          {
            action: "reflink",
            uid: state.AuthState.userID,
          },
          key
        )
      )
      .then((res: any) => {
        dispatch(ActionCreatorsList.setReferaLinkActionCreator(res.data))
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response)
        }
      })
  }
}
