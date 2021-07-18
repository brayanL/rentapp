/* eslint-disable react/style-prop-object */
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import MainNavigator from "./src/navigators/MainNavigator";
import theme from "./src/utils/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <MainNavigator />
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
