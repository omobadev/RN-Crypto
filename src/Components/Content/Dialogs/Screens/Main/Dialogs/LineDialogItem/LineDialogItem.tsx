// PLUGINS IMPORTS //
import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any;
  dialog: any;
};

const LineDialogItem: React.FC<PropsType> = (props) => {
  return (
    <>
      <RectButton
        style={styles.container}
        onPress={() =>
          props.navigation.navigate("DialogItem", {
            userName: props.dialog.chTopic,
            avatar: props.dialog.avatar,
            chatInfo: props.dialog,
          })}
      >
        <View style={styles.credentials_wrap}>
          <View style={styles.img_wrap}>
            <Image
              source={require("~/Images/default-avatar.png")}
              style={styles.img_wrap}
            />
            <Text style={styles.letter}>{props.dialog.chTopic.charAt(0)}</Text>
          </View>
          <View style={styles.text_wrap}>
            <Text style={styles.name_text}>{props.dialog.chTopic}</Text>
            <Text style={styles.desc_text}>{props.dialog.chmText}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.timing}>{props.dialog.chmTS}</Text>
        </View>
      </RectButton>
      <View style={styles.divider} />
    </>
  );
};

const screenWidth = Dimensions.get("screen").width;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 13,
    paddingVertical: 15,
  },

  credentials_wrap: {
    flexDirection: "row",
    alignItems: "center",
  },

  img_wrap: {
    width: 46,
    height: 46,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  letter: {
    position: "absolute",
    fontSize: 26,
    color: "#F2F2F2",
  },

  text_wrap: {
    marginLeft: 12,
    width: screenWidth / 1.75,
  },

  name_text: {
    color: "#00392D",
    fontSize: 18,
  },

  desc_text: {
    color: "#9E9E9E",
  },

  timing: {
    color: "#9E9E9E",
    fontSize: 13,
    textAlign: "right",
  },

  divider: {
    borderTopColor: "rgba(0, 57, 45, 0.14)",
    borderTopWidth: 1,
    alignSelf: "flex-end",
  },
});

export default LineDialogItem;
