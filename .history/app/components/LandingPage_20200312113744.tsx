import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-material-ui";
import { StackNavigationProp } from "@react-navigation/stack";

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
        paddingTop: 10,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "flex-start"
      }}
    >
      <View style={{ flex: 3, backgroundColor: "steelblue" }} />
      <View
        style={{
          flex: 1,
          display: "flex",
          marginBottom: 10,
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
        style={{ flex: 1, backgroundColor: "skyblue" }}
      >
        <Button raised accent text="Continue" />
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
        <Text>Something else</Text>
      </View>
    </View>
  );
};
export default LandingPage;
