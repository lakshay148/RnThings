import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Colors from "values/Colors";

/*
*    AUTHOR :
*    Lakshay
*
*/

export default class CheckBox extends Component {

  static defaultProps = {
    checkColor: Colors.DEFAULT_SECONDARY_COLOR,
    uncheckColor: Colors.BLACK_OPACITY_54,
    disabledColor: Colors.BLACK_OPACITY_25
  }

  render() {
    return (
      <Icon
        style={[
          {
            padding: 4
          },
          this.props.boxStyle
        ]}
        color={this.getCheckIconColor()}
        name={this.props.value
          ? 'check-box'
          : 'check-box-outline-blank'}
        size={24}
        onPress={this.onValueChange.bind(this)}/>
    );
  }

  onValueChange() {
    if (!this.props.disabled && this.props.onValueChange) {
      this.props.onValueChange(!this.props.value);
    }
  }

  getCheckIconColor() {
    if (!this.props.disabled) {
      return this.props.value
        ? this.props.checkColor
        : this.props.uncheckColor;
    }
    return this.props.disabledColor;
  }
}
