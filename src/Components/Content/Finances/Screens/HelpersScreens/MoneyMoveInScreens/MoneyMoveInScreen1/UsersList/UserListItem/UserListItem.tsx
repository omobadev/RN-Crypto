// PLUGINS IMPORTS //
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { AntDesign } from "@expo/vector-icons";

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  userName: string;
  selectedUserID: string | null;
  onPress: () => void;
};

const UserListItem: React.FC<PropsType> = (props) => {
  const selected = props.selectedUserID === props.userName;

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.userName}</Text>
      {selected
        ? <AntDesign name="checkcircle" size={22} color="#006F5F" />
        : <AntDesign name="checkcircleo" size={22} color="#006F5F" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 15,
    alignItems: "center",
  },

  text: {
    color: "#006F5F",
    fontSize: 18,
  },
});

export default UserListItem;
