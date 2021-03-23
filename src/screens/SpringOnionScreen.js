import React from 'react';
import { useState, useFocusEffect } from '@react-navigation/native';
import { StyleSheet, View, Button, Text, TextInput } from 'react-native';
import KMToMilesSwitch from '../components/ToggleSwitch';
import ToggleSwitch from '../components/ToggleSwitchComponent';

const SpringOnionScreen = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <View>
        <Text
          style={styles.aboutButtonText}
          title="About"
          onPress={() => {
            navigation.navigate('Home');
          }}>
          About
        </Text>
      </View>
      <View style={styles.container}>
        <Text
          style={{
            color: '#311844',
            padding: 20,
            fontFamily: 'Futura',
            fontSize: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          How much CO2{'\n'}will your journey{'\n'}release?
          <Text>{'\n'}</Text>
        </Text>
      </View>

      <View
        style={{
          // flex: 1,
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'red',
          // justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: 'purple',
            justifyContent: 'flex-end',
          }}>
          <Text
            style={{
              alignSelf: 'flex-end',
              borderWidth: 1,
              borderColor: 'green',
              color: '#311844',
              fontSize: 20,
              fontFamily: 'Futura',
            }}>
            Licence Plate
          </Text>
        </View>

        <View style={{ flex: 1, borderWidth: 1, borderColor: 'orange' }}>
          <TextInput
            style={{
              fontFamily: 'Futura',
              borderWidth: 1,
              borderColor: '#311844',
              padding: 8,
              margin: 10,
              width: 120,
            }}
            placeholder="e.g. NT08 GBF"
          />
        </View>
      </View>

      <View
        style={{
          borderWidth: 1,
          borderColor: 'blue',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            borderWidth: 1,
            borderColor: 'black',
            justifyContent: 'flex-end',
            // alignSelf: 'flex-end',
          }}>
          {KMToMilesSwitch()}
        </View>
        <View style={{ flex: 1, borderWidth: 1, borderColor: '#666' }}>
          <TextInput
            style={{
              fontFamily: 'Futura',
              borderWidth: 1,
              borderColor: '#311844',
              padding: 8,
              margin: 10,
              width: 120,
            }}
            placeholder="e.g. 50"
          />
        </View>
      </View>

      <Text
        style={styles.buttonText}
        color="orange"
        title="Click Me"
        onPress={() => {}}>
        CALCULATE
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 10,
    backgroundColor: '#f4f4f8',
    fontFamily: 'Bodoni Ornaments',
  },
  container: {
    alignItems: 'center',
  },
  aboutButtonText: {
    color: '#311844',
    textAlign: 'right',
    fontFamily: 'Futura',
    paddingRight: 10,
    paddingTop: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#4F8B3A',
    fontSize: 30,
    padding: 50,
    textAlign: 'center',
    fontFamily: 'Futura',
  },
  input: {
    fontFamily: 'Futura',
    borderWidth: 1,
    borderColor: '#311844',
    padding: 8,
    margin: 10,
    width: 100,
  },
  standardText: {
    color: '#311844',
    fontSize: 20,
    fontFamily: 'Futura',
  },
});

export default SpringOnionScreen;
