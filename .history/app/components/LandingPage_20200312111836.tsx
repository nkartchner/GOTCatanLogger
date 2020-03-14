import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { Button } from "react-native-material-ui";

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
      <View style={{ width: "100%", height: "auto", marginBottom: 10 }}>
        <Button
          raised
          primary
          onPress={() => navigation.navigate("Players")}
          text="New Game"
        />
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
