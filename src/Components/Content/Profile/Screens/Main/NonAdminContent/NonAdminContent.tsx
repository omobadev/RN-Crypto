// PLUGINS IMPORTS //
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

// COMPONENTS IMPORTS //
import DialogsInputPopup from "~/Components/Shared/Components/Popups/DialogsInputPopup/DialogsInputPopup";
import CircleBtbItem from "./CircleBtnItem/CircleBtnItem";

// EXTRA IMPORTS //
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any;
  userData: any;

  createNewDialogThunkCreator: (
    selectedUsersIDs: Array<any>,
    chatTitle: string,
    message: string,
  ) => void;
};

const NonAdminContent: React.FC<PropsType> = (props) => {
  const [popupVisible, setPopupVisible] = useState(false as boolean);

  const submitNewChat = (values: any) => {
    setPopupVisible(false);
    props.createNewDialogThunkCreator(
      [props.userData.name],
      values.title,
      values.message,
    );
    props.navigation.navigate("Dialogs");
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={[styles.bold, styles.text]}>
          {props.userData.login}
        </Text>
        <Text style={styles.text}>{props.userData.name}</Text>
        <Text style={styles.text}>
          ID <Text style={styles.bold}>{props.userData.ID}</Text>
        </Text>
        <View style={styles.btns_wrap}>
          <CircleBtbItem
            onPress={() => setPopupVisible(true)}
            icon={<Feather name="message-circle" size={24} color="black" />}
          />
          <CircleBtbItem
            icon={<FontAwesome name="dollar" size={24} color="black" />}
            onPress={() => {
              props.navigation.navigate("Finances", {
                spcRoute: "MoneyMoveInScreen1",
                spcRouteData: {
                  selectedUserID: props.userData.name,
                },
              });
            }}
          />
          <CircleBtbItem
            icon={<Feather name="phone-call" size={24} color="black" />}
            onPress={() => {}}
          />
        </View>
      </View>

      <DialogsInputPopup
        popupVisible={popupVisible}
        setPopupVisible={setPopupVisible}
        onSubmit={submitNewChat}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    alignItems: "center",
  },

  text: {
    color: "#00392D",
    marginTop: 20,
    fontSize: 18,
  },

  bold: {
    fontWeight: "bold",
  },

  btns_wrap: {
    marginTop: 240,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
});

export default NonAdminContent;
