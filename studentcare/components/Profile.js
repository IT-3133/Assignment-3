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

        <View style={styles.studentInfoContainer}>
          <Image
            style={styles.profilePicContainer}
            source={studentdata.profile_pic}
          ></Image>
          <Text style={styles.studentName}>Name:{studentdata.username}</Text>
          <Text style={styles.studentDetails}>Age:{studentdata.age}</Text>
          <Text style={styles.studentDetails}>Gender:{studentdata.gender}</Text>
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
  studentInfoContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  profilePicContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden",
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#8b008b", // Matching border color
  },
  studentDetails: {
    fontSize: 18,
    color: "#555",
    marginBottom: 5,
    textAlign: "center",
  },
  studentName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
});
