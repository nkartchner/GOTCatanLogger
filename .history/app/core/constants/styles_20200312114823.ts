import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  landingPageButtons: {
    width: "80%",
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  },
  bgImage: {
    resizeMode: "contain"
  },
  header: {
    textAlign: "center",
    fontSize: 24
  },
  logo: {
    width: 50,
    height: 50
  },
  addBtnTxt: {
    fontSize: 24,
    color: "#fff"
  },
  roundedBtn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginLeft: 25,
    width: 50,
    height: 50
  },
  scrollContainer: {
    padding: 15,
    flex: 1,
    backgroundColor: "beige",
    minHeight: "120%"
  },
  addBtnContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "flex-end",
  },
  flexRowAndCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Styles;
