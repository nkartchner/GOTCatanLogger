import React from "react";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import { Container, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import gameStore from "./app/core/store/store";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./app/components/Navigation/Navigator";

// There are 3 kinds of wildlings
// there are 3 parts of the map
/**
 * The Gift
 * Frostborne
 * The Clearing
 * wall can have 5 Guards
 * 3
 * Wildling Dice - moves wilding
 * big wildling kills a guard upon
 */

const App = () => {
  await Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    ...Ionicons.font
  });
  return (
    <Provider store={gameStore}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
