import React from "react";
import { useSelector } from "react-redux";
import { View, Text } from "react-native";
import { RootState } from "../../core/store/store";
import { Player } from "../../core/constants/types";

const Dashboard = () => {
  const players: Player[] = useSelector(
    (state: RootState) => state.game.players
  );

  return (
    <View style={{ backgroundColor: "navyblue" }}>
      {players && players.map((p,i) => <Text key={i}>{p.name}</Text>)}
    </View>
  );
};

export default Dashboard;
