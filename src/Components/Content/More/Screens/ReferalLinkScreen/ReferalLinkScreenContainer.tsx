// PLUGINS IMPORTS //
import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

// COMPONENTS IMPORTS //
import ReferalLinkScreen from "./ReferalLinkScreen";

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore";
import { getReferalLinkThunkCreator } from "~/Redux/Reducers/ExtraReducers/ExtraGetReducer";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any;

  ReferalLink: string;
};

type MapDispatchToPropsType = {
  getReferalLinkThunkCreator: () => void;
};

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    ReferalLink: state.ExtraGetState.ReferalLink,
  };
};

const ReferalLinkScreenContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      getReferalLinkThunkCreator: getReferalLinkThunkCreator,
    },
  ),
)(ReferalLinkScreen);

export default ReferalLinkScreenContainer;
