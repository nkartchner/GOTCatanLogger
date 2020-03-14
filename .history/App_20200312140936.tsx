import React from "react";
import { Provider } from "react-redux";
import gameStore from "./app/core/store/store";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./app/components/Navigation/Navigator";
import CounterApp from "./app/components/Counter";

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
  return (
    <Provider store={gameStore}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
