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
const ChatsGetReducer = (
  state = initialState,
  action: ActionTypes
): initialStateType => {
  if (action.type === "SET_DIALOGS_CHATS_LIST") {
    return {
      ...state,
      DialogsChatsList: action.dialogsChatsList,
    }
  }

  if (action.type === "SET_GROUPS_CHATS_LIST") {
    return {
      ...state,
      GroupsChatsList: action.groupsChatsList,
    }
  }

  return state
}

export default ChatsGetReducer

///////////////////////////////////////////////////////////////////////

type ActionTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  setDialogsChatsListActionCreator: (dialogsChatsList: Array<any>) =>
    ({
      type: "SET_DIALOGS_CHATS_LIST",
      dialogsChatsList,
    } as const),

  setGroupsChatsListActionCreator: (groupsChatsList: Array<any>) =>
    ({
      type: "SET_GROUPS_CHATS_LIST",
      groupsChatsList,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

// Get dialogs chats list
export const getDialogsChatsListThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios.get("").then((res: any) => {
      dispatch(ActionCreatorsList.setDialogsChatsListActionCreator(res.data))
    })
  }
}

// Get groups chats list
export const getGroupsChatsListThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    await axios.get("").then((res: any) => {
      dispatch(ActionCreatorsList.setGroupsChatsListActionCreator(res.data))
    })
  }
}
