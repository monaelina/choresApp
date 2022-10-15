import 'react-native-gesture-handler';
import React from 'react';
import {
  Button, 
  View,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Adult1 from './screens/Adult1';
import Child1 from './screens/Child1'; 
import FirstPage from './screens/FirstPage';
import Adult2 from './screens/Adult2';
import Child2 from './screens/Child2';
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
          name="Home"
          component={FirstPage}
 //         options={{
 //           title: 'First Page', //Set Header Title
 //           headerStyle: {
 //             backgroundColor: '#f4511e', //Set Header color
 //           },
 //           headerTintColor: '#fff', //Set Header text color
 //           headerTitleStyle: {
 //             fontWeight: 'bold', //Set Header text style
 //           },
 //         }}
        />
        <Stack.Screen
          name="Adult1"
          component={Adult1}
          options={{
            title: 'Adult view', //Set Header Title
            headerStyle: {
              backgroundColor: 'lightpink', //Set Header color
            },
            headerTintColor: 'darkgreen', //Set Header text color #fff white
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Child1"
          component={Child1}
          options={{
            title: 'Child view', //Set Header Title
            headerStyle: {
              backgroundColor: 'lightpink', //Set Header color
            },
            headerTintColor: 'darkgreen', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Adult2"
          component={Adult2}
          options={{
            title: 'Adult view', //Set Header Title
            headerStyle: {
              backgroundColor: 'lightpink', //Set Header color
            },
            headerTintColor: 'darkgreen', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Child2"
          component={Child2}
          options={{
            title: 'Child view', //Set Header Title
            headerStyle: {
              backgroundColor: 'lightpink', //Set Header color
            },
            headerTintColor: 'darkgreen', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;