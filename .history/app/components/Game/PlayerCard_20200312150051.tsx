import React from "react";
import { Container, Header, Content, Card, CardItem, Body } from "native-base";

import { Player } from "../../core/constants/types";
import { Text } from "react-native";

interface Props {
  players: Player[];
}

const PlayerCard: React.FC<Props> = ({ players }) => {
  return (
    <Container style={{ flex: 1, flexBasis: "50%" }}>
      <Header />
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Text>testing 1234</Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Body>
              <Text>testing 4567890</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};
export default PlayerCard;
