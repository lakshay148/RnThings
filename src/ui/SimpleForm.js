import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button
} from 'react-native';

class SimpleForm extends Component {

    render(){
        return (<View style={styles.container}>
            <Text style={styles.textcenter}>Welcome to sample form in RN</Text>
            <TextInput placeholder="Enter name here"/>
            <TextInput placeholder="Enter email id "/>
            <View style={styles.buttonStyle}>
                <Button style={styles.center} title="Submit"/>
            </View>
        </View>)
    }
}

const styles = StyleSheet.create({
    center : {
        alignItems : 'center',
        alignSelf:'center',
    },
    textcenter : {
        alignItems : 'center',
        alignSelf:'center',
        fontSize : 20,
        fontWeight : 'bold'
    },
    container : {
        padding : 10
    },
    buttonStyle : {
        marginTop : 50
    }
})
export default SimpleForm;