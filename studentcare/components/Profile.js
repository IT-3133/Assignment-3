import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Divider, PaperProvider, Text, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function Profile({ route }) {
  const { studentdata } = route.params;
  const navigate = useNavigation();
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

        <View>
          <Text>Name:{studentdata.username}</Text>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
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
