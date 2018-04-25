import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Button
} from 'react-native';
import CategorizedList from "granulars/CategorizedList";
import Toast from 'react-native-simple-toast';
import * as Strings from 'values/Strings';
import CardView from "react-native-cardview";

class HomeComponent extends Component {

    static navigationOptions = {
        title: 'Home',
    };

    static defaultProps = {
        data : [{
            type : "header",
            text : "Develop",
        },{
            type : "ListItem",
            text : "ReactNavigation",
            content : "leaf"
        },{
            type : "ListItem",
            text : "Redux",
            content : "leaf"
        },{
            type : "header",
            text : "Config & Analysis",
        },{
            type : "ListItem",
            content : "node",
            text : "Firebase",
            id : 101
        }, {
            type : "header",
            text : "Deployment",
        },{
            type : "ListItem",
            text : "AppCenter/CodePush",
            content : "node"
        }]
    }

    render(){
        return (<View style={styles.container}>
            <CardView
                cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={5}
            >
               <CategorizedList
                   data={this.props.data}
                   onClick={this.onClickItem.bind(this)}/>
            </CardView>
        </View>)
    }

    onClickItem(itemName){
        Toast.show(Strings.COMING_SOON)
    }

    goToForm(){
        this.props.navigation.navigate('form');
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    center : {
        alignItems: 'center',
        alignSelf: "center",

    },
    buttonStyle : {
        marginTop : 50
    }
})

export default HomeComponent;

