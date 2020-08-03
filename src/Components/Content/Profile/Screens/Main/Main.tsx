// PLUGINS IMPORTS //
import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

// COMPONENTS IMPORTS //
import AdminContent from "./AdminContent/AdminContent";
import NonAdminContent from "./NonAdminContent/NonAdminContent";

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any;
  route: any;

  UserCredentials: {
    ID: string;
    name: string;
    login: string;
    email: string;
    location: string;
    invitedID: string;
  };

  getUserCredentialsThunkCreator: () => void;
};

const Main: React.FC<PropsType> = (props) => {
  useEffect(() => {
    props.getUserCredentialsThunkCreator();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={require("~/Images/avatar.png")} />
      {props.route.params.isAdmin
        ? (
          <AdminContent userData={props.UserCredentials} />
        )
        : (
          <NonAdminContent
            userData={props.UserCredentials}
            navigation={props.navigation}
          />
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 27,
    marginHorizontal: 20,
  },

  avatar: {
    alignSelf: "center",
    borderRadius: 1000,
    height: 150,
    width: 150,
  },

  content: {
    marginTop: 50,
  },

  bold_text: {},
});

export default Main;
