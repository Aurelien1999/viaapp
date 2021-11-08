import { View, Button, Text, TouchableHighlight, Image} from 'react-native';
import React from 'react'
import CountryFlag from "react-native-country-flag";

export default class fscreen extends React.Component {
    
    render() {
        return (
            <View>
            <View style= {{marginTop: 20, padding: 20, flexDirection:'row', justifyContent: 'center'}}>
                <Text>Choose your language</Text>
                <Text>   izvēlies savu valodu</Text>
            </View>
            <View style={{marginTop: 30, flexDirection: 'row', justifyContent: 'center'}}>
                    <View style= {{flexDirection: 'column'}}>
                    <Text>English</Text>
                    <TouchableHighlight style= {{left : -20}} onPress={() => this.props.navigation.navigate('tuto')}>
                        <CountryFlag isoCode="gb" size={60} />
                    </TouchableHighlight>
                    </View>
                    <View style= {{flexDirection: 'column'}}>
                    <Text style= {{left: 50}}>Latviski</Text>
                    <TouchableHighlight  style= {{left : 30}} onPress={() => this.props.navigation.navigate('tutolv')}>
                        <CountryFlag isoCode="lv" size={60} />
                    </TouchableHighlight>
                    </View>
                </View>
                <Image 
                    style= {{height: 200, width: 200, left: 100, top: 100}}
                    source={{uri : 'https://www.hicom.fr/wp-content/uploads/2017/09/Logo_TV_2015.png'}}
                />
                <View style= {{top: 230, flexDirection: 'row', justifyContent: 'center'}}>
                    <View style= {{height: 15, width: 15, borderRadius: 50, right: 10, backgroundColor: 'black'}}></View>
                    <View style= {{height: 7, width: 7, borderRadius: 50, right: 5, top: 5, backgroundColor: 'black'}}></View>
                    <View style= {{height: 7, width: 7, borderRadius: 50, top: 5, backgroundColor: 'black'}}></View>
                    <View style= {{height: 7, width: 7, borderRadius: 50, right: -5, top: 5,  backgroundColor: 'black'}}></View>
                </View>
            </View>
        )
    }
}