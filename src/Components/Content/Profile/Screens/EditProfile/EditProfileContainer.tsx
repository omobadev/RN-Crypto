// PLUGINS IMPORTS //
import { compose } from "redux";
import { connect } from "react-redux";

// COMPONENTS IMPORTS //
import EditProfile from "./EditProfile";

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  UserCredentials: {
    ID: string;
    name: string;
    login: string;
    email: string;
    location: string;
    invitedID: string;
  };
};

type MapDispatchToPropsType = {};

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    UserCredentials: state.UserGetState.UserCredentials,
  };
};

const EditProfileContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {},
  ),
)(EditProfile);

export default EditProfileContainer;
