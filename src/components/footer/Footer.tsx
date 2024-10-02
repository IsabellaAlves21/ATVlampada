import React from 'react';
import { View, Text } from 'react-native';
import { FooterStyle } from './FooterStyle';

export default function footer() {
  return (
    <View style={FooterStyle.container}>
      <Text style={FooterStyle.text}>XPTO Softwares</Text>
    </View>
  );
}