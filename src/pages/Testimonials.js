import React, { Component } from 'react';
import { Image, Dimensions, ScrollView } from 'react-native'
import { View, Text, Icon, Content, Card, CardItem, Right, Body } from 'native-base'
import Swiper from 'react-native-swiper';

import Heading from '../components/heading/heading'


export default class Testimonials extends Component {
  static navigationOptions = {
    topBarLabel: "Testimonials",
    drawerIcon: ({ tintColor }) => (
      <Icon name="book" style={{ color: tintColor }} />
    )
  }

  constructor(props) {
    super(props)
    this.state = {
      testimonials: [{
        body: 'On behalf of my family, I sincerely appreciate your team efforts at bringing out the best in my child. I Pray that divine wisdom will rest upon you in all your endeavours. Thank you for your efforts.',
        author: 'Nkem-Owusi Hadassah B. A.'
      }]
    }
  }


  render() {
    return (
      <View style={styles.background}  >
        <ScrollView>
          <Heading title="Testimonials" {...this.props} />
          <Content style={{ padding: 10 }} >
            {this.state.testimonials.map((testimonial, i) => (
              <Card key={i} >
                <CardItem>
                  <Body>
                    <Text>
                      {testimonial.body}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem footer >
                  <Right>
                    <Text>
                      - {testimonial.author}
                    </Text>
                  </Right>
                </CardItem>
              </Card>
            ))}
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