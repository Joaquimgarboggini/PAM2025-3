import React from "react";
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity } from "react-native";
import casual from './src/imagens/casual_dog.png';
import google from './src/imagens/Google.png';

export default function App() {
  const handleButton1Press = () => {
    Alert.alert("Botão 1 pressionado!");
  };

  const handleButton2Press = () => {
    Alert.alert("Botão 2 pressionado!");
  };

  return (

    <View style={styles.container}>

      <View style={styles.topBar} />

      <Image source={casual}/>
      <Text style={styles.title}>Ótimo Dia!</Text>
      <Text style={styles.subtitle}>Como deseja acessar?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1} onPress={handleButton1Press}>
          <Image source={google} style={styles.buttonImage} />
          <View style={{ flex: 1 }}>
            <Text style={styles.buttonText1}>Como deseja acessar</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.buttonSpacing} />
        <TouchableOpacity style={styles.button} onPress={handleButton2Press}>
          <Text style={styles.buttonText}>Outras opções</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },

  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  
  title: {
    fontSize: 35,
    marginBottom: 10,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },

  buttonContainer: {
    width: "80%",
  },

  buttonSpacing: {
    height: 10,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#14c871',
  },

  button1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#14c871',
    color: '#fff',
  },

  buttonImage: {
    width: 32,
    height: 32,
    marginLeft: 7,
    backgroundColor: '#fff',
  },

  buttonText: {
    fontSize: 16,
    textAlign: "center",
    flex: 1,
  },

  buttonText1: {
    fontSize: 16,
    textAlign: "center",
    flex: 1,
    color: '#fff',
  },

  topBar: {
    width: "100%",
    height: 50,
    backgroundColor: "#d3d3d3",
    marginBottom: 100,
  },
});