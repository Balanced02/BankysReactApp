/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { Container, Header, Left, Icon, Right, Button, Title, Body, Text } from 'native-base'
import FontAwesome, { Icons } from 'react-native-fontawesome'

export default class Heading extends Component {
  render() {
    return (
      <Header style={styles.container} >
        <Left>
          <Icon name="ios-menu" onPress={() => this.props.navigation.navigate("DrawerOpen")} style={{ color: "#ffff" }} />
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
