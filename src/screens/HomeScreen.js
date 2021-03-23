import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is the Home Screen</Text>
      <Button
        title="Go to Latin screen"
        onPress={() => navigation.navigate('Latin')}
      />
      <Button
        title="Go to License Plate screen"
        onPress={() => navigation.navigate('Vin')}
      />
      <Button
        title="Go to Spring Onion screen"
        onPress={() => navigation.navigate('Spring Onion')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 100,
  },
});

export default HomeScreen;
