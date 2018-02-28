/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { Container, Header, Left, Icon, Right, Button, Title, Body, Text } from 'native-base'
import FontAwesome, { Icons } from 'react-native-fontawesome'
import { NavigationActions } from 'react-navigation'

export default class Heading extends Component {
  render() {
    return (
      <Header style={styles.container} >
        <Left>
          <Icon name="arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} style={{ color: "#ffff" }} />
        </Left>
        <Body>
          <Title> {this.props.title}</Title>
        </Body>
      </Header>
    );
  }
}


const styles = {
  container: {
    backgroundColor: '#FFC900',
  },
}
