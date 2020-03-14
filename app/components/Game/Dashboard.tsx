import React from "react";
import Roll from "./Roll";
import { Card } from "native-base";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import PlayerCard from "./Players/PlayerCard";
import { RootState } from "../../core/store/store";
import { Player } from "../../core/constants/types";

const Dashboard = () => {
  const players: Player[] = useSelector(
    (state: RootState) => state.game.players
  );

  return (
    <ScrollView>
      <Card
        transparent
        style={{
          flex: 1,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row"
        }}
      >
        {players.map((p, i) => (
          <PlayerCard player={p} key={i} />
        ))}
      </Card>
      <Roll />
    </ScrollView>
  );
};

export default Dashboard;
