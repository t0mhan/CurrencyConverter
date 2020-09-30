import React from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";

import colors from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
});

export default () => {
  return (
    <View style={styles.container}>
        <Text>Hello Worls!</Text>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
    </View>
  );
};
