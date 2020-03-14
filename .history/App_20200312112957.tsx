import React from "react";
import { Image } from "react-native";
import Styles from "./app/core/constants/styles";
import LandingPage from "./app/components/LandingPage";
import Players from "./app/components/Players/Players";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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

const LogoTitle = () => {
  return <Image style={Styles.logo} source={require("./logo.png")} />;
};
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        options={{
          headerTitle: () => <LogoTitle />,
          headerStyle: {
            backgroundColor: "#eab64d"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
        component={LandingPage}
        name="Welcome"
      />
      <Stack.Screen
        options={{
          headerTitle: () => <LogoTitle />,
          headerStyle: {
            backgroundColor: "#f4511e"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
        component={Players}
        name="Players"
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
