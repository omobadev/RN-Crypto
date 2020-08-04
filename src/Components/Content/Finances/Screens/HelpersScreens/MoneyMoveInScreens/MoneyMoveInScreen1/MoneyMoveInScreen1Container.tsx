// PLUGINS IMPORTS //
import { compose } from "redux";
import { connect } from "react-redux";

// COMPONENTS IMPORTS //
import MoneyMoveInScreen1 from "./MoneyMoveInScreen1";

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore";
import { getUsersListThunkCreator } from "~/Redux/Reducers/AuthReducers/AuthGetReducer";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any;
  route: any;

  usersList: Array<any>;
  CGCInfo: {
    price: string;
    value2: string;
  };
};

type MapDispatchToPropsType = {
  getUsersListThunkCreator: () => void;
};

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    route: props.route,

    CGCInfo: state.FinancesGetState.BudgetInfo.CGC,
    usersList: state.AuthGetState.usersList,
  };
};

const MoneyMoveInScreen1Container = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getUsersListThunkCreator: getUsersListThunkCreator,
    },
  ),
)(MoneyMoveInScreen1);

export default MoneyMoveInScreen1Container;
