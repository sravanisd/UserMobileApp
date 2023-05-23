/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserSignIn from "./src/screens/UserSignIn";
import UserRegister from "./src/screens/UserRegister";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createNativeStackNavigator();
function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UserSignIn" component={UserSignIn} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={UserRegister} options={{ headerShown: true }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;