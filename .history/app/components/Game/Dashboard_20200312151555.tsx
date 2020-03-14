import React from "react";
import PlayerCard from "./PlayerCard";
import { useSelector } from "react-redux";
import { Container, Card } from "native-base";
import { RootState } from "../../core/store/store";
import { Player } from "../../core/constants/types";

const Dashboard = () => {
  const players: Player[] = useSelector(
    (state: RootState) => state.game.players
  );

  return (
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
  );
};

export default Dashboard;
