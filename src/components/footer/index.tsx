import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import { Foundation } from "@expo/vector-icons";

const Footer = () => {
  const handleButtonPress = () => {};

  return (
    <View style={styles.footer}>
      <View style={styles.add}>
        <TouchableOpacity onPress={handleButtonPress}>
          <AntDesign name="pluscircle" size={60} color="#1A69C7" />
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <View style={styles.home}>
          <TouchableOpacity onPress={handleButtonPress}>
            <AntDesign name="home" size={26} color="#1A69C7" />
            <Text style={styles.begin}>Início</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.document1}>
          <TouchableOpacity onPress={handleButtonPress}>
            <Ionicons
              name="ios-document-text-sharp"
              size={26}
              color="#1A69C7"
            />
            <Text style={styles.sales}>Vendas</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dollar}>
          <TouchableOpacity onPress={handleButtonPress}>
            <Foundation name="dollar" size={30} color="#1A69C7" />
            <Text style={styles.financial}>Financeiro</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.document2}>
          <TouchableOpacity onPress={handleButtonPress}>
            <Ionicons name="document-text-outline" size={26} color="#1A69C7" />
            <Text style={styles.register}>Cadastros</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Footer;
