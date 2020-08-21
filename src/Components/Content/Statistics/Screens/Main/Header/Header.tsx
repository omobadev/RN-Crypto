// PLUGINS IMPORTS //
import React from "react"
import { View, Dimensions, StyleSheet } from "react-native"
import { LineChart } from "react-native-chart-kit"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  GraphData: Array<any>
}

const Header: React.FC<PropsType> = (props) => {
  const prices =
    props.GraphData && props.GraphData.map((graphObj: any) => graphObj.sum)

  const dates =
    props.GraphData && props.GraphData.map((graphObj: any) => graphObj.dt)

  console.log(props.GraphData)

  console.log(prices)

  return (
    <View style={styles.container}>
      {prices.length > 1 && dates.length > 1 && (
        <LineChart
          data={{
            labels: dates || [],
            datasets: [
              {
                data: prices || [],
              },
            ],
          }}
          width={Dimensions.get("window").width / 1.1} // from react-native
          height={220}
          yAxisSuffix=" ₽"
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
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
})

export default Header
