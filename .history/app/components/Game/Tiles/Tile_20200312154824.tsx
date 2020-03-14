import React from "react";
import { View } from "react-native";
import { Card, CardItem, Text } from "native-base";

const Tile = () => {
  return (
    <View>
      <Text> Choose a resource </Text>
      <Card>
        <CardItem>
          <Text>Ore</Text>
        </CardItem>
        <CardItem>
          <Text>Wood</Text>
        </CardItem>
        <CardItem>
          <Text>Wheat</Text>
        </CardItem>
        <CardItem>
          <Text>Sheep</Text>
        </CardItem>
        <CardItem>
          <Text>Brick</Text>
        </CardItem>
      </Card>
    </View>
  );
};

export default Tile;
