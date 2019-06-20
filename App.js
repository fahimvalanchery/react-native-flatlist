import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import List from "./src/screens/FlatList";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <List />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flat: {
    height: 50,
    alignItems: "center"
  }
});
