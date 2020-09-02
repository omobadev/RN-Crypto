//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk"
import axios from "axios"
// @ts-ignore
import JWT from "expo-jwt"

import { AppStateType, InferActionsTypes } from "../../ReduxStore"
const key = "shh"
import {
  getUserGeneralFinancesInfoThunkCreator,
  getTransactionsHistoryThunkCreator,
} from "~/Redux/Reducers/FinancesReducers/FinancesGetReducer"

////////////////////////////////////////////////////////////////////////

const initialState = {
  transferStatusRes: {} as {
    title: string
    text: string
    visible: boolean
    positive: boolean
    link?: string
  },
}

type initialStateType = typeof initialState

// *REDUCER* //
const FinancesSetReducer = (
  state = initialState,
  action: ActionTypes
): initialStateType => {
  if (action.type === "SET_TRANSFER_STATUS") {
    return {
      ...state,
      transferStatusRes: action.config,
    }
  }

  return state
}

export default FinancesSetReducer

///////////////////////////////////////////////////////////////////////

type ActionTypes = InferActionsTypes<typeof ActionCreatorsList>

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  setTransferStatusResActionCreator: (config: {
    title: string
    text: string
    visible: boolean
    positive: boolean
    link?: string
  }) =>
    ({
      type: "SET_TRANSFER_STATUS",
      config,
    } as const),
}

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>

export const sendCGCMoneyThunkCreator = (
  selectedUserID: string,
  password: string,
  moneyAmount: number
): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState()

    await axios
      .post(
        "http://cgc.cgc.capital/api_interface",
        JSON.stringify(
          JWT.encode(
            {
              action: "send_cgc_to_user",
              uid: state.AuthSetState.userID,
              touid: selectedUserID,
              password: password,
              sum: moneyAmount,
            },
            key
          )
        )
      )
      .then(async (res: any) => {
        const status = JWT.decode(res.status, key)
        if (Number(status) === 200) {
          dispatch(
            ActionCreatorsList.setTransferStatusResActionCreator({
              title: "Спасибо!",
              text: "Ваш перевод прошёл успешно!",
              positive: true,
              visible: true,
            })
          )

          dispatch(getUserGeneralFinancesInfoThunkCreator())
          dispatch(getTransactionsHistoryThunkCreator())
        }
      })
      .catch((err) => {
        const errorMessage = err.response.data.message

        console.log(err.response)

        if (errorMessage === "pass fail") {
          dispatch(
            ActionCreatorsList.setTransferStatusResActionCreator({
              title: "Ошибка...",
              text: "Пожалуйста введите корректный секретный код.",
              positive: false,
              visible: true,
            })
          )
        } else {
          dispatch(
            ActionCreatorsList.setTransferStatusResActionCreator({
              title: "Ошибка...",
              text: "Что то пошло не так, попробуйте снова.",
              positive: false,
              visible: true,
            })
          )
        }
      })
  }
}

export const buyMoneyThunkCreator = (
  moneyAmount: number,
  sendingAdress: string
): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState()

    await axios
      .post(
        "http://cgc.cgc.capital/api_interface",
        JSON.stringify(
          JWT.encode(
            {
              action: "cashin",
              uid: state.AuthSetState.userID,
              adress: sendingAdress,
              sum: moneyAmount,
            },
            key
          )
        )
      )
      .then(async (res: any) => {
        const data = JWT.decode(res.data.data, key)
        console.log(data)

        dispatch(
          ActionCreatorsList.setTransferStatusResActionCreator({
            title: "Спасибо!",
            text: `Операция выполнена успешно`,
            positive: true,
            visible: true,
            link: data.url,
          })
        )

        dispatch(getUserGeneralFinancesInfoThunkCreator())
        dispatch(getTransactionsHistoryThunkCreator())
      })
      .catch((err) => {
        if (err.response) {
          dispatch(
            ActionCreatorsList.setTransferStatusResActionCreator({
              title: "Ошибка...",
              text: "Что то пошло не так, попробуйте снова.",
              positive: false,
              visible: true,
            })
          )
        }
      })
  }
}

export const deriveMoneyThunkCreator = (
  moneyAmount: number,
  wallet: string,
  password: string
): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState()

    await axios
      .post(
        "http://cgc.cgc.capital/api_interface",
        JSON.stringify(
          JWT.encode(
            {
              action: "cashout",
              uid: state.AuthSetState.userID,
              pass: password,
              cid: 6,
              wallet: wallet,
              sum: Number(moneyAmount),
            },
            key
          )
        )
      )
      .then(async (res: any) => {
        dispatch(
          ActionCreatorsList.setTransferStatusResActionCreator({
            title: "Спасибо!",
            text: "Ваш вывод прошёл успешно!",
            positive: true,
            visible: true,
          })
        )

        dispatch(getUserGeneralFinancesInfoThunkCreator())
        dispatch(getTransactionsHistoryThunkCreator())
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.data.message === "wrong pass") {
            dispatch(
              ActionCreatorsList.setTransferStatusResActionCreator({
                title: "Ошибка...",
                text: "Неверный пароль",
                positive: false,
                visible: true,
              })
            )
          } else {
            dispatch(
              ActionCreatorsList.setTransferStatusResActionCreator({
                title: "Ошибка...",
                text: "Что то пошло не так, попробуйте снова.",
                positive: false,
                visible: true,
              })
            )
          }
        }
      })
  }
}

// MINING
export const addMiningThunkCreator = (moneyAmount: string): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState()

    await axios
      .post(
        "http://cgc.cgc.capital/api_interface",
        JSON.stringify(
          JWT.encode(
            {
              action: "add_depo",
              uid: state.AuthSetState.userID,
              sum: Number(moneyAmount),
            },
            key
          )
        )
      )
      .then(async (res: any) => {
        console.log(JWT.decode(res.data.data, key))
        dispatch(getUserGeneralFinancesInfoThunkCreator())
        dispatch(getTransactionsHistoryThunkCreator())
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response)
        }
      })
  }
}

export const deriveMiningThunkCreator = (moneyAmount: string): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState()

    await axios
      .post(
        "http://cgc.cgc.capital/api_interface",
        JSON.stringify(
          JWT.encode(
            {
              action: "sub_depo",
              uid: state.AuthSetState.userID,
              sum: Number(moneyAmount),
            },
            key
          )
        )
      )
      .then(async (res: any) => {
        console.log(JWT.decode(res.data.data, key))
        dispatch(getUserGeneralFinancesInfoThunkCreator())
        dispatch(getTransactionsHistoryThunkCreator())
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response)
        }
      })
  }
}
