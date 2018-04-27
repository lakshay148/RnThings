import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button
} from 'react-native';
import { CheckBox,ChipContainer } from "granulars";
import * as Colors from "values/Colors"
import * as Strings from "values/Strings"

/**
 * Author :
 * Lakshay
 *
 * Description :
 * Contains component with sample form elements with their frequently used props
 *
 */
class SimpleForm extends Component {

    static navigationOptions = {
        title : "My Simple Form "
    }

    static defaultProps = {
        onCheckChanged : () => console.log("checkChanged"),
        onChipSelected : () => console.log("onChipSelected"),
        chipData : ['chip1', 'chip2' , 'chip3']
    }

    render(){
        return (<View style={styles.container}>
                    <Text style={styles.textcenter}>Welcome to sample form in RN</Text>
                    <TextInput placeholder="Enter name here"/>
                    <TextInput placeholder="Enter email id "/>
                    <View style={{flexDirection : 'row',alignItems:'center',marginTop : 5}}>
                        <CheckBox onValueChange={this.props.onCheckChanged}/>
                        <Text>My checkbox title</Text>
                    </View>
                    <ChipContainer
                        onPress={this.props.onChipSelected}
                        dataSource={this.props.chipData}/>
                    <View style={styles.buttonStyle}>
                        <Button
                            onPress={()=>console.log("button press")}
                            style={styles.center}
                            title="Submit"/>
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
        fontWeight : 'bold',
        color : Colors.APP_COLOR
    },
    container : {
        padding : 10,
        backgroundColor: Colors.WHITE,
        flex:1,
    },
    buttonStyle : {
        marginTop : 50
    }
})
export default SimpleForm;