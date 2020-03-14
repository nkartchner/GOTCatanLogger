import React from "react";
import { View } from "react-native";
import { Button, Text } from "native-base";

const rolls = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10, 11, 12];

const Roll = () => {
  return (
    <View style={{ width: "100%" }}>
      {rolls.map(r => (
        <Button style={{ width: 40 }} rounded small primary>
          <Text>{r}</Text>
        </Button>
      ))}
    </View>
  );
};

export default Roll;
