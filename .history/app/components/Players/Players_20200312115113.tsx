import React from "react";
import PlayerForm from "./PlayerForm";
import { View, ScrollView } from "react-native";
import Styles from "../../core/constants/styles";
import { Button } from "react-native-material-ui";
import { Player } from "../../core/constants/types";
import { StackNavigationProp } from "@react-navigation/stack";

interface Props {
  navigation: StackNavigationProp<any>;
}
const Players: React.FC<Props> = ({ navigation }) => {
  const [players, setPlayers] = React.useState<Player[]>(
    Array.from([{}, {}, {}]).map(() => new Player())
  );
  const colors = [
    "rgba(255,255,0,0.38)",
    "rgba(0,0,0,0.38)", // black
    "rgba(0,0,255,0.38)", // blue
    "rgba(0,0,0,0.38)", // red
    "rgba(0,0,0,0.38)", // purple
    "rgba(0,128,0,0.38)" // green
  ];
  const onPlayerChange = (index: number) => (value: string) => {
    setPlayers(
      players.map((p, i) => (index === i ? { ...p, name: value } : p))
    );
  };
  const incrementPlayers = () => {
    if (players.length < 6) setPlayers([...players, new Player()]);
  };
  const decrementPlayers = () => {
    if (players.length > 3) {
      setPlayers(players.slice(0, players.length - 1));
    }
  };
  const isValid = players.every(p => p.name.trim().length);
  return (
    <ScrollView style={Styles.scrollContainer}>
      <View style={Styles.addBtnContainer}>
        <Button
          raised
          primary
          text="+"
          onPress={incrementPlayers}
          style={{ container: Styles.roundedBtn, text: { fontSize: 24 } }}
        />
        <Button
          raised
          primary
          text="-"
          onPress={decrementPlayers}
          style={{ container: Styles.roundedBtn, text: { fontSize: 24 } }}
        />
      </View>
      {players.map((p, i) => (
        <PlayerForm
          key={i}
          color={colors[i]}
          index={i + 1}
          player={p}
          setPlayer={onPlayerChange(i)}
        />
      ))}
      {isValid && (
        <Button
          raised
          primary
          text="Start Game!"
          onPress={() => navigation.navigate("Dashboard")}
        />
      )}
    </ScrollView>
  );
};

export default Players;