// PLUGINS IMPORTS //
import { compose } from "redux";
import { connect } from "react-redux";

// COMPONENTS IMPORTS //
import MoneyMoveInScreen2 from "./MoneyMoveInScreen2";

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore";
import {
  sendCGCMoneyThunkCreator,
  ActionCreatorsList,
} from "~/Redux/Reducers/FinancesReducers/FinancesSetReducer";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any;
  route: any;

  transferStatus: boolean;
};

type MapDispatchToPropsType = {
  setTransferStatusActionCreator: (transferStatus: boolean) => void;
  sendCGCMoneyThunkCreator: (
    selectedUserID: string,
    password: string,
    moneyAmount: number,
  ) => void;
};

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    route: props.route,

    transferStatus: state.FinancesSetState.transferStatus,
  };
};

const MoneyMoveInScreen2Container = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      setTransferStatusActionCreator:
        ActionCreatorsList.setTransferStatusActionCreator,
      sendCGCMoneyThunkCreator,
    },
  ),
)(MoneyMoveInScreen2);

export default MoneyMoveInScreen2Container;
