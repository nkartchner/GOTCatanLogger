import React from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

import { Player } from "../../core/constants/types";
import { Image, Text } from "react-native";

interface Props {
  player: Player;
}

const PlayerCard: React.FC<Props> = ({ player }) => {
  return (
    <Container style={{ flex: 1, flexBasis: "50%" }}>
      <Header />
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Text>{player.name}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};
export default PlayerCard;
