import React from "react";
import { Alert, SafeAreaView, ScrollView, Linking } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";
import { RowItem, RowSeparator } from "../components/RowItem";

const openURL = (url) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert(
      "Sorry something went wrong",
      "Please check the url and try again!"
    );
  });
};
export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <RowItem />
        <RowItem
          title="Learn React Native"
          onPress={() => openURL("https://reactnative.dev/docs/tutorial")}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />

        <RowSeparator />

        <RowItem
          title="React Native Basics"
          onPress={() => openURL("https://reactnative.dev/docs/components-and-apis")}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />

        <RowSeparator />

        <RowItem
          title="React Native by Example"
          onPress={() => alert("todo!")}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
