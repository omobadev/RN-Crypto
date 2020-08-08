// PLUGINS IMPORTS //
import React from "react"
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import { AntDesign } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  images: Array<any>
  setImages: (newImages: Array<any>) => void
}

const screenWidth = Dimensions.get("screen").width
const ImagesSection: React.FC<PropsType> = (props) => {
  const removeImage = (image: string) => {
    const filteredImages = props.images.filter((val: any) => val !== image)
    props.setImages(filteredImages)
  }

  return (
    <>
      {props.images && props.images.length > 0 && (
        <ScrollView style={styles.container} horizontal>
          {props.images.map((image: any) => {
            return (
              <View>
                <Image
                  style={[
                    styles.image,
                    {
                      width:
                        image.length <= 4
                          ? screenWidth / props.images.length
                          : 85,
                    },
                  ]}
                  source={{ uri: image }}
                />
                <TouchableOpacity
                  style={styles.close_icon}
                  onPress={() => removeImage(image)}
                >
                  <AntDesign name="closecircle" size={15} color="white" />
                </TouchableOpacity>
              </View>
            )
          })}
        </ScrollView>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  image: {
    height: 90,
    minWidth: 85,
    marginHorizontal: 1,
  },

  close_icon: {
    position: "absolute",
    right: 6,
    top: 6,
  },
})

export default ImagesSection
