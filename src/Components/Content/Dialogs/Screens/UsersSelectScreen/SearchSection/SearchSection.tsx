// PLUGINS IMPORTS //
import React from "react";
import { View, StyleSheet ,TextInput} from "react-native";

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
    value: string | null
    setValue: (newValue: string) => void
};

const SearchSection: React.FC<PropsType> = (props) => {
  return (
    <View>
           <TextInput
          placeholder="Поиск"
          placeholderTextColor="white"
          value={props.value as string}
          onChangeText={(text: string) => props.setValue(text)}
          style={styles.input}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#006F5F",
        color:"white",
        marginHorizontal: 16,
        borderRadius: 10,
        marginTop: 20,
        paddingVertical: 3,
        paddingHorizontal: 20,
        fontSize: 16,
        marginBottom: 10
    }
});

export default SearchSection;
