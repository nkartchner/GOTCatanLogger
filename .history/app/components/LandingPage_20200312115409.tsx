import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-material-ui";
import { StackNavigationProp } from "@react-navigation/stack";
import Styles from "../core/constants/styles";

type Props = {
  navigation: StackNavigationProp<any>;
};

const LandingPage: React.FC<Props> = ({ navigation }) => {
  const [gameDoesExist] = React.useState(false);
  const navigateTo = (route: string) => () => {
    if ((route === "Details" && gameDoesExist) || route === "Players")
      navigation.push(route);
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
          backgroundColor: "lightblue"
        }}
        onTouchEnd={navigateTo("Players")}
      >
        <Text style={{ fontSize: 20, fontWeight: "500" }}>New Game</Text>
      </View>
      <View
        onTouchEnd={navigateTo("Details")}
        style={{ ...Styles.flexRowAndCenter, flex: 1, backgroundColor: "skyblue" }}
      >
        <Text style={{ fontSize: 20, fontWeight: "500" }}>Continue</Text>
      </View>
      <View
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "powderblue"
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "500" }}>Something else</Text>
      </View>
    </View>
  );
};
export default LandingPage;
