import React from "react";
import { Image, View, Text, ScrollView } from "react-native";
import Styles from "./app/core/constants/styles";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp
} from "@react-navigation/stack";
import { Player } from "./app/core/constants/types";
import PlayerForm from "./app/components/PlayerForm";
import LandingPage from "./app/components/LandingPage";
import { Button } from "react-native-material-ui";

// There are 3 kinds of wildlings
// there are 3 parts of the map
/**
 * The Gift
 * Frostborne
 * The Clearing
 * wall can have 5 Guards
 * Wildling Dice - moves wilding
 * big wildling kills a guard upon
 */
 


interface Props {
  navigation: StackNavigationProp<any>;
}
const InitialScreen: React.FC<Props> = ({ navigation }) => {
  const [players, setPlayers] = React.useState<Player[]>(
    Array.from([{}, {}, {}]).map(() => new Player())
  );
  console.log(players);
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
        <PlayerForm key={i} index={i+1} player={p} setPlayer={onPlayerChange(i)} />
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
            backgroundColor: "#f4511e"
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
        component={InitialScreen}
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
