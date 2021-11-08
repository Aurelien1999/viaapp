import { View, Text, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import React from 'react'
import YoutubePlayer from 'react-native-youtube-iframe';
const  {height, width} = Dimensions.get("window");

export default class tutolv extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          team: ''
        };
      }
      handleTeam = (text) => {
        this.setState({ team: text })
     }
    render() {
        return (
            <View>
                <Text style= {{textAlign: 'center', marginTop: 30, fontSize: 20, fontWeight: '900'}}>Welcome</Text>
            <View style= {{position: 'absolute', top: 100, left: 5}}>
            <YoutubePlayer
                height={height/2}
                width={width-10}
                play={true}
                videoId={'dQw4w9WgXcQ'}
                />
            </View>
            <View  style = {{top : height/ 2}}>
            <TextInput 
            style= {{borderColor: 'black',
            borderWidth: 1, width: width/1.5, left: width/6}}
                underlineColorAndroid = "transparent"
                placeholder = "Choose your team name"
                placeholderTextColor = "#black"
                autoCapitalize = "none"
                onChangeText = {this.handleTeam}/>
             <TouchableOpacity style= {{top: 10, borderColor: 'black',
            borderWidth: 1, width: width/1.5, left: width/6}} onPress={() => this.props.navigation.navigate('score', {team: this.state.team})}>
                <View>
                    <Text style={{textAlign: "center"}}>Continue</Text>
                </View>
            </TouchableOpacity>
            </View>
            <View style= {{top: 525, flexDirection: 'row', justifyContent: 'center'}}>
                    <View style= {{height: 7, width: 7, borderRadius: 50, right: 10, top: 5,backgroundColor: 'black'}}></View>
                    <View style= {{height: 15, width: 15, borderRadius: 50, right: 5, backgroundColor: 'black'}}></View>
                    <View style= {{height: 7, width: 7, borderRadius: 50, top: 5, backgroundColor: 'black'}}></View>
                    <View style= {{height: 7, width: 7, borderRadius: 50, right: -5, top: 5,  backgroundColor: 'black'}}></View>
            </View>
            </View>
        )
    }
}
