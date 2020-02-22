import React, { useEffect, useState } from "react"
import Chart from "../../components/Chart"
import db from "../../db/init"
import getVoteData from "../../db/getVoteData"
import getRoomData from "../../db/getRoomData"
import { Image, View, Text, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { PieChart } from "react-native-svg-charts"
import { Col, Row, Grid } from "react-native-easy-grid";
import Labels from "../../components/Labels";
import CountDown from "../../components/countdown/CountDown";

const createChartData = ({ influencer, normal, competitor }) => {
  const data = [
    {
      key: 3,
      amount: normal,
      svg: { fill: "#1563af" }
    },
    {
      key: 2,
      amount: influencer,
      svg: { fill: "#dd8300" }
    },
    {
      key: 1,
      amount: competitor,
      svg: { fill: "#f4f4f4" }
    }
  ]
  console.log("chart data", data)
  return data
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start" // if you want to fill rows left to right
  },
  item: {
    width: "50%", // is 50% of container width
    flexDirection: "column",
    alignItems: "center"
  }
})


const Results = () => {
  const [scores, setScore] = useState(null);
  const [roomData, setRoomData] = useState(null);

  useEffect(() => {
    const getScore = async () => {
      const v = await getVoteData({ roomID: "room1" })
      setScore(v)
    }
    getScore()
  }, [])

  useEffect(() => {
    const getRoom = async () => {
      const data = await getRoomData({ roomID: "room1" })
      setRoomData(data)
    }
    getRoom()
  }, [])

  return (scores && roomData) ? (
    <SafeAreaView>
      <View>
        <View style={{ padding: 25 }}>
          <Text style={{ fontSize: 23, fontWeight: "bold", paddingBottom: 10 }}>
            {roomData.title}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Image source={{ uri: roomData.pictureA }} style={{ width: 150, height: 200 }} />
              <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", paddingTop: 10 }}>Option A</Text>
              <PieChart
                style={{ height: 200 }}
                valueAccessor={({ item }) => item.amount}
                data={createChartData({
                  influencer: scores.numInfluencersA,
                  normal: scores.numNormalA,
                  competitor: scores.scoreB
                })}
                spacing={0}
                outerRadius={'95%'}
              >
                <Labels />
              </PieChart>
            </View>
            <View style={{ flex: 1 }}>
              <Image source={{ uri: roomData.pictureB }} style={{ width: 150, height: 200 }} />
              <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", paddingTop: 10 }}>Option B</Text>
              <PieChart
                style={{ height: 200 }}
                valueAccessor={({ item }) => item.amount}
                data={createChartData({
                  influencer: scores.numInfluencersB,
                  normal: scores.numNormalB,
                  competitor: scores.scoreA
                })}
                spacing={0}
                outerRadius={'95%'}
              >
                <Labels />
              </PieChart>
            </View>
          </View>
        </View>
        {/* <CountDown isFinished={() => console.log("Finished!")} /> */}
        {/*<Grid>
        <Col style={{ alignItems: 'center'}}>
          <Image source={a_src} style={{ width: 150, height: 200 }} />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Option A</Text>
        </Col>
        <Col style={{ alignItems: 'center'}}>
          <Image source={b_src} style={{ width: 150, height: 200 }} />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Option B</Text>
        </Col>
      </Grid>*/}
      </View>
    </SafeAreaView>
  ) : (
      <Text>Loading...</Text>
    )
}

export default Results
