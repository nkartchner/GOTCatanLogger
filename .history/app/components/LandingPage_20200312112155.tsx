import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-material-ui";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
  navigation: StackNavigationProp<any>;
};

const LandingPage: React.FC<Props> = ({ navigation }) => {
  const [gameDoesExist] = React.useState(false);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 10
      }}
    >
      <View
        style={{
          width: "100%",
          height: "50%",
          marginBottom: 10,
          backgroundColor: "lightblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        onTouchEnd={() => navigation.navigate("Players")}
      >
        <Text>New Game</Text>
      </View>
      <View style={{ width: "100%", height: "auto" }}>
        <Button
          raised
          accent
          onPress={() => navigation.push("Details")}
          text="Continue"
        />
      </View>
    </View>
  );
};
export default LandingPage;
