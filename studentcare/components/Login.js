import { Image, ScrollView, StyleSheet } from "react-native";
import { Divider, PaperProvider, Text } from "react-native-paper";
import { View } from "react-native-web";

export default function Login() {
  return (
    <PaperProvider>
      <ScrollView>
        <View style={Styles.container}>
          <Text>Student Login</Text>
          <Divider />
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const Styles = StyleSheet.create({
  container: {},
  image: {
    width: "85%",
    height: 80,
  },
});
