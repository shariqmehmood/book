// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Books from './src/form/Books';
// import Signin from './src/signin';
// import Signup from './src/signup';

// export default function App() {
//   return (
    
//     <Books/>
//   );
// }




import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from "./src/signup"
import Books from './src/form/Books';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Signup} />
        <Stack.Screen name="FreeBook" component={Books} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;