/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import codePush from "react-native-code-push";
import { StackNavigator } from 'react-navigation';
import { SimpleForm,SimpleList, HomeComponent } from "ui";
import CategoriesComponent from "./src/ui/CategoriesComponent";
import CardStackStyleInterpolator from "react-navigation/src/views/CardStack/CardStackStyleInterpolator"

const myStack = StackNavigator({
    home : { screen : HomeComponent },
    form : { screen: SimpleForm},
    list : { screen : SimpleList },
    categories : { screen : CategoriesComponent},
},{
    transitionConfig: () => ({
        screenInterpolator: (props) => CardStackStyleInterpolator.forHorizontal(props)
    })
});


let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

App = codePush(codePushOptions)(myStack);
export  default  App;
