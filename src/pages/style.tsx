import { Platform, StyleSheet } from "react-native";

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
    backgroundColor: "#02AFEF",
  },
  image: {
    width: 260,
  },
  downBackground: {
    backgroundColor: "#F1F4F8",
  },
  squareContainer: {
    position: "absolute",
    width: "95%",
    height: 200,
    alignSelf: "center",
    top: "50%",
    marginTop: -50,
    overflow: "hidden",
  },
  square: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  squareBorderTop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: "#47C1EE",
  },
  squareBorderRight: {
    position: "absolute",
    top: 0,
    bottom: "75%",
    right: 0,
    width: 3,
    backgroundColor: "#47C1EE",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  squareBorderBottom: {
    position: "absolute",
    border: "none",
  },
  squareBorderLeft: {
    position: "absolute",
    top: 0,
    bottom: "75%",
    left: 0,
    width: 3,
    backgroundColor: "#47C1EE",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
export default styles;
