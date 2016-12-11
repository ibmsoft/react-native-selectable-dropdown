import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Checkbox = require('./checkbox');

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  checkbox:{
    backgroundColor: 'white',
    color:'black',
    borderRadius: 5
  }
});

class Option extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { style, styleText, checkable, checkboxStyle } = this.props;

    if( checkable ){
      return (
        <View style={[ styles.container, style, {'flexDirection':'row'}]}>
          <Checkbox style={[styles.checkbox, checkboxStyle]} />
          <Text style={ styleText }>{this.props.children}</Text>
        </View>
      );
    } else {
      return (
        <View style={[ styles.container, style ]}>
          <Text style={ styleText }>{this.props.children}</Text>
        </View>
      );     
    }
  }
}

Option.propTypes = {
  children: React.PropTypes.string.isRequired,
  checkable : React.PropTypes.boolean
};

module.exports = Option;