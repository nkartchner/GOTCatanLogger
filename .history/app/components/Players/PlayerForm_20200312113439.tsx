import React from "react";
import { View } from "react-native";
import { Player } from "../../core/constants/types";
import { FilledTextField } from "react-native-material-textfield";

interface Props {
  player: Player;
  index: number;
  color: string;
  setPlayer: (value: string) => any;
}

const PlayerForm: React.FC<Props> = props => {
  const ref = React.useRef();
  return (
    <View
      style={{
        marginTop: 5
      }}
    >
      <FilledTextField
        ref={ref}
        value={props.player.name}
        label={`Player ${props.index} Name`}
        onChangeText={text => props.setPlayer(text)}
      />
    </View>
  );
};

export default PlayerForm;
