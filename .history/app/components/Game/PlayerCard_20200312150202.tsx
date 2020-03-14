import React from "react";
import { Container, Header, Content, Card, CardItem, Body } from "native-base";

import { Player } from "../../core/constants/types";
import { Text } from "react-native";

interface Props {
  player: Player;
}

const PlayerCard: React.FC<Props> = ({ player }) => {
  return (
    <Card>
      <CardItem>
        <Body>
            <Text>{player.name}</Text>
        </Body>
      </CardItem>
    </Card>
  );
};
export default PlayerCard;
