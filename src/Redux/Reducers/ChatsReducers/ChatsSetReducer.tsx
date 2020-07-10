//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import axios from "axios"

import { AppStateType, InferActionsTypes } from "../../ReduxStore"

////////////////////////////////////////////////////////////////////////

const initialState = {
  DialogsChatsList: [] as Array<any>,
  GroupsChatsList: [] as Array<any>,
}

type initialStateType = typeof initialState

// *REDUCER* //
const ChatsSetReducer = (
  state = initialState,
  action: ActionTypes
): initialStateType => {
  return state
}

export default ChatsSetReducer

///////////////////////////////////////////////////////////////////////

type ActionTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

// Create new dialog
export const createNewDialogThunkCreator = (
  selectedUsersIDs: Array<any>
): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios.get("").then((res: any) => {})
  }
}
