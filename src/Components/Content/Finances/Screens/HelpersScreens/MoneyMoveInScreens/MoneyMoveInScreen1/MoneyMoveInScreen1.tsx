// PLUGINS IMPORTS //
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

// COMPONENTS IMPORTS //
import Header from "./Header/Header";
import UsersList from "./UsersList/UsersList";
import FooterInput from "~/Components/Shared/Sections/FooterInputSection/FooterInputSection";

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any;

  usersList: Array<any>;
  CGCInfo: {
    price: string;
    value2: string;
  };

  getUsersListThunkCreator: () => void;
};

const MoneyMoveInScreen1: React.FC<PropsType> = (props) => {
  const [selectedUserID, setSelectedUserID] = useState(
    props.usersList && props.usersList[0].id as string | null,
  );
  useEffect(() => {
    props.getUsersListThunkCreator();
  }, []);

  return (
    <View style={styles.container}>
      <Header CGCInfo={props.CGCInfo} />
      <View style={styles.divider} />
      <UsersList
        usersList={props.usersList}
        selectedUserID={selectedUserID}
        setSelectedUserID={setSelectedUserID}
      />
      <FooterInput
        buttonText="Перевод"
        action={(values: { value: string }) => {
          if (
            !isNaN(Number(values.value)) && Number(values.value) > 0 &&
            selectedUserID
          ) {
            props.navigation.navigate("MoneyMoveInScreen2", {
              moneyAmount: Number(values.value),
              selectedUserID: selectedUserID,
            });
          }
        }}
        valueName="Укажите сумму"
        errorText="Укажите сумму"
        containerStyle={styles.footer_input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },

  footer_input: {
    marginBottom: 40,
  },

  divider: {
    borderBottomColor: "rgba(0, 57, 45, 0.05)",
    borderWidth: 1,
    opacity: 0.2,
    marginVertical: 10,
  },
});

export default MoneyMoveInScreen1;
