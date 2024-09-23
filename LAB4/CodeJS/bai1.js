import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.circle}></View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>GROW YOUR BUSINESS</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>We will help you to grow your business using online server</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCF9',
  },
  circleContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 9,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    backgroundColor: '#00CCF9',
    fontWeight: '700',
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    fontWeight: '700',
  },
});