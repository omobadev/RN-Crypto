// PLUGINS IMPORTS //
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";

// COMPONENTS IMPORTS //
import TopBox from "./TopBox/TopBox";
import BottomSection from "./BottomSection/BottomSection";

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any;

  BudgetInfo: {
    CGC: {
      price: string;
      value2: string;
    };

    MiningCGC: {
      price: string;
      value2: string;
    };

    DailyIncome: {
      price: string;
      value2: string;
    };
    INPH: {
      price: string;
      value2: string;
    };
    wallet: string;
  };

  getUserGeneralFinancesInfoThunkCreator: () => void;
};

const Main: React.FC<PropsType> = (props) => {
  useEffect(() => {
    props.getUserGeneralFinancesInfoThunkCreator();
  }, []);

  return (
    <View style={styles.container}>
      <TopBox
        navigation={props.navigation}
        BudgetInfo={props.BudgetInfo}
      />
      <BottomSection navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
