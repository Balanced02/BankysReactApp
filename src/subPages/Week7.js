import React, { Component } from 'react';
import { Image, Dimensions, ScrollView } from 'react-native'
import { View, Text, Icon, Content, Card, CardItem, Right, List, ListItem } from 'native-base'

import Heading from '../components/heading/staticHeading'

export default class Week7 extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.background}  >
        <Heading title="Welcome to Week 7" {...this.props} />
        <ScrollView>
          <View style={styles.containerStyle} >
            <Image source={require("../assets/imgs/week7.png")} style={styles.imgStyle} />
          </View>
          <Content style={{ padding: 10 }} >
            <Card >
              <CardItem header >
                <Text> January 15, 2018 </Text>
              </CardItem>
              <CardItem header >
                <Text>Dear Parents, welcome to week 7 of our resumption. Do look out for our weekly events highlight on this space as well as on the school app.</Text>
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
  imgStyle: {
    height: 200,
    width: 200,
    flex: 1
  },
}