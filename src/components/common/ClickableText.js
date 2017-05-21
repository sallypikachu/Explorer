import React from 'react';
import { Text, View } from 'react-native';

const ClickableText = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.text}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  textStyle: {
    fontSize: 15,
    alignSelf: 'center',
    color: '#007aff'
  }
};

export { ClickableText };
