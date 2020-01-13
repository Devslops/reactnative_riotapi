import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ChampionDetail from './Components/ChampionDetail'
import ItemsScreen from '../Items/ItemsScreen'
import ItemsDetail from '../Items/components/ItemsDetail'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


class ChampionsScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
           champions: []
        }
      }

    async componentDidMount() { 
        //Récupérations de tous les champions
        let response = await fetch(
            "http://ddragon.leagueoflegends.com/cdn/10.1.1/data/fr_FR/champion.json",
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            }
        )
    
        let champions = await response.json();
        
        this.setState({champions: Object.values(champions.data)})
    }

    render() {
        return(
            <ScrollView>
                <View style={styles.container}>
                {
                    this.state.champions.map((champion, index, array) => {
                        return (
                            <ChampionDetail key={champion.id} champion={champion} navigation={this.props.navigation}/>                 
                        )
                    })
                }
                </View>              
            </ScrollView>
            
        );
    }
}

const ChampionStack = createStackNavigator({
    Champions: ChampionsScreen,
    ChampionDetail: ChampionDetail
  });
  
  const SettingsStack = createStackNavigator({
    ItemsScreen: ItemsScreen,
    ItemsDetail: ItemsDetail
  });
  
  const DashBoard = createAppContainer(
    createBottomTabNavigator(
      {
        ItemsScreen: ChampionStack,
        ItemsDetail: SettingsStack,
      }
    )
  );

export default ChampionsScreen


const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: 'row',
        flexWrap: "wrap",
        marginTop: 50,
        backgroundColor: "#222831"
    }
})