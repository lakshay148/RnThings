import React, { Component } from "react";
import {
    StyleSheet,
    View
} from "react-native";
import { CategorizedList } from "granulars"

/**    AUTHOR :
*      Lakshay
*
*    Description :
*
*    CUSTOMIZABLE ITEMS :
*
*    DEPENDENCY :
*
*
*/

class CategoriesComponent extends Component {

    static navigationOptions = {
        title : "Categories"
    }

    render(){
        return (<View>
            <CategorizedList
                data={this.props.navigation.state.params.categories}
                onClick={this.categorySelected.bind(this)}/>
        </View>);
    }

    categorySelected(category){
        this.props.navigation.navigate(category.navigateTo);
    }
}

const styles = StyleSheet.create({

})

export default CategoriesComponent;