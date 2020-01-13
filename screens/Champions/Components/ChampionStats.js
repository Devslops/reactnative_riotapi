import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { } from 'react-navigation'

import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { ScrollView } from "react-native-gesture-handler";

class ChampionStats extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            tableHeadStart: ['Statistiques de départ'],
            tableTitleStart: ['Vie', 'Mp', 'Vitesse', 'Armure', 'SpellBk', 'Portée', 'Régen', 'Mp Régen', 'Crit', 'Dégâts', 'V atq'],
            tableDataStart: [],
            tableHeadLvl: ['Statistiques par niveau'],
            tableTitleLvl: ['Vie', 'Mp', 'Armure', 'SpellBk', 'Régen', 'Mp Régen', 'Crit', 'Dégâts', 'V atq'],
            tableDataLvl: [],
            champion: {}
          }
      }

      componentDidMount() {
          let champion = this.props.navigation.getParam('champion', 'NO-ID');

          //Champion sélectionné
          this.setState({champion: champion});
        
          //Initialisation tableau Stats champion
          let dataTableValuesStart = []; //Stats champion à ajouter au state
          let dataTableValuesLvl = []; //Stats champion à ajouter au state

          //Récupération des stats de départ (hors stats par lvl)
          Object.values(champion.stats).map((stat, index, array) => {
            if(!Object.keys(champion.stats)[index].includes('level')) { //Ne pas récup les stats par level
                let valueStart = [];
                valueStart.push(stat)
                dataTableValuesStart.push(valueStart)
            } else {
                let valueLvl = [];
                valueLvl.push(stat)
                dataTableValuesLvl.push(valueLvl)
            }  
          })
          this.setState({tableDataStart:dataTableValuesStart});
          this.setState({tableDataLvl:dataTableValuesLvl});
      }
    
    render() {
        let champion = this.props.navigation.getParam('champion', 'NO-ID');
        return(
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={{uri: 'http://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/'+champion.id+'.png'}}/>   
                        <Text style={styles.logoText}>{champion.name}</Text>
                    </View>
                    <View style={styles.typeContainer}>           
                            {
                                champion.tags.map((tag, index, array) => {
                                    return (
                                        <View style={styles.type} key={index}> 
                                            <Text style={styles.typeText}>{tag}</Text>   
                                        </View>
                                    )                               
                                })
                            }
                    </View>
                </View>
                <View style={styles.stats}>
                    <Table borderStyle={{borderWidth: 1}}>
                        <Row data={this.state.tableHeadStart} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/>
                        <TableWrapper style={styles.wrapper}>
                            <Col data={this.state.tableTitleStart} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
                            <Rows data={this.state.tableDataStart} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
                        </TableWrapper>
                    </Table>
                </View>
                <View style={styles.stats}>
                    <Table borderStyle={{borderWidth: 1}}>
                        <Row data={this.state.tableHeadLvl} flexArr={[1, 2, 1, 1]} style={styles.head} textStyle={styles.text}/>
                        <TableWrapper style={styles.wrapper}>
                            <Col data={this.state.tableTitleLvl} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
                            <Rows data={this.state.tableDataLvl} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
                        </TableWrapper>
                    </Table>
                </View>
               
            </ScrollView>              
        );
    }
}

export default ChampionStats;

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        flex: 4, 
        flexDirection: 'column',
        paddingTop: 15,
        backgroundColor: "#393e46"
    },    
    header: {
        marginBottom: 15,
        flex: 1, 
        flexDirection: 'row',
        paddingTop: 15,
        backgroundColor: "#393e46"
    },
    name: {
      fontSize: 10,
      color:"#eeeeee"
    },
    typeContainer: {
        width: 200,
        height: 30,
        flex: 1, 
        flexDirection: 'row',
        marginLeft: 5,
        flex: 1
    },
    type: {
        backgroundColor: "#3282b8",
        maxWidth: 150,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        padding: 5
    },
    typeText: {
        color: "#393e46"
    },
    logoContainer: {
        marginLeft: 15,
        color:"white"
    },
    logo: {
        width: 100, 
        height: 100,
        borderWidth: 1,
        borderColor: "#ffb677"
    },
    logoText: {
        color: "#eeeeee"
    },
    stats: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#f9f7f7' },
    head: {  height: 40,  backgroundColor: '#dbe2ef'  },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#dbe2ef' },
    row: {  height: 28  },
    text: { textAlign: 'center'}
})