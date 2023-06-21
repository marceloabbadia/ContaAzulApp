import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    height: 110,
  },
  footerText: {
    fontSize: 16,
  },
  add: {
    bottom: 25,
  },
  main: {
    flex: 1,
    flexDirection: "row",
    width: "105%",
    justifyContent: "space-around",
    bottom: 50,
  },
  home: {
    left: 8,
  },

  begin: {
    color: "#1A69C7",
    left: -2,
    fontWeight: "400",
    fontSize: 13,
    bottom: -5,
  },
  sales: {
    fontSize: 13,
    color: "#1A69C7",
    left: -12,
    fontWeight: "400",
    bottom: -3,
  },
  document1: {
    left: 7,
  },
  dollar: {
    left: 58,
  },
  financial: {
    fontSize: 13,
    color: "#1A69C7",
    left: -28,
    fontWeight: "400",
  },
  document2: {
    left: 24,
  },
  register: {
    fontSize: 13,
    color: "#1A69C7",
    left: -18,
    fontWeight: "400",
    top: 2,
  },
});

export default styles;
