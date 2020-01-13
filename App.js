import React, { Component } from 'react';
import { StyleSheet, Text, View, Settings } from 'react-native';

import ChampionScreen from './screens/Champions/ChampionsScreen'
import SettingsScreen from './screens/SettingsScreen'
import ChampionStats from './screens/Champions/Components/ChampionStats'

import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      token: "RGAPI-05d35bc7-c309-49e8-b633-e368a0518080"
    }
  }

  
  render() {
    return (
        <AppContainer />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  champions: {
    screen: ChampionScreen,
    navigationOptions: {
      title: 'Liste des champions v10.1.1'
    }
  },
  championsStats: {
    screen: ChampionStats,
    navigationOptions: {
      title: 'Statistiques des champions'
    }
  }
})

const AppContainer = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});