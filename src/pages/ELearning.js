import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native'
import { View, Text, Icon, Content, Card, CardItem, Right } from 'native-base'
import Swiper from 'react-native-swiper';

import Heading from '../components/heading/heading'


export default class ELearning extends Component {
  static navigationOptions = {
    topBarLabel: "ELearning",
    drawerIcon: ({ tintColor }) => (
      <Icon name="easel" style={{ color: tintColor }} />
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
          <Heading title="E-Learning" {...this.props} />
          <Content style={{ padding: 10 }} >
            <Card >
              <CardItem>
                <Icon active name="ionic" />
                <Text onPress={() => this.props.navigation.navigate("ComingSoon")}>Assignment</Text>
                <Right>
                  <Icon name="arrow-forward" onPress={() => this.props.navigation.navigate("ComingSoon")} />
                </Right>
              </CardItem>
            </Card>
            <Card >
              <CardItem>
                <Icon active name="ionic" />
                <Text onPress={() => this.props.navigation.navigate("ComingSoon")}>Check Results</Text>
                <Right>
                  <Icon name="arrow-forward" onPress={() => this.props.navigation.navigate("ComingSoon")} />
                </Right>
              </CardItem>
            </Card>
            <Card >
              <CardItem>
                <Icon active name="ionic" />
                <Text onPress={() => this.props.navigation.navigate("ComingSoon")}>E-Classroom</Text>
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