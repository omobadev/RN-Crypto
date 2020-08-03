// PLUGINS IMPORTS //
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  CGCInfo: {
    price: string;
    value2: string;
  };
};

const Header: React.FC<PropsType> = (props) => {
  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Поиск"
        placeholderTextColor="rgba(0, 57, 45, 0.5)"
      />

      <View style={styles.content}>
        <Text style={styles.text}>Ваш баланс</Text>
        <Text style={{ ...styles.text, fontWeight: "bold" }}>
          {props.CGCInfo.value2} CGC
        </Text>
      </View>

      <Text style={{ ...styles.text, marginTop: 30, fontSize: 17 }}>
        Выберите получателя:
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 288,
    alignSelf: "center",
    backgroundColor: "rgba(0, 57, 45, 0.05)",
    borderRadius: 10,
    marginTop: 10,
    height: 35,
    fontSize: 16.9,
    textAlign: "center",
  },

  content: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  text: {
    color: "#00392D",
    fontSize: 18,
  },
});

export default Header;
