import React from "react";
import { useSelector } from "react-redux";
import { View, Text } from "react-native";
import { RootState } from "../../core/store/store";
import { Player } from "../../core/constants/types";
import PlayerCard from "./PlayerCard";

const Dashboard = () => {
  const players: Player[] = useSelector(
    (state: RootState) => state.game.players
  );

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "navyblue"
      }}
    >
      {players && players.map((p, i) => <PlayerCard key={i} player={p} />)}
    </View>
  );
};

export default Dashboard;
