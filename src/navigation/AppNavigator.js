import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ResultsScreen from '../screens/ResultsScreen';
import LatinScreen from '../screens/LatinScreen';
import LicensePlateScreen from '../screens/LicensePlateScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
        <Stack.Screen name="Latin" component={LatinScreen} />
        <Stack.Screen name="Vin" component={LicensePlateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
