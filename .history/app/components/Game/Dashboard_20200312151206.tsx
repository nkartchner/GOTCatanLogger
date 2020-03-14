import React from "react";
import PlayerCard from "./PlayerCard";
import { useSelector } from "react-redux";
import { Container, Content } from "native-base";
import { RootState } from "../../core/store/store";
import { Player } from "../../core/constants/types";

const Dashboard = () => {
  const players: Player[] = useSelector(
    (state: RootState) => state.game.players
  );

  return (
    <Container
      style={{
        flex: 1,
        backgroundColor: "gray"
      }}
    >
      <Content
        style={{
          flex: 1,
          display: "flex",
          flexWrap: "nowrap",
          flexDirection: "row"
        }}
      >
        {players.map((p, i) => (
          <PlayerCard player={p} key={i} />
        ))}
      </Content>
    </Container>
  );
};

export default Dashboard;
