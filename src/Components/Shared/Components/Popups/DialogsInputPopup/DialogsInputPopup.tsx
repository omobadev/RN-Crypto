// PLUGINS IMPORTS //
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Dialog, {
  DialogContent,
  ScaleAnimation,
} from "react-native-popup-dialog"
import { Formik } from "formik"
import * as yup from "yup"
import { TextInput, Button } from "react-native-paper"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  popupVisible: boolean

  onSubmit: (values: any) => void
  setPopupVisible: (popupVisibilityStatus: boolean) => void
}

const DialogsInputPopup: React.FC<PropsType> = (props) => {
  const ValidationSchema = yup.object({
    title: yup.string().required("Название чата обязательно"),
    message: yup.string().required("Сообщение обязательно"),
  })

  return (
    <Dialog
      visible={props.popupVisible}
      dialogStyle={styles.wrapper}
      onTouchOutside={() => {
        props.setPopupVisible(false)
      }}
      dialogAnimation={
        new ScaleAnimation({
          initialValue: 0,
          useNativeDriver: true,
        } as any)
      }
    >
      <DialogContent style={styles.container}>
        <Formik
          validationSchema={ValidationSchema}
          initialValues={{
            title: "" as string,
            message: "" as string,
          }}
          onSubmit={(values: any) => props.onSubmit(values)}
        >
          {(FormikProps) => (
            <>
              <Text></Text>
              <TextInput
                style={styles.input}
                mode="outlined"
                label="Название чата"
                theme={{
                  colors: {
                    primary: "#006F5F",
                  },
                }}
                placeholderTextColor="rgba(0, 57, 45, 0.5)"
                value={FormikProps.values.title as any}
                onChangeText={FormikProps.handleChange("title")}
                onBlur={() => {
                  FormikProps.handleBlur("title")
                }}
              />
              {FormikProps.touched.title && FormikProps.errors.title && (
                <Text style={styles.error_message}>
                  {FormikProps.touched.title && FormikProps.errors.title}
                </Text>
              )}

              <TextInput
                style={styles.input}
                theme={{
                  colors: {
                    primary: "#006F5F",
                  },
                }}
                mode="outlined"
                label="Сообщение"
                placeholderTextColor="rgba(0, 57, 45, 0.5)"
                value={FormikProps.values.message as any}
                onChangeText={FormikProps.handleChange("message")}
                onBlur={() => {
                  FormikProps.handleBlur("message")
                }}
              />
              {FormikProps.touched.message && FormikProps.errors.message && (
                <Text style={styles.error_message}>
                  {FormikProps.touched.message && FormikProps.errors.message}
                </Text>
              )}

              <View style={styles.buttons_wrap}>
                <Button
                  color="#006F5F"
                  onPress={() => props.setPopupVisible(false)}
                >
                  Отмена
                </Button>
                <Button color="#006F5F" onPress={FormikProps.handleSubmit}>
                  ОК
                </Button>
              </View>
            </>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    alignItems: "center",
    marginVertical: -24,
    width: "112%",
    marginTop: 0,
  },

  input: {
    width: "90%",
    backgroundColor: "white",
    height: 40,
    marginBottom: 13,
  },

  buttons_wrap: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginBottom: 5,
    marginTop: 10,
    marginRight: 10,
  },

  error_message: {
    color: "crimson",
    marginBottom: 13,
    marginTop: 4,
    marginLeft: 6,
    fontSize: 13.5,
    letterSpacing: 0.3,
  },
})

export default DialogsInputPopup
