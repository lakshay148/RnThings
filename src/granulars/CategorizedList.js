import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import * as Colors from 'values/Colors'
import * as Constants from 'values/Constants'

/**    AUTHOR :
*      Lakshay
*
 *   Description :
 *   Component to show list items basis on 2 views style => header and list item
 *
*    CUSTOMIZABLE ITEMS :
*
*    DEPENDENCY :
*
*
*/

class CategorizedList extends Component {


    static defaultProps = {
        // data : [{
        //     type : "header",
        //     text : "Develop",
        // },{
        //     type : "ListItem",
        //     text : "ReactNavigation",
        //     content : "leaf"
        // },{
        //     type : "ListItem",
        //     text : "Redux",
        //     content : "leaf"
        // },{
        //     type : "header",
        //     text : "Config & Analysis",
        // },{
        //     type : "ListItem",
        //     content : "node",
        //     text : "Firebase",
        //     id : 101
        // }, {
        //     type : "header",
        //     text : "Deployment",
        // },{
        //     type : "ListItem",
        //     text : "AppCenter/CodePush",
        //     content : "node"
        // }]
    }

    renderRow(item){
        if(item.type == Constants.ITEM_TYPE_HEADER){
            return (<View key={item.text} style={styles.header}>
                <Text style={styles.headerText}>{item.text}</Text>
            </View>)
        } else if ( item.type == Constants.ITEM_TYPE_LIST_ITEM){
            return (<View key={item.text} style={styles.listItem}>
                <TouchableHighlight underlayColor={Colors.LIGHT_GRAY} onPress={this.onClick.bind(this, item.text)}>
                    <Text>{item.text}</Text>
                </TouchableHighlight>
            </View>)
        }
    }

    onClick(name){
        this.props.onClick(name);
    }

    renderList(){
        return this.props.data.map((item)=>this.renderRow(item));
    }

    render(){
        return (<View>
            {this.renderList()}
        </View>);
    }
}

const styles = StyleSheet.create({

    header : {
        backgroundColor : Colors.APP_COLOR,
        padding : 10

    },
    listItem : {
        backgroundColor: Colors.WHITE,
        padding : 10
    },
    headerText : {
        color:Colors.WHITE
    }
})

export default CategorizedList;