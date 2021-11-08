import { View, Text, Dimensions ,TextInput, TouchableOpacity} from 'react-native';
import React from 'react'
import {Picker} from '@react-native-picker/picker';
const  {height, width} = Dimensions.get("window");



export default class sendinglv extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           game: props.route.params.game,
           score: props.route.params.score,
           team: props.route.params.team
        }
    }
    render() {
        return (
            <View>
                <Text style= {{textAlign: 'center', top: 90, fontSize: 25, fontWeight: '900'}}>Atsāciet to, ko izvēlējāties : </Text>
                <Text style= {{textAlign: 'center', top: 100, fontSize: 25}}>Spēle : {this.state.game == "" ? "Elvin Assin" : this.state.game}</Text>
                <Text style= {{textAlign: 'center', top: 110, fontSize: 25}}>Rezultāts : {this.state.score}</Text>
                <Text style= {{textAlign: 'center', top: 120, fontSize: 25}}>Komandas nosaukums : {this.state.team}</Text>
                <TouchableOpacity style= {{top: 250, borderColor: 'black',
            borderWidth: 1, width: width/1.5, left: width/6}}>
                    {/* onPress={() => this.props.navigation.navigate('sending', {team: this.state.team, game: this.state.game, score: this.state.score})}> */}
                    <View>
                        <Text style={{textAlign: "center"}}>Datu sūtīšana uz API</Text>
                    </View>
                </TouchableOpacity>
                <Text style = {{fontWeight: "900", textAlign: 'center', top :265, color: 'red'}}>Vēl nav API</Text>
            <View style= {{top: 475, flexDirection: 'row', justifyContent: 'center'}}>
                <View style= {{height: 7, width: 7, borderRadius: 50, right: 5, top: 5,backgroundColor: 'black'}}></View>
                <View style= {{height: 7, width: 7, borderRadius: 50, top: 5, backgroundColor: 'black'}}></View>
                <View style= {{height: 7, width: 7, borderRadius: 50, right: -4, top: 5,  backgroundColor: 'black'}}></View>
                <View style= {{height: 15, width: 15, borderRadius: 50 , left: 8, backgroundColor: 'black'}}></View>
            </View>
            </View>
        )
    }
}