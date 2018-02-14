import React, { Component } from 'react';
import { Image, Dimensions, ScrollView } from 'react-native'
import { View, Text, Icon, Content, Card, CardItem, Right } from 'native-base'
import Swiper from 'react-native-swiper';

import Heading from '../components/heading/heading'


export default class Academics extends Component {
  static navigationOptions = {
    topBarLabel: "Academics",
    drawerIcon: ({ tintColor }) => (
      <Icon name="school" style={{ color: tintColor }} />
    )
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {
    return (
      <View style={styles.background}  >
        <ScrollView>
          <Heading title="Academics" {...this.props} />
          <Content style={{ padding: 10 }} >
            <Card >
              <CardItem>
                <Icon active name="calendar" />
                <Text>Calendar</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </Card>
            <Card >
              <CardItem>
                <Icon active name="calculator" />
                <Text>Curriculum</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            </Card>
          </Content>
        </ScrollView>
      </View>
    )
  }
}

const { width } = Dimensions.get('window')

const styles = {
  background: {
    backgroundColor: "#FFF4CA",
    height: '100%',
  },
  containerStyle: {
    display: 'flex',
    alignItems: "center",
  },
}