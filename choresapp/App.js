import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
        />

        <Stack.Screen
          name="Adult1"
          component={Adult1}
          options={{
            title: 'ChoresApp', 
            headerStyle: {
              backgroundColor: 'lightpink', 
            },
            headerTintColor: 'darkgreen', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
        <Stack.Screen
          name="Child1"
          component={Child1}
          options={{
            title: 'ChoresApp', 
            headerStyle: {
              backgroundColor: 'lightpink', 
            },
            headerTintColor: 'darkgreen', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
        <Stack.Screen
          name="Adult2"
          component={Adult2}
          options={{
            title: 'Add task', 
            headerStyle: {
              backgroundColor: 'lightpink', 
            },
            headerTintColor: 'darkgreen', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
        <Stack.Screen
          name="Child2"
          component={Child2}
          options={{
            title: 'Chores to do', 
            headerStyle: {
              backgroundColor: 'lightpink', 
            },
            headerTintColor: 'darkgreen',
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;