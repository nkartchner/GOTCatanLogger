import React from "react";
import { Text } from "react-native";
import { Card, CardItem, Body } from "native-base";
import { Player } from "../../core/constants/types";

interface Props {
  player: Player;
}

const PlayerCard: React.FC<Props> = ({ player }) => {
  return (
    <Card style={{ maxWidth: "45%", backgroundColor: "red" }}>
      <CardItem>
        <Body>
          <Text>{player.name}</Text>
        </Body>
      </CardItem>
    </Card>
  );
};
export default PlayerCard;
