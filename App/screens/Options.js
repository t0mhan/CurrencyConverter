import React from "react";
import { SafeAreaView, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";
import { RowItem, RowSeparator } from "../components/RowItem";

export default () => {
  return (
    <View>
      <RowItem />
      <RowItem
        title="Themes"
        onPress={() => alert("todo!")}
        rightIcon={
          <Entypo name="chevron-right" size={20} color={colors.blue} />
        }
      />

      <RowSeparator />

      <RowItem
        title="React Native Basics"
        onPress={() => alert("todo!")}
        rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
      />

      <RowSeparator />

      <RowItem
        title="React Native by Example"
        onPress={() => alert("todo!")}
        rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
      />
    </View>
  );
};
