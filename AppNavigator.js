/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { DrawerNavigator, DrawerItems, StackNavigator } from 'react-navigation'
import { Container, Header, Body } from 'native-base'

import HomeScreen from './src/pages/Home'
import AcademicsScreen from './src/pages/Academics'
import AdmissionsScreen from './src/pages/Admission'
import ELearningScreen from './src/pages/ELearning'
import ExtracurricularScreen from './src/pages/Extracurricular'
import ContactFormScreen from './src/pages/ContactForm'
import TestimonialsScreen from './src/pages/Testimonials'

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const drawerComponent = (props) => (
  <Container>
    <Header style={{ height: 200, backgroundColor: '#fff', padding: 5 }} >
      <Body>
        <Image source={require("./src/assets/imgs/menuImg.jpeg")} style={styles.drawerImg} />
      </Body>
    </Header>
    <DrawerItems {...props} />
  </Container>
)


const pageNavigation = DrawerNavigator({
  Home: {
    path: '/',
    screen: HomeScreen
  },
  Academics: {
    path: '/academics',
    screen: AcademicsScreen
  },
  Admissions: {
    path: '/admissions',
    screen: AdmissionsScreen
  },
  ELearning: {
    path: '/elearning',
    screen: ELearningScreen
  },
  Extracurricular: {
    path: '/extracurricular',
    screen: ExtracurricularScreen
  },
  ContactForm: {
    path: '/contactScreen',
    screen: ContactFormScreen
  },
  Testimonials: {
    path: '/testimonials',
    screen: TestimonialsScreen
  },
},
  {
    initialRouteName: "Home",
    drawerPosition: 'left',
    drawerWidth: 250,
    contentOptions: {
      activeTintColor: 'red'
    },
    contentComponent: drawerComponent
  })

export default pageNavigation

const styles = {
  drawerImg: {
    width: 250,
    height: 120,
  }
}