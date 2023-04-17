import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import BotaoEstilizado from "./src/BotaoEstilizado";
import alfabeto from "./src/alphabeto"

export default function App() {
  const [maiuscula, setMaiuscula] = useState();
  const [minuscula, setMinuscula] = useState();
  const [pronuncia, setPronuncia] = useState();

  const handlePress = (letra) => {
    setMaiuscula(letra.maiuscula);
    setMinuscula(letra.minuscula);
    setPronuncia(letra.pronuncia);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.informacao}>
        {maiuscula 
        ? 
        (
          <>
            <Text style={styles.texto}>Letra maiúscula: {maiuscula}</Text>
            <Text style={styles.texto}>Letra minúscula: {minuscula}</Text>
            <Text style={styles.texto}>Pronuncia: {pronuncia}</Text>
          </>
        ) 
        : 
        (
          <Text style={styles.titulo}>Selecione uma letra!!!</Text>
        )}
      </View>
      <View style={styles.teclado}>
        {alfabeto.map((letra) => (
          <BotaoEstilizado
            key={letra.maiuscula}
            letra={letra.maiuscula}
            func={() => handlePress(letra)}
          />
        ))}
      </View>
      <Image style={styles.image}
            source={require('./assets/girafa.png')}
            />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFE0",
    alignItems: "center",
    justifyContent: "center",
  },

  informacao: {
    justifyContent: "center",
    alignItems: "center",
  },

  texto: {
    fontSize: 20,
    fontWeight: 600,
    color: '#FF1493'
  },

  titulo: {
    fontSize: 30,
    fontWeight: 600,
    color: '#D8BFD8'
  },

  teclado: {
    marginTop: 25,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center",
  },
  
  image: {
    width: 150,
    height: 150,
    marginTop: -50,
    marginLeft: 240,
  }
});
