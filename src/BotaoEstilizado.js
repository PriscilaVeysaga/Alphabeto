import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const BotaoEstilizado = ({ letra, func }) => {
  return (
    <TouchableOpacity onPress={func}>
      <View style={styles.tecladoButton}>
        <Text style={styles.letraButton}>{letra}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BotaoEstilizado;

const styles = StyleSheet.create({
  tecladoButton: {
    width: 50,
    height: 50,
    backgroundColor: "#D8BFD8",
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  letraButton: {
    color: '#fff',
    fontWeight: 600
  }
});