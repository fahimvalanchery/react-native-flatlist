import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import Data from "../components/Data";

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: []
    };
  }

  componentDidMount() {
    this.setState({
      dataSource: Data
    });
  }

  _renderItem = () => ({ item }) => (
    <View style={styles.mainView}>
      <Text style={styles.leftText}>{item.op_number}</Text>
      <Text style={styles.middleText}>{item.name}</Text>

      <View style={styles.visitBtn}>
        <Button
          onPress={() => alert("click")}
          color={item.status == true ? "#90a4ae" : "#1e88e5"}
          style={[styles.rightButton]}
          title={item.status == true ? "Visited" : "Waiting"}
        />
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this._renderItem()}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainView: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    height: 50,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  leftText: {
    left: 20
  },
  middleText: {
    position: "absolute",
    left: 90,
    fontSize: 16,
    fontWeight: "500"
  },
  visitBtn: {
    width: "19%",
    marginLeft: 310
  }
});
