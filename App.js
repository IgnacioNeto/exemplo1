import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>React Native</Text>
      <Text style={estilos.subtitulo}>
        Trabalhando no desenvolvimento de apps
      </Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    color: "blue",
    fontSize: 32,
  },
  subtitulo: {
    color: "#f00",
    fontSize: 24,
  },
});
