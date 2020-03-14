import React from "react";
import { Text } from "react-native";
import { Card, CardItem, Body } from "native-base";
import { Player } from "../../core/constants/types";

interface Props {
  player: Player;
}

const PlayerCard: React.FC<Props> = ({ player }) => {
  return (
    <CardItem
      style={{
        flex: 1,
        margin: 5,
        borderRadius:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height: 200,
        flexBasis: "45%",
        backgroundColor: "red"
      }}
    >
      <Body>
        <Text>{player.name}</Text>
      </Body>
    </CardItem>
  );
};
export default PlayerCard;
