import React from "react";

import { useSelector } from "react-redux";
import { View, Text } from "react-native";
import Styles from "../core/constants/styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { DeepRivers, StrongByNature } from "../core/constants/colorThemes";
import { RootState } from "../core/store/store";

type Props = {
  navigation: StackNavigationProp<any>;
};

const LandingPage: React.FC<Props> = ({ navigation }) => {
  const gameDoesExist: boolean = useSelector(
    (state: RootState) => !!state.game.players.length
  );
  const [isTouchingContinue, setTouchingContinue] = React.useState(false);
  const [isTouchingNewGame, setTouchingNewGame] = React.useState(false);
  const navigateTo = (route: string) => () => {
    navigation.push(route);
    setTouchingContinue(false);
    setTouchingNewGame(false);
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column"
      }}
    >
      <View
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isTouchingNewGame
            ? DeepRivers[2].dark
            : DeepRivers[2].light
        }}
        onTouchStart={() => setTouchingNewGame(true)}
        onTouchEnd={navigateTo("Players")}
      >
        <Text style={{ fontSize: 20, fontWeight: "500" }}>New Game</Text>
      </View>
      <View
        onTouchEnd={() => gameDoesExist && navigateTo("Dashboard")}
        style={{
          ...Styles.flexRowAndCenter,
          flex: 1,
          backgroundColor: isTouchingContinue
            ? StrongByNature[2].dark
            : StrongByNature[2].light
        }}
        onTouchStart={() => setTouchingContinue(true)}
      >
        <Text style={{ fontSize: 20, fontWeight: "500" }}>Continue</Text>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>{gameDoesExist}</Text>
      </View>
      <View
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#930416"
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "500" }}>Something else</Text>
      </View>
    </View>
  );
};
export default LandingPage;
