// PLUGINS IMPORTS //
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import FooterInput from "~/Components/Shared/Sections/FooterInputSection/FooterInputSection";

import Popup from "~/Components/Shared/Components/Popups/PopUp/PopUp";

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any;
  route: any;
  transferStatus: boolean;

  setTransferStatusActionCreator: (transferStatus: boolean) => void;
  sendCGCMoneyThunkCreator: (
    selectedUserID: string,
    password: string,
    moneyAmount: number,
  ) => any;
};

const MoneyMoveInScreen2: React.FC<PropsType> = (props) => {
  const moneyAmount = props.route.params.moneyAmount;
  const selectedUserID = props.route.params.selectedUserID;

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Внимание!{" "}</Text>
          Вы собираетесь сделать перевод средств.
        </Text>
        <Text style={styles.paragraph}>
          Имейте ввиду что перевод средств, как правило, занимает 1-2 часа с
          момента осуществления перевода.
        </Text>

        <FooterInput
          buttonText="Оплатить"
          action={(values: { value: string }) =>
            props.sendCGCMoneyThunkCreator(
              selectedUserID,
              values.value,
              moneyAmount,
            )}
          valueName="Введите пароль"
          errorText="Введите пароль"
        />
      </View>

      <Popup
        title="Спасибо!"
        description="Ваш перевод прошёл успешно!"
        containerStyle={{ width: "80%" }}
        buttonsArray={[
          {
            text: "OK",
            action: () => props.navigation.navigate("FinancesMain"),
          },
        ]}
        popupVisible={props.transferStatus}
        setPopupVisible={props.setTransferStatusActionCreator}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
  },

  paragraph: {
    color: "#00392D",
    fontSize: 18,
    marginBottom: 16,
  },

  bold: {
    fontWeight: "bold",
  },
});

export default MoneyMoveInScreen2;
