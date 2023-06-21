import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  halfContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  upBackground: {
    flex: 2,
    backgroundColor: "#02AFEF",
  },
  downBackground: {
    flex: 8,
    backgroundColor: "#F1F4F8",
  },
  containerCaixas: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  boxLeft: {
    width: 175,
    height: 125,
    backgroundColor: "#FFFFFF",
  },
  boxRight: {
    width: 175,
    height: 125,
    backgroundColor: "#FFFFFF",
  },
});

export default styles;
