import React, { Component } from 'react';
import { Image, Dimensions, ScrollView } from 'react-native'
import { View, Text, Icon, Content, Card, CardItem, Right, } from 'native-base'
import Swiper from 'react-native-swiper';

import Heading from '../components/heading/staticHeading'

export default class AboutUs extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.background}  >
        <ScrollView>
          <Heading title="About Us" {...this.props} />
          <Content style={{ padding: 10 }} >
            <Card >
              <CardItem>
                <Text>
                At BANKYS, we care about Spiritual and Academic Excellence and we encourage our students to excel as individuals. We work to produce spiritually, socially and academically sound students who are able to make positive impact in their environment and stay above board among their peers and those around them at all times. We hold our students to the highest academic standards and provide them with the tools, support, direction and encouragement they need to excel. 
                </Text>
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