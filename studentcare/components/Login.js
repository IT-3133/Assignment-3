import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Divider, PaperProvider, Text } from "react-native-paper";

export default function Login() {
  return (
    <PaperProvider>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>UoV Student Care</Text>
        </View>
        <View style={styles.imagecontain}>
          <Image
            source={require("../assets/uovlogo.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.loginText}> Student Login</Text>
          <Divider />
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  header: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8b008b",
  },
  headerText: {
    fontSize: 24,
    color: "#fff",
    backgroundColor: "#8b008b",
    fontWeight: "bold",
  },
  image: {
    width: "60%",
    height: 100,
    resizeMode: "contain",
    marginTop: 5,
  },
  imagecontain: { alignItems: "center" },
  loginText: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
