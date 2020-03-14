import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../core/store/reducers/reducers";
import { View, Text } from "react-native";

const Dashboard = () => {
  const players = useSelector((state: State) => state.players);
  console.log(players);
  return (
    <View style={{ backgroundColor: "navyblue" }}>
      {players && players.map(p => <Text>{p.name}</Text>)}
    </View>
  );
};

export default Dashboard;
