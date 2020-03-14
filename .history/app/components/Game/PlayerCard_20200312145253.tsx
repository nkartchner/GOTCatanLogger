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
    <Container style={{ width: "45%" }}>
      <Header />
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: "Image URL" }} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{ uri: "Image URL" }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};
export default PlayerCard;
