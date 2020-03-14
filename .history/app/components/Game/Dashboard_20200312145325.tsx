import React from "react";
import { useSelector } from "react-redux";
import { View, Text, ScrollView } from "react-native";
import { RootState } from "../../core/store/store";
import { Player } from "../../core/constants/types";
import PlayerCard from "./PlayerCard";

const Dashboard = () => {
  const players: Player[] = useSelector(
    (state: RootState) => state.game.players
  );

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          padding: 5,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          backgroundColor: "gray"
        }}
      >
        {players && players.map((p, i) => <PlayerCard key={i} player={p} />)}
      </View>
    </ScrollView>
  );
};

export default Dashboard;
