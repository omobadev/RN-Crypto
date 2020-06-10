// PLUGINS IMPORTS //
import React from "react"
import { View, Dimensions, StyleSheet } from "react-native"
import { LineChart } from "react-native-chart-kit"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const Header: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: ["March", "April", "May", "June", "July"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width / 1.1} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#006F5F",
          backgroundGradientFrom: "#E5E5E5",
          backgroundGradientTo: "#006F5F",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `black`,
          propsForDots: {
            r: "2",
            strokeWidth: "6",
            stroke: "#000",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
})

export default Header
