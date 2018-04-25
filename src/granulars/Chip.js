import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

/*
     AUTHOR : Lakshay
     Dependencies :
     defaultState : default(false) state of chip.
     isMultiSelectionEnabled : you can use chip as checkbox if isMultiSelectionEnabled is false,
                               else you can select multiple chips at a time.
     id : position of chip in chip Container.
     data : used to get details and send details when selection and deselection.
     chipColorSelected : color of chip when selected.
     chipColorDefault : default color of chip.
     chipTextColorSelected : color of text when chip is selected.
     chipTextColorDefault : color of text when chip is not selected.
     chipTextAlign : set gravity of text inside chip. By default its center.
     chipBorderColor : chip border color is black by default, but can be change acc. to theme.
*/

export default class Chip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.defaultState
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.isMultiSelectionEnabled) {
      return true;
    }
    this.state.selected = nextProps.defaultState;
    return true;
  }

  toggleState() {
    this.setState({
      selected: !this.state.selected
    }, () => {
      this.props.onPress(this.props.id, this.props.data);
    });
  }

  render() {
    return (
      <View
        style={[
          styles.root, {
            backgroundColor: this.state.selected
              ? this.props.chipColorSelected
              : this.props.chipColorDefault,
            borderColor: this.state.selected
              ? this.props.chipColorSelected
              : this.props.chipBorderColor
          }
        ]}>
        <TouchableHighlight
          underlayColor='transparent'
          onPress={this.toggleState.bind(this)}>
          <View style={styles.container}>
            <Text
              style={[
                styles.text, {
                  color: this.state.selected
                    ? this.props.chipTextColorSelected
                    : this.props.chipTextColorDefault,
                  textAlign: this.props.chipTextAlign
                }
              ]}
              numberOfLines={1}>{this.props.data}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  root: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    minWidth: 72
  },
  container: {
    padding: 5,
    alignSelf: 'center'
  },
  text: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular'
  }
});
