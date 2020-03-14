import React from "react";
import PlayerCard from "./PlayerCard";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native";
import { Container, Content } from "native-base";
import { RootState } from "../../core/store/store";
import { Player } from "../../core/constants/types";
import { Header } from "react-native/Libraries/NewAppScreen";

const Dashboard = () => {
  const players: Player[] = useSelector(
    (state: RootState) => state.game.players
  );

  return (
    <ScrollView>
      {/* <View
        style={{
          flex: 1,
          padding: 5,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          backgroundColor: "gray"
        }}
      >
        <PlayerCard players={players} />
      </View> */}
      <Container style={{ flex: 1 }}>
        <Header />
        <Content>
          {players.map((p, i) => (
            <PlayerCard player={p} key={i} />
          ))}
        </Content>
      </Container>
    </ScrollView>
  );
};

export default Dashboard;
