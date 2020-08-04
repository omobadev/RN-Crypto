// PLUGINS IMPORTS //
import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

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
      <View style={styles.img_wrap}>
        <Image
          style={styles.img_wrap}
          source={require("~/Images/default-avatar.png")}
        />
        <Text style={styles.letter}>
          {props.UserCredentials.name &&
            String(props.UserCredentials.name.charAt(0))}
        </Text>
      </View>
      {!props.route.params.isAdmin
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

  img_wrap: {
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 1000,
    height: 150,
    width: 150,
  },

  letter: {
    position: "absolute",
    fontSize: 99,
    color: "#F2F2F2",
  },
});

export default Main;
