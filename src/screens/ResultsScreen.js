import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ResultsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Results Screen</Text>
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

export default ResultsScreen;
