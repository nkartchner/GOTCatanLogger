import React from "react";
import { Text } from "react-native";
import { Card, CardItem, Body } from "native-base";
import { Player } from "../../core/constants/types";

interface Props {
  player: Player;
}

const PlayerCard: React.FC<Props> = ({ player }) => {
  return (
    <Card
      style={{
        minWidth: "45%",
        maxWidth: "45%",
        margin:0,
        padding:0
      }}
    >
      <CardItem  style={{ backgroundColor: "red" }}>
        <Body>
          <Text>{player.name}</Text>
        </Body>
      </CardItem>
    </Card>
  );
};
export default PlayerCard;
