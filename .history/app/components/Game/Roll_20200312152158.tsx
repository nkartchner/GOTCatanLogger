import React from "react";
import { View } from "react-native";
import { Button, Text } from "native-base";
import Styles from "../../core/constants/styles";

const rolls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Roll = () => {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        alignContent:"center",
        justifyContent:"center"
      }}
    >
      {rolls.map(r => (
        <Button
          small
          rounded
          primary
          style={{
            minWidth: 50,
            maxWidth: 50,
            margin:4,
            height: 50,
            ...Styles.flexRowAndCenter,
            flex: 1
          }}
        >
          <Text>{r}</Text>
        </Button>
      ))}
    </View>
  );
};

export default Roll;
