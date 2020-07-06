//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import axios from "axios"

import { AppStateType, InferActionsTypes } from "~/Redux/ReduxStore"

////////////////////////////////////////////////////////////////////////

const initialState = {
  PaymentAmount: null as string | null,
  endDate: null as string | null,

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
