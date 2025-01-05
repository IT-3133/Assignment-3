import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Divider, PaperProvider, Text, TextInput } from "react-native-paper";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigate = useNavigation();
  return (
    <PaperProvider>
      <ScrollView>
        <View>
          <Text>Profile</Text>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
