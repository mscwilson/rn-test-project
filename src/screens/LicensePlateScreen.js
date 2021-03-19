import React from 'react';
import axios from 'axios';
import { useState, useFocusEffect } from '@react-navigation/native';
import { StyleSheet, View, Button, Text } from 'react-native';
import LicensePlate from '../components/LicensePlate';
import secrets from '../../secrets';

const LicensePlateScreen = () => {
  return (
    <View>
      <Text>On API screen</Text>
      <Text>and from LicensePlate:</Text>
      <LicensePlate vin={'YP12TVY'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  textStyle: {
    fontSize: 18,
    color: 'white',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#f4511e',
    padding: 10,
    marginVertical: 10,
  },
});

export default LicensePlateScreen;
