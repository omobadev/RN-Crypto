//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import axios from "axios"
// @ts-ignore
import JWT from "expo-jwt"
import AsyncStorage from "@react-native-community/async-storage"

import { AppStateType, InferActionsTypes } from "../../ReduxStore"
import {
  getDialogsChatsListThunkCreator,
  getCurrentChatMessagesThunkCreator,
} from "~/Redux/Reducers/ChatsReducers/ChatsGetReducer"
const key = "shh"

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
  selectedUsersIDs: Array<any>,
  chatTitle: string,
  message: string
): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState()

    await axios
      .post(
        "https://cgc.capital/api_interface",
        JSON.stringify(
          JWT.encode(
            {
              action: "new_user_chat_message",
              uid: state.AuthSetState.userID,
              topic: chatTitle,
              users: selectedUsersIDs,
              message: message,
            },
            key
          )
        )
      )
      .then(async (res: any) => {
        dispatch(getDialogsChatsListThunkCreator())
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response)
        }
      })
  }
}

// Add users to chat
export const addUsersToChatThunkCreator = (
  newUsers: Array<any>,
  chatID: string
): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState()

    await axios
      .post(
        "https://cgc.capital/api_interface",
        JSON.stringify(
          JWT.encode(
            {
              action: "add_users_to_chat",
              uid: state.AuthSetState.userID,
              chatid: chatID,
              users: newUsers,
            },
            key
          )
        )
      )
      .then(async (res: any) => {
        dispatch(getCurrentChatMessagesThunkCreator(chatID))
        dispatch(getDialogsChatsListThunkCreator())
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response)
        }
      })
  }
}

// Leave chat
export const leaveChatThunkCreator = (chatID: string): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState()

    await axios
      .post(
        "https://cgc.capital/api_interface",
        JSON.stringify(
          JWT.encode(
            {
              action: "exit_chat",
              uid: state.AuthSetState.userID,
              chatid: chatID,
            },
            key
          )
        )
      )
      .then(async (res: any) => {
        dispatch(getDialogsChatsListThunkCreator())
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response)
        }
      })
  }
}

// Send message
export const sendMessageThunkCreator = (
  message: string,
  images: Array<string>,
  chatID: string
): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState()

    await axios
      .post(
        "https://cgc.capital/api_interface",

        JSON.stringify(
          JWT.encode(
            {
              action: "write_message_to_chat",
              uid: state.AuthSetState.userID,
              chatid: chatID,
              message: message,
              images: images,
            },
            key
          )
        )
      )
      .then(async (res: any) => {
        dispatch(getCurrentChatMessagesThunkCreator(chatID))
        dispatch(getDialogsChatsListThunkCreator())
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response)
        }
      })
  }
}
