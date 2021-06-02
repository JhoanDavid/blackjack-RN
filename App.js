import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './configureStore'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login/login.view'
import Signup from './components/register/Signup.view'
import Profile from './components/Profile/Profile.view'
import Game from './components/Game/game.view';
import Instruction from './components/Instructions/instruction.view';
import EndGame from './components/EndGame/end-game.view';

let store=configureStore();
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer >
          <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Game" component={Game}/>
            <Stack.Screen name="Instructions" component={Instruction}/>
            <Stack.Screen name="EndGame" component={EndGame}/>
          </Stack.Navigator>
      </NavigationContainer>
  </Provider>
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

/*<Stack.Screen name="Game" component={Game} />
            <Stack.Screen name="Instructions" component={Instructions} /> */