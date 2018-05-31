import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView
} from 'react-native';
import { CategorizedList } from "granulars";
import Toast from 'react-native-simple-toast';
import * as Strings from 'values/Strings';
import CardView from "react-native-cardview";
import * as Colors from "values/Colors"
import firebase from "react-native-firebase"

firebase.crashlytics().log("my test message");
class HomeComponent extends Component {

    static navigationOptions = {
        title: 'React Native Things',
    };

    //content can be soon/node
    static defaultProps = {
        data : [{
            id:"RN_001",
            type : "header",
            text : "Basics",
        },{
            id:"RN_001",
            type : "ListItem",
            text : "ES6",
            content : "soon",
        },{
            id:"RN_001",
            type : "ListItem",
            text : "JSX",
            content : "soon",
        },{
            id:"RN_001",
            type : "ListItem",
            text : "Components",
            content : "soon",
        },{
            id:"RN_001",
            type : "ListItem",
            text : "State/Props",
            content : "soon",
        },{
            id:"RN_001",
            type : "header",
            text : "UI",
        },{
            id:"RN_001",
            type : "ListItem",
            text : "Form Elements",
            content : "leaf",
            navigateTo : "form"
        },{
            id:"RN_001",
            type : "ListItem",
            text : "Handling Images",
            content : "soon",
        },{
            id:"RN_001",
            type : "ListItem",
            text : "List",
            content : "leaf",
            navigateTo : "list"
        },{
            id:"RN_001",
            type : "ListItem",
            text : "Dialogs",
            content : "soon"
        },{
            id:"RN_001",
            type : "header",
            text : "Navigation",
        },{
            id:"RN_001",
            type : "ListItem",
            text : "ReactNavigation",
            content : "soon"
        },{
            id:"RN_001",
            type : "header",
            text : "Networking",
        },{
            id:"RN_001",
            type : "ListItem",
            text : "Fetch",
            content : "soon"
        },{
            id:"RN_001",
            type : "ListItem",
            text : "Axios",
            content : "soon"
        },{
            id:"RN_001",
            type : "header",
            text : "DataStore",
        },{
            id:"RN_001",
            type : "ListItem",
            text : "AsyncStorage",
            content : "soon",
        },{
            id:"RN_001",
            type : "ListItem",
            text : "Redux",
            content : "soon",
        },{
            id:"RN_001",
            type : "ListItem",
            text : "GraphQL",
            content : "soon",

        },{
            id:"RN_001",
            type : "header",
            text : "Integrations",
        },{
            id:"RN_001",
            type : "ListItem",
            text : "Firebase",
            content : "soon",
        },{
            id:"RN_001",
            type : "ListItem",
            text : "Codepush",
            content : "soon",
        },{
            id:"RN_001",
            type : "ListItem",
            text : "Bitrise",
            content : "soon",
        }]
    };

    render(){
        return (<ScrollView style={styles.container}>
            <CardView
                cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={5}>
               <CategorizedList
                   data={this.props.data}
                   onClick={this.onClickItem.bind(this)}/>
            </CardView>
        </ScrollView>)
    }

    onClickItem(item){
        if(item.content === 'soon'){
            Toast.show(item.text + Strings.COMING_SOON )
        } else if (item.content === "node"){
            this.props.navigation.navigate('categories',{ categories : item.categories})
        } else {
            this.props.navigation.navigate(item.navigateTo)
        }
    }

    goToForm(){
        this.props.navigation.navigate('form');
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : Colors.WHITE,
    },
    center : {
        alignItems: "center",
        alignSelf: "center",

    },
    buttonStyle : {
        marginTop : 50
    }
});

export default HomeComponent;

