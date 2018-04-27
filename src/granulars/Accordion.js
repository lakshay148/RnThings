'use strict';

import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {TouchableHighlight, View, Animated, Easing} from 'react-native';
import {Colors} from '@flavor/themeConfig';

class Accordion extends Component {
  static propTypes = {
    activeOpacity: PropTypes.number,
    animationDuration: PropTypes.number,
    content: PropTypes.element.isRequired,
    easing: PropTypes.func,
    expanded: PropTypes.bool,
    header: PropTypes.element.isRequired,
    onPress: PropTypes.func,
    underlayColor: PropTypes.string,
    style: PropTypes.object
  }

  static defaultProps = {
    activeOpacity: 1,
    animationDuration: 300,
    easing: Easing.linear,
    expanded: false,
    underlayColor: Colors.LIGHT_GRAY,
    style: {},
    iconMarginRight: 10
  }

  constructor(props) {
    super(props);
    var height = new Animated.Value(0)
    height.setValue(
      this.props.expanded
        ? this.props.content_height
        : 0
    );
    this.state = {
      is_visible: this.props.expanded,
      height,
      animatedValue: new Animated.Value(
        this.props.expanded
          ? 1
          : 0
      )
    };
  }

  close() {
    this.state.is_visible && this.toggle();
  }

  open() {
    !this.state.is_visible && this.toggle();
  }

  toggle() {
    this.state.is_visible = !this.state.is_visible;
    Animated.timing(this.state.height, {
      toValue: this.state.is_visible
        ? this.props.content_height
        : 0,
      duration: this.props.animationDuration,
      easing: this.props.easing
    }).start();

    Animated.timing(this.state.animatedValue, {
      toValue: this.state.is_visible
        ? 1
        : 0,
      duration: this.props.animationDuration,
      easing: this.props.easing
    }).start();

    if (this.props.animate) {
      this.props.animate(
        this.state.is_visible
          ? 1
          : 0
      );
    }
  }

  _onPress() {
    this.toggle();

    if (this.props.onPress) {
      this.props.onPress(
        this.state.is_visible
          ? this
          : null
      );
    }
  }

  _getContentHeight(event) {
    if (!this.state.height) {
      this.state.height = new Animated.Value(0);
    }
  }

  getDropArrow() {
    if (this.props.showDropArrow) {
      const spin = this.state.animatedValue.interpolate({
        inputRange: [
          0, 1
        ],
        outputRange: ['0deg', '90deg']
      });
      return (
        <Animated.Image
          style={{
            alignSelf: 'center',
            transform: [
              {
                rotate: spin
              }
            ],
            marginRight: this.props.iconMarginRight
          }}
          source={require("@images/ic_arrow.png")}/>
      );
    }
  }

  render() {
    return (
      /*jshint ignore:start */
      <View style={{
          overflow: 'hidden'
        }}>
        <TouchableHighlight
          ref="AccordionHeader"
          onPress={this._onPress.bind(this)}
          underlayColor={this.props.underlayColor}
          style={this.props.style}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
            {this.props.header}
            {this.getDropArrow()}
          </View>
        </TouchableHighlight>
        <Animated.View
          ref="AccordionContentWrapper"
          onLayout={(event) => this._getContentHeight(event)}
          style={{
            height: this.state.height
          }}>
          <View ref="AccordionContent">
            {this.props.content}
          </View>
        </Animated.View>
      </View>
      /*jshint ignore:end */
    );
  }
}

module.exports = Accordion;
