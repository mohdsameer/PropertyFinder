/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator,} from 'react-navigation';
import SearchPage from './src/SearchPage';
import SearchResults from './src/SearchResults';


const App = StackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults },
});
export default App;
