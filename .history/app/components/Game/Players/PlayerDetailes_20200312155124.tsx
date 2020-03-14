import React from "react";
import { View, Text } from "native-base";
import { Player } from "../../../core/constants/types";

interface Props {
  player: Player;
}

const PlayerDetails: React.FC<Props> = ({ player }) => {
  return (
    <View>
      <Text>{player.name}</Text>
      <Text>{JSON.stringify(player.inventory)}</Text>
    </View>
  );
};

export default PlayerDetails;
