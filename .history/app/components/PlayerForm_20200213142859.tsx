import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { Player } from "../core/constants/types";
import { View } from "react-native";
import {
  TextField,
  FilledTextField,
  OutlinedTextField
} from "react-native-material-textfield";

// class Example extends Component {
//   fieldRef = React.createRef();

//   onSubmit = () => {
//     let { current: field } = this.fieldRef;

//     console.log(field.value());
//   };

//   formatText = (text) => {
//     return text.replace(/[^+\d]/g, '');
//   };

//   render() {
//     return (
//       <OutlinedTextField
//         label='Phone number'
//         keyboardType='phone-pad'
//         formatText={this.formatText}
//         onSubmitEditing={this.onSubmit}
//         ref={this.fieldRef}
//       />
//     );
//   }
// }

interface Props {
  player: Player;
  index: number;
  color: PlayerColor;
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
