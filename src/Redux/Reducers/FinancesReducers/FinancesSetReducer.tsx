//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk";
import axios from "axios";
// @ts-ignore
import JWT from "expo-jwt";

import { AppStateType, InferActionsTypes } from "../../ReduxStore";
const key = "shh";

////////////////////////////////////////////////////////////////////////

const initialState = {
  transferStatusRes: {} as {
    title: string;
    text: string;
    visible: boolean;
    positive: boolean;
    link?: string;
  },
};

type initialStateType = typeof initialState;

// *REDUCER* //
const FinancesSetReducer = (
  state = initialState,
  action: ActionTypes,
): initialStateType => {
  if (action.type === "SET_TRANSFER_STATUS") {
    return {
      ...state,
      transferStatusRes: action.config,
    };
  }

  return state;
};

export default FinancesSetReducer;

///////////////////////////////////////////////////////////////////////

type ActionTypes = InferActionsTypes<typeof ActionCreatorsList>;

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  setTransferStatusResActionCreator: (
    config: {
      title: string;
      text: string;
      visible: boolean;
      positive: boolean;
      link?: string;
    },
  ) => ({
    type: "SET_TRANSFER_STATUS",
    config,
  } as const),
};

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export const sendCGCMoneyThunkCreator = (
  selectedUserID: string,
  password: string,
  moneyAmount: number,
): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState();

    await axios
      .post(
        "http://cgc.cgc.capital/api_interface",
        JSON.stringify(JWT.encode(
          {
            action: "send_cgc_to_user",
            uid: state.AuthSetState.userID,
            touid: selectedUserID,
            password: password,
            sum: moneyAmount,
          },
          key,
        )),
      )
      .then(async (res: any) => {
        const status = JWT.decode(res.status, key);
        if (Number(status) === 200) {
          dispatch(ActionCreatorsList.setTransferStatusResActionCreator({
            title: "Спасибо!",
            text: "Ваш перевод прошёл успешно!",
            positive: true,
            visible: true,
          }));
        }
      })
      .catch((err) => {
        if (err.response) {
          dispatch(ActionCreatorsList.setTransferStatusResActionCreator({
            title: "Ошибка...",
            text: "Что то пошло не так, попробуйте снова.",
            positive: false,
            visible: true,
          }));
        }
      });
  };
};

export const buyMoneyThunkCreator = (
  moneyAmount: number,
  currency: string,
): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState();

    const renderCID = () => {
      if (currency === "BTC") {
        return 5;
      } else if (currency === "ETH") {
        return 6;
      } else if (currency === "Payeer") {
        return 8;
      }
    };

    await axios
      .post(
        "http://cgc.cgc.capital/api_interface",
        JSON.stringify(JWT.encode(
          {
            action: "cashin",
            uid: state.AuthSetState.userID,
            cid: renderCID(),
            sum: moneyAmount,
          },
          key,
        )),
      )
      .then(async (res: any) => {
        const data = JWT.decode(res.data.data, key);

        dispatch(ActionCreatorsList.setTransferStatusResActionCreator({
          title: "Спасибо!",
          text: `Перейдите по этому адресу для оплаты`,
          positive: true,
          visible: true,
          link: data.url,
        }));
      })
      .catch((err) => {
        if (err.response) {
          dispatch(ActionCreatorsList.setTransferStatusResActionCreator({
            title: "Ошибка...",
            text: "Что то пошло не так, попробуйте снова.",
            positive: false,
            visible: true,
          }));
        }
      });
  };
};
