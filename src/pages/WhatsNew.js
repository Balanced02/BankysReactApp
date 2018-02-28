import React, { Component } from 'react';
import { Image, Dimensions, ScrollView } from 'react-native'
import { View, Text, Icon, Content, Card, CardItem, Right, } from 'native-base'
import Swiper from 'react-native-swiper';

import Heading from '../components/heading/staticHeading'

export default class WhatsNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.background}  >
        <ScrollView>
          <Heading title="What's New" {...this.props} />
          <Content style={{ padding: 10 }} >
            <Card >
              <CardItem header >
                <Text onPress={() => this.props.navigation.navigate("TechLaunch")} > Tech Inovation Launch v1-2018 </Text>
                <Right>
                  <Icon name="arrow-forward" onPress={() => this.props.navigation.navigate("TechLaunch")} />
                </Right>
              </CardItem>
            </Card>
            <Card >
              <CardItem header  >
                <Text onPress={() => this.props.navigation.navigate("TechLaunch")}> WELCOME TO WEEK 7 </Text>
                <Right>
                  <Icon name="arrow-forward" onPress={() => this.props.navigation.navigate("Week7")} />
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