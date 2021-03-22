import React, { Component } from 'react';
import { Switch, View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
    this.toggleSwitch;
  }

  // const KMToMilesSwitch = (switchValue, setSwitchValue) => {
  //     const toggleSwitch = (value) => {
  //       setSwitchValue(value);
  //     };}

  KMToMilesSwitch(value, setSwitchValue) {
    this.toggleSwitch = (value) => {
      setSwitchValue(value);
    };
  }

  render() {
    return (
      <SafeAreaView>
        <Text style={styles.toggleText}>{switchValue ? 'MILES' : 'KM'}</Text>
        <View style={styles.container}>
          <Switch
            ios_backgroundColor="lightsteelblue"
            trackColor={{ true: 'lightseagreen' }}
            style={styles.switch}
            onValueChange={toggleSwitch}
            value={switchValue}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleText: {
    color: '#311844',
    fontFamily: 'Futura',
    textAlign: 'center',
    color: 'black',
    padding: 5,
  },
  switch: {
    marginTop: 30,
  },
});
