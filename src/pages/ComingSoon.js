import React, { Component } from 'react';
import { Image, Dimensions, ScrollView } from 'react-native'
import { View, Text, Icon, Content, Card, CardItem, Right } from 'native-base'
import Swiper from 'react-native-swiper';

import Heading from '../components/heading/staticHeading'

export default class ComingSoon extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.background}  >
        <ScrollView>
          <Heading title="Coming Soon" {...this.props} />
          <Content style={{ padding: 10 }} >
            <Card >
              <CardItem>
                <Text> ...coming soon </Text>
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