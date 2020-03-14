import React from "react";
import { useSelector } from "react-redux";
import { View, Text } from "react-native";
import { RootState } from "../../core/store/store";

const Dashboard = () => {
  const players = useSelector((state: RootState) => {
      console.log(state);
      return state.game.players
  });
  console.log(players);
  return (
    <View style={{ backgroundColor: "navyblue" }}>
      {players && players.map(p => <Text>{p.name}</Text>)}
    </View>
  );
};

export default Dashboard;
