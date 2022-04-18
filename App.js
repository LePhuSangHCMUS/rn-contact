/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';

import {GlobalProvider} from "./src/context/Provider"
import AppNavigationContainer from "./src/navigations";
const App = () => {

  return (<GlobalProvider><AppNavigationContainer/></GlobalProvider> );
};


export default App;
