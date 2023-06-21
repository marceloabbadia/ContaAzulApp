import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/screens/login";
import Vendas from "./src/screens/vendas";
import Financeiro from "./src/screens/financeiro";
import Cadastro from "./src/screens/cadastro";
export default function App() {
  return (
    <>
      <Cadastro />
      {/* <Financeiro /> */}
      {/* <Vendas /> */}
      {/* <Login /> */}
      <StatusBar style="auto" />
    </>
  );
}
