import React from "react";
import { Text } from "react-native";
import { CardItem, Body } from "native-base";
import { Player } from "../../../core/constants/types";

interface Props {
  player: Player;
}

const PlayerCard: React.FC<Props> = ({ player }) => {
  return (
    <CardItem
      style={{
        flex: 1,
        margin: 5,
        height: 200,
        display: "flex",
        borderRadius: 10,
        flexBasis: "45%",
        alignItems: "center",
        backgroundColor: "red",
        justifyContent: "center"
      }}
    >
      <Body>
        <Text>{player.name}</Text>
        <Text>{player.id}</Text>
      </Body>
    </CardItem>
  );
};
export default PlayerCard;
