import React, { Component } from 'react';
import { Image, Dimensions, ScrollView } from 'react-native'
import { View, Text, Icon, Content, Card, CardItem, Right } from 'native-base'
import Swiper from 'react-native-swiper';

import Heading from '../components/heading/heading'


export default class Admissions extends Component {
  static navigationOptions = {
    topBarLabel: "Admissions",
    drawerIcon: ({ tintColor }) => (
      <Icon name="book" style={{ color: tintColor }} />
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
              <CardItem >
                <Icon active name="ionic" />
                <Text onPress={() => this.props.navigation.navigate("ComingSoon")}>Online Application</Text>
                <Right>
                  <Icon name="arrow-forward" onPress={() => this.props.navigation.navigate("ComingSoon")} />
                </Right>
              </CardItem>
            </Card>
            <Card >
              <CardItem>
                <Icon active name="ionic" />
                <Text onPress={() => this.props.navigation.navigate("ComingSoon")}>Download Form</Text>
                <Right>
                  <Icon name="arrow-forward" onPress={() => this.props.navigation.navigate("ComingSoon")} />
                </Right>
              </CardItem>
            </Card>
            <Card >
              <CardItem>
                <Icon active name="ionic" />
                <Text onPress={() => this.props.navigation.navigate("ComingSoon")}>Uniform Selection</Text>
                <Right>
                  <Icon name="arrow-forward" onPress={() => this.props.navigation.navigate("ComingSoon")} />
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