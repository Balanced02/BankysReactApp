import React, { Component } from 'react';
import { Image, Dimensions, ScrollView } from 'react-native'
import { Button, View, Text, Icon, Content, Card, Form, Item, Input, CardItem, Right } from 'native-base'
import Swiper from 'react-native-swiper';

import Heading from '../components/heading/heading'


export default class ContactForm extends Component {
  static navigationOptions = {
    topBarLabel: "ContactForm",
    drawerIcon: ({ tintColor }) => (
      <Icon name="information-circle" style={{ color: tintColor }} />
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
            <Form>
              <Item floatingLabel >
                <Input placeholder="Your First name" />
              </Item>
              <Item floatingLabel >
                <Input placeholder="Your Last name" />
              </Item>
              <Item floatingLabel >
                <Input placeholder="Your Phone Number" />
              </Item>
              <Item floatingLabel >
                <Input placeholder="Your E-mail Address" />
              </Item>
              <Item floatingLabel last>
                <Input placeholder="Your Comments here" />
              </Item>
            </Form>
            <Content>
              <Button warning block ><Text> Submit </Text></Button>
            </Content>
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