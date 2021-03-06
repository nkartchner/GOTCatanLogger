import React from "react";
import { Card } from "native-base";
import PlayerCard from "./PlayerCard";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
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
    </ScrollView>
  );
};

export default Dashboard;
