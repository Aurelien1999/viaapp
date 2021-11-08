import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';
import fscreen from './component/fscreen'
import tuto from './component/tuto'
import tutolv from './component/tutolv'
import scorelv from './component/scorelv'
import score from './component/score'
import sending from './component/sending'
import sendinglv from './component/sendinglv'
const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <StatusBar hidden/>
     <Stack.Navigator initialRouteName="fscreen">
     <Stack.Screen options={{headerShown: false}} name="fscreen" component={fscreen} />
     <Stack.Screen options={{headerShown: false}} name="tuto" component={tuto} />
     <Stack.Screen options={{headerShown: false}} name="tutolv" component={tutolv} />
     <Stack.Screen options={{headerShown: false}} name="scorelv" component={scorelv} />
     <Stack.Screen options={{headerShown: false}} name="score" component={score} />
     <Stack.Screen options={{headerShown: false}} name="sending" component={sending} />
     <Stack.Screen options={{headerShown: false}} name="sendinglv" component={sendinglv} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
