import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View, Text } from "react-native";
import styles from "./style";
import { Feather } from "@expo/vector-icons";
import Footer from "../footer";

const Financeiro = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.halfContainer, styles.upBackground]}></View>

      <View style={[styles.halfContainer, styles.downBackground]}>
        <View style={styles.containerCaixas}>
          <View style={styles.boxRight}>
            <Text>Direito</Text>
          </View>
          <View>
            <Text style={styles.boxLeft}>esquerdo</Text>
          </View>
        </View>
      </View>
      <Footer />
    </View>
  );
};

export default Financeiro;
