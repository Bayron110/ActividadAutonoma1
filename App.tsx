import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {NavigatorScreen} from './src/Navigator/NavigatorScreem';




export const App = () => {
  return (
    
      <NavigationContainer >
        <NavigatorScreen/>
      </NavigationContainer>
    
  );
};

export default App;
