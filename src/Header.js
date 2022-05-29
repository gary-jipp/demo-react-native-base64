import React, {useState} from 'react';
import {StyleSheet, View, Text} from "react-native";

const Header = function(props) {

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Base64</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'stretch',
    height: 55,
    paddingLeft: 10,
    backgroundColor: "#2196F3"
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  }
});

export default Header;