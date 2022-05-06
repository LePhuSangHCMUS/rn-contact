/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { NativeModules } from 'react-native';
const networkDebugger = () => {
 //Enable Default Debuggerr
  // NativeModules.DevSettings.setIsDebuggingRemotely(true);




 //Enable Inspect Network
  global.XMLHttpRequest = global.originalXMLHttpRequest
  ? global.originalXMLHttpRequest
  : global.XMLHttpRequest;
global.FormData = global.originalFormData
  ? global.originalFormData
  : global.FormData;

fetch; // Ensure to get the lazy property

if (window.__FETCH_SUPPORT__) {
  // it's RNDebugger only to have
  window.__FETCH_SUPPORT__.blob = false;
} else {
  /*
   * Set __FETCH_SUPPORT__ to false is just work for `fetch`.
   * If you're using another way you can just use the native Blob and remove the `else` statement
   */
  global.Blob = global.originalBlob ? global.originalBlob : global.Blob;
  global.FileReader = global.originalFileReader
    ? global.originalFileReader
    : global.FileReader;
}
}
import {GlobalProvider} from "./src/context/Provider"
import AppNavigationContainer from "./src/navigations";


__DEV__?networkDebugger():null
const App = () => {

  return (<GlobalProvider><AppNavigationContainer/></GlobalProvider> );
};


export default App;
