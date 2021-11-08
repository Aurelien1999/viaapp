import { View, Text, Dimensions ,TextInput, TouchableOpacity} from 'react-native';
import React from 'react'
import {Picker} from '@react-native-picker/picker';
const  {height, width} = Dimensions.get("window");



export default class scorelv extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           game: "",
           score: "",
           team: props.route.params.team
        }
    }
    handleScore = (text) => {
        this.setState({ score: text })
     }
    render() {
        return (
            <View>
                <Text style = {{textAlign: 'center', fontSize: 25, fontWeight: "900", top :40}}>Laipni lūdzam komanda {this.props.route.params.team}</Text>
                <Picker
                    selectedValue={this.state.game}
                    style={{position:'relative', height: 20, width: "100%", color: "darkgray"}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({game: itemValue})
                    }>
                    <Picker.Item label="Elven Assin" value="Elven Assin" />
                    <Picker.Item label="Mini Golf" value="Mini Golf" />
                </Picker>
                <TextInput 
                    style= {{borderColor: 'black',
                    borderWidth: 1, width: width/1.5, left: width/6, top : 200}}
                    underlineColorAndroid = "transparent"
                    placeholder = "Ievadiet savu rezultātu"
                    placeholderTextColor = "#black"
                    autoCapitalize = "none"
                    onChangeText = {this.handleScore}/>
                 <TouchableOpacity style= {{top: 250, borderColor: 'black',
            borderWidth: 1, width: width/1.5, left: width/6}} onPress={() => this.props.navigation.navigate('sendinglv', {team: this.state.team, game: this.state.game, score: this.state.score})}>
                    <View>
                        <Text style={{textAlign: "center"}}>Turpināt</Text>
                    </View>
                </TouchableOpacity>
                <View style= {{top: 500, flexDirection: 'row', justifyContent: 'center'}}>
                    <View style= {{height: 7, width: 7, borderRadius: 50, right: 5, top: 5,backgroundColor: 'black'}}></View>
                    <View style= {{height: 7, width: 7, borderRadius: 50, top: 5, backgroundColor: 'black'}}></View>
                    <View style= {{height: 15, width: 15, borderRadius: 50 , left: 4, backgroundColor: 'black'}}></View>
                    <View style= {{height: 7, width: 7, borderRadius: 50, right: -8, top: 5,  backgroundColor: 'black'}}></View>
            </View>
            </View>
        )
    }
}
