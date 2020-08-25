// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import Profile from "./Profile"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
  navigation: any
  route: any

  userID: string
  UserCredentials: {
    ID: string
    name: string
    avatar: string
    login: string
    email: string
    location: string
    invitedID: string
  }
}

type MapDispatchToPropsType = {}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    navigation: props.navigation,
    route: props.route,

    userID: state.AuthSetState.userID,
    UserCredentials: state.UserGetState.UserCredentials,
  }
}

const ProfileContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {}
  )
)(Profile)

export default ProfileContainer
