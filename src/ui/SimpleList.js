import React, { Component } from "react";
import {
    StyleSheet,
    View,
    FlatList,
    Text
} from "react-native";
import {Card} from "react-native-elements"

/**    AUTHOR :
*      Lakshay
*
*    Description :
*    Component describes a sample how a simple list can be created in rn
 *
*    CUSTOMIZABLE ITEMS :
*
*    DEPENDENCY :
*
*
*/

class SimpleList extends Component {

    static navigationOptions = {
        title : "My Simple List"
    }

    static defaultProps = {
        listData : [{
            key : '1',
            text : 'RnThings'
        },{
            key : '2',
            text : 'Another Item in list'
        },{
            key : '3',
            text : 'Here goes third item'
        }]
    }

    renderListItem(item){
        return (
            <Card>
                <Text>{item.text}</Text>
            </Card>);
    }

    render(){
        return (<View>
            <FlatList
                data={this.props.listData}
                renderItem={({item})=>this.renderListItem(item)}
                />
        </View>);
    }
}

const styles = StyleSheet.create({

})

export default SimpleList;