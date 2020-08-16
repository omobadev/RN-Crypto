// PLUGINS IMPORTS //
import { compose } from "redux"
import { connect } from "react-redux"

// COMPONENTS IMPORTS //
import EditProfile from "./EditProfile"

// EXTRA IMPORTS //
import { AppStateType } from "~/Redux/ReduxStore"
import { uploadAvatarThunkCreator } from "~/Redux/Reducers/UserReducers/UserSetReducer"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// TYPES
type MapStateToPropsType = {
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

type MapDispatchToPropsType = {
  uploadAvatarThunkCreator: (avatar: string) => void
}

/////////////////////////////////////////////////////////////////

const mapStateToProps = (state: any, props: any): MapStateToPropsType => {
  return {
    UserCredentials: state.UserGetState.UserCredentials,
  }
}

const EditProfileContainer = compose(
  connect<MapStateToPropsType, MapDispatchToPropsType, AppStateType>(
    mapStateToProps,
    {
      uploadAvatarThunkCreator,
    }
  )
)(EditProfile)

export default EditProfileContainer
