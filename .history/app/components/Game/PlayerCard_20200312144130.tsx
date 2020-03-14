import React from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body
} from "native-base";
import { Player } from "../../core/constants/types";

interface Props {
  player: Player;
}

const PlayerCard: React.FC<Props> = ({ player }) => {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardItem header>
            <Text>{player.name}</Text>
          </CardItem>
          <CardItem button onPress={() => alert("This is Card Body")}>
            <Body>
              <Text>{player.inventory.settlements.length}</Text>
              <Text>{player.inventory.castles.length}</Text>
              <Text>{player.inventory.guards}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default PlayerCard;
