import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Data from "../components/Data";

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  renderItem = ({ item }) => {
    // console.log(item);
    return (
      <View style={styles.container}>
        <Text>{item.text}</Text>
      </View>
    );
  };

  componentDidMount() {
    this.setState({
      data: Data
    });
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id.toString()}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#003d33",
    flexDirection: "row"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
