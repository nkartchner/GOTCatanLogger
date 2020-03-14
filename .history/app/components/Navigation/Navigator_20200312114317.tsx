import React from "react";
import { Image, Button } from "react-native";
import LandingPage from "../LandingPage";
import Players from "../Players/Players";
import Styles from "../../core/constants/styles";
import { createStackNavigator } from "@react-navigation/stack";

const LogoTitle = () => {
  return <Image style={Styles.logo} source={require("./logo.png")} />;
};

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => <LogoTitle />,
        headerStyle: {
          backgroundColor: "#eab64d"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }}
      initialRouteName="Welcome"
    >
      <Stack.Screen
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="black"
            />
          )
        }}
        component={LandingPage}
        name="Welcome"
      />
      <Stack.Screen
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="black"
            />
          )
        }}
        component={Players}
        name="Players"
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
