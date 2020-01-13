import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableHighlight
} from "react-native";
import { } from 'react-navigation'


class ChampionDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.champLogoContainer}>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('championsStats', { champion: this.props.champion, title: 'TEST' })} >
                        <Image style={styles.champLogo} source={{uri: 'http://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/'+this.props.champion.id+'.png'}}/>   
                    </TouchableHighlight>
                </View>
                <Text style={styles.champName}>{this.props.champion.name}</Text>
            </View>              
        );
    }
}

export default ChampionDetail;

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        marginRight: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#222831"
    },
    champName: {
      fontSize: 10,
      color:"#eeeeee"
    },
    champLogoContainer: {
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#ffb677"
    },
    champLogo: {
        borderRadius: 12,
        width: 50, 
        height: 50, 
        justifyContent: 'center'
    }
})