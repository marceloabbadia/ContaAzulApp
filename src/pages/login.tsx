import React from "react";
import { Image, View } from "react-native";
import styles from "./style";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.halfContainer, styles.upBackground]}>
        <Image
          source={require("../assets/logotipo.png")}
          style={styles.image}
        />
      </View>

      <View style={[styles.halfContainer, styles.downBackground]} />

      <View style={styles.squareContainer}>
        <View style={styles.square} />
        <View style={styles.squareBorderTop} />
        <View style={styles.squareBorderRight} />
        <View style={styles.squareBorderBottom} />
        <View style={styles.squareBorderLeft} />
      </View>
    </View>
  );
};

export default Login;
