import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainContainer from './src/navigation/navigator';
import ListTicket from './src/Componen/listTicket/listTicket';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainContainer" component={MainContainer} />
        <Stack.Screen name="ListTicket" component={ListTicket} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;