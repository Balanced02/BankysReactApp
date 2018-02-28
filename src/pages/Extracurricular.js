import React, { Component } from 'react';
import { Image, Dimensions, ScrollView } from 'react-native'
import { View, Text, Icon, Content, Card, CardItem, Right } from 'native-base'
import Swiper from 'react-native-swiper';

import Heading from '../components/heading/heading'


export default class Extracurricular extends Component {
  static navigationOptions = {
    topBarLabel: "Extracurricular",
    drawerIcon: ({ tintColor }) => (
      <Icon name="football" style={{ color: tintColor }} />
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
          <Heading title="Extracurricular" {...this.props} />
          <Content style={{ padding: 10 }} >
            <Card >
              <CardItem>
                <Icon active name="ionic" />
                <Text onPress={() => this.props.navigation.navigate("ComingSoon")}>Club Activities</Text>
                <Right>
                  <Icon name="arrow-forward" onPress={() => this.props.navigation.navigate("ComingSoon")} />
                </Right>
              </CardItem>
            </Card>
            <Card >
              <CardItem>
                <Icon active name="football" />
                <Text onPress={() => this.props.navigation.navigate("ComingSoon")}>Sports</Text>
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