import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {StyleSheet, View} from 'react-native';
import Chip from './Chip';
import * as Colors from 'values/Colors';

/*
*    AUTHOR : Lakshay
    ChipContainer is used as layout to containers multiple chips, chips will be add in horizontal format
    and will auto wrap when its text length is max than screen width.

    almost all Mandatory and options props are mentioned in PropTypes.

    Dependencies :
    id : to identify the chip containers, eg. if there are more than 1 chip container.
         In that case you can send chip container ID and get it back when onClick any chip.


*/
export default class ChipContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: -1
    };

    this.savedChips = new Array();
  }

  static propTypes = {
    //Mandatory Props
    onPress: PropTypes.func.isRequired,
    dataSource: PropTypes.array.isRequired,

    //Optional Props
    chipTextColorDefault: PropTypes.oneOfType([
      PropTypes.strings,
      PropTypes.func
    ]),
    chipTextColorSelected: PropTypes.oneOfType([
      PropTypes.strings,
      PropTypes.func
    ]),
    chipTextAlign: PropTypes.oneOfType([PropTypes.strings, PropTypes.func]),
    chipBorderColor: PropTypes.oneOfType([PropTypes.strings, PropTypes.func]),
    chipColorDefault: PropTypes.oneOfType([PropTypes.strings, PropTypes.func]),
    chipColorSelected: PropTypes.oneOfType([PropTypes.strings, PropTypes.func]),
    gridMarginTop: PropTypes.number,
    isMultiSelectionEnabled: PropTypes.bool,
    setSelection: PropTypes.object
  };

  static defaultProps = {
    background: Colors.WHITE,
    chipTextColorDefault: Colors.CHIP_TEXT_COLOR_DEFAULT,
    chipTextColorSelected: Colors.CHIP_TEXT_COLOR_SELECTED,
    chipTextAlign: "left",
    chipBorderColor: Colors.CHIP_BORDER_COLOR,
    chipColorDefault: Colors.CHIP_DEFAULT_COLOR,
    chipColorSelected: Colors.CHIP_SELECTED_COLOR,
    isMultiSelectionEnabled: false
  };
  onChipPressed(id, data) {
    var position = id;
    if (this.props.isMultiSelectionEnabled) {
      if (this.savedChips.includes(data)) {
        this.savedChips.splice(this.savedChips.indexOf(data), 1);
        return;
      }
      this.savedChips.push(data);
    } else {
      if (this.savedChips.includes(data)) {
        this.savedChips.length = 0;
        position = -1;
      } else {
        this.savedChips.length = 0;
        this.savedChips.push(data);
      }
      this.setState({ position });
      this.props.onPress(this.props.id, this.getSelectedChips());
    }
  }

  componentWillMount() {
    if (this.props.setSelection) {
      this.setState({ position: this.props.setSelection.position });
      if (this.savedChips.includes(this.props.setSelection.data)) {
        this.savedChips.length = 0;
      } else {
        this.savedChips.length = 0;
        this.savedChips.push(this.props.setSelection.data);
      }
    }
  }

  render() {
    return (
      <View
        style={[
          styles.root,
          {
            backgroundColor: this.props.background
          }
        ]}
      >
        {this.createChipGrid()}
      </View>
    );
  }

  createChipGrid() {
    var chipGrid = [];
    this.default = false;

    for (let i = 0; i < this.props.dataSource.length; i++) {
      if (!this.props.isMultiSelectionEnabled) {
        if (this.state.position == i) {
          this.default = true;
        } else {
          this.default = false;
        }
      }
      chipGrid.push(
        <Chip
          key={i}
          id={i}
          isMultiSelectionEnabled={this.props.isMultiSelectionEnabled}
          defaultState={this.default}
          data={this.props.dataSource[i]}
          chipTextColorDefault={this.props.chipTextColorDefault}
          chipTextColorSelected={this.props.chipTextColorSelected}
          chipTextAlign={this.props.chipTextAlign}
          chipBorderColor={this.props.chipBorderColor}
          chipColorDefault={this.props.chipColorDefault}
          chipColorSelected={this.props.chipColorSelected}
          onPress={this.onChipPressed.bind(this)}
        />
      );
    }
    return chipGrid;
  }

  getSelectedChips() {
    return this.savedChips;
  }

  resetChips() {
    this.setState(
      {
        position: -1
      },
      () => {
        this.savedChips.length = 0;
      }
    );
  }

  setSelected(pos, data) {
    this.setState(
      {
        position: pos
      },
      () => {
        this.savedChips.push(data);
      }
    );
  }

  getTextValue() {
    var value = "";
    if (this.savedChips && this.savedChips.length > 0) {
      this.savedChips.forEach((item, index) => {
        if (index > 0) {
          value += ",";
        }
        value += item;
      });
    }
    return value;
  }

  getDataSource() {
    return this.props.dataSource;
  }
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    paddingHorizontal: 2,
    paddingVertical: 8
  }
});
