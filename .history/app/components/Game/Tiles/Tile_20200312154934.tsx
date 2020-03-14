import React from "react";
import { View } from "react-native";
import { Card, CardItem, Text } from "native-base";

const Tile = () => {
  return (
    <View>
      <Text> Choose a resource </Text>
      <Card>
        <CardItem onPress={() => alert("You Chose Ore")}>
          <Text>Ore</Text>
        </CardItem>
        <CardItem onPress={() => alert("You Chose Wood")}>
          <Text>Wood</Text>
        </CardItem>
        <CardItem onPress={() => alert("You Chose Wheat")}>
          <Text>Wheat</Text>
        </CardItem>
        <CardItem onPress={() => alert("You Chose Sheep")}>
          <Text>Sheep</Text>
        </CardItem>
        <CardItem onPress={() => alert("You Chose Brick")}>
          <Text>Brick</Text>
        </CardItem>
      </Card>
    </View>
  );
};

export default Tile;
