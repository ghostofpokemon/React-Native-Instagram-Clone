import React from "react";
import { StyleSheet, Image, View } from "react-native";
import LoginForm from "../components/loginScreen/LoginForm";

const INSTAGRAM_LOGO = require("../assets/instagram-logo.png");

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={INSTAGRAM_LOGO} />
      </View>
      <LoginForm navigation={navigation} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    marginHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  logo: {
    height: 100,
    width: 100,
  },
});
