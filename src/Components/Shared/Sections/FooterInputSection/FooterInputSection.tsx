// PLUGINS IMPORTS //
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button";

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  valueName: string;
  errorText?: string;
  buttonText: string;

  action: (values: { value: string }) => void;

  isNumberPad?: boolean;
  containerStyle?: any;
  PropValidationSchema?: any;
};

const FooterInputSection: React.FC<PropsType> = (props) => {
  const ValidationSchema = yup.object({
    value: yup.string().required(props.errorText || "Укажите информацию")
      .typeError(props.errorText || "Укажите информацию"),
  });

  return (
    <View style={{ ...styles.container, ...props.containerStyle }}>
      <Text style={styles.title}>{props.valueName}</Text>

      <Formik
        validationSchema={props.PropValidationSchema
          ? props.PropValidationSchema
          : ValidationSchema}
        initialValues={{
          value: null as string | null,
        }}
        onSubmit={(values: any) => {
          props.action(values);
        }}
      >
        {(FormikProps) => (
          <>
            <TextInput
              style={styles.input}
              keyboardType={props.isNumberPad
                ? "number-pad"
                : "visible-password"}
              placeholderTextColor="rgba(0, 57, 45, 0.5)"
              value={FormikProps.values.value as any}
              onChangeText={FormikProps.handleChange("value")}
              onBlur={() => {
                FormikProps.handleBlur("value");
              }}
            />
            {FormikProps.touched.value && FormikProps.errors.value && (
              <Text style={styles.error_message}>
                {FormikProps.touched.value && FormikProps.errors.value}
              </Text>
            )}

            <Button
              text={props.buttonText}
              onPress={FormikProps.handleSubmit}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 135,
  },

  title: {
    color: "#00392D",
    fontSize: 17,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 57, 45, 0.25)",
    width: 206,
    marginTop: 10,
    textAlign: "center",
    color: "#006F5F",
    marginBottom: 15,
  },

  error_message: {
    color: "red",
    marginBottom: 15,
    marginTop: -8,
  },
});

export default FooterInputSection;
