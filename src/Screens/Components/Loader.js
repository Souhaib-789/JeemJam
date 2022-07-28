
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
// import {primaryColor} from './colors';


export const Loading = ({ visible }) => (
  <ActivityIndicator
    animating
    color={'blue'}
    style={visible ? loader.centering : loader.hideIndicator}
    size="large"
  />
);


const loader = StyleSheet.create({
  centering: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    backgroundColor: '#F5F5F5',
    opacity: 0.8,
  },
  hideIndicator: {
    position: 'absolute',
    top: -100,
    opacity: 0,
  },
});
