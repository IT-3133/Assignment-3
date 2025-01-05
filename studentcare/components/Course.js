import { Image, ScrollView, StyleSheet, View } from "react-native";
import {
  Button,
  Divider,
  PaperProvider,
  Text,
  TextInput,
} from "react-native-paper";
import { students } from "../data/StudentsDb";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Course() {
  return (
    <PaperProvider>
      <ScrollView>
        <View>
          <Text>Course</Text>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
