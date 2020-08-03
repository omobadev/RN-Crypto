//    *GENERAL IMPORTS*   //
import { ThunkAction } from "redux-thunk";
import axios from "axios";
// @ts-ignore
import JWT from "expo-jwt";

import { AppStateType, InferActionsTypes } from "../../ReduxStore";
const key = "shh";

////////////////////////////////////////////////////////////////////////

const initialState = {};

type initialStateType = typeof initialState;

// *REDUCER* //
const FinancesSetReducer = (
  state = initialState,
  action: ActionTypes,
): initialStateType => {
  return state;
};

export default FinancesSetReducer;

///////////////////////////////////////////////////////////////////////

type ActionTypes = InferActionsTypes<typeof ActionCreatorsList>;

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {};

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export const sendCGCMoneyThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState();

    await axios
      .post(
        "http://cgc.cgc.capital/api_interface",
        JSON.stringify(JWT.encode(
          {
            action: "send_cgc_to_user",
            uid: state.AuthSetState.userID,
            touid: "test4",
            password: "password",
            sum: 10,
          },
          key,
        )),
      )
      .then(async (res: any) => {
        console.log(JWT.decode(res.data.data, key));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
        }
      });
  };
};

export const buyMoneyThunkCreator = (): ThunkType => {
  return async (dispatch, getState: any) => {
    const state = getState();

    // 5- Bitcoin
    // 6 - etherium
    // 8 - payeer

    await axios
      .post(
        "http://cgc.cgc.capital/api_interface",
        JSON.stringify(JWT.encode(
          {
            action: "cashin",
            uid: 2,
            cid: 8,
            sum: 10,
          },
          key,
        )),
      )
      .then(async (res: any) => {
        console.log(JWT.decode(res.data.data, key));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
        }
      });
  };
};
