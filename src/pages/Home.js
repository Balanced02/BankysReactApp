import React, { Component } from 'react';
import { Image, Dimensions, ScrollView } from 'react-native'
import { View, Text, Icon, Content, Card, CardItem } from 'native-base'
import Swiper from 'react-native-swiper';

import Heading from '../components/heading/heading'
import CustomButton from '../components/button'

const Slider = props => (
  <View style={styles.wrapper} >
    <Image style={styles.slide} source={props.uri} />
  </View>
)
export default class Home extends Component {
  static navigationOptions = {
    topBarLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" style={{ color: tintColor || '#FFC900' }} />
    )
  }

  constructor(props) {
    super()
    this.state = {
      imageSlider: [
        require("../assets/imgs/slide1.jpg"),
        require("../assets/imgs/slide2.jpg"),
        require("../assets/imgs/slide3.jpeg")
      ]
    }
  }


  render() {
    return (
      <ScrollView>
        <Content style={styles.background} >
          <Heading title="Bankys Private School" {...this.props} />
          <View style={styles.containerStyle} >
            <Image source={require("../assets/imgs/bankys.jpg")} style={styles.imgStyle} />
          </View>
          <View style={styles.containerStyle} >
            <Card style={styles.info} >
              <CardItem>
                <Text style={{ fontSize: 15, textAlign: 'center' }} >
                  App designed by Students of Bankys Private School
            </Text>
              </CardItem>
            </Card>
          </View>
          <View style={styles.containerStyle} >
            <Swiper showsButtons={true} autoplay height={240} width={width - 30} >
              {this.state.imageSlider.map((item, i) => (
                <Slider key={i} uri={item} />
              ))}
            </Swiper>
          </View>
          <View style={styles.btnContainer} >
            <CustomButton nav={'DrawerOpen'} title={"About Us"} {...this.props} styles={{ ...styles.btnStyle, ...styles.purpleBtn }} />
            <CustomButton nav={'Admissions'} title={"Admissions"} {...this.props} styles={{ ...styles.btnStyle, ...styles.yellowBtn }} />
          </View>
          <View style={styles.btnContainer} >
            <CustomButton nav={'DrawerOpen'} title={"Career"} {...this.props} styles={{ ...styles.btnStyle, ...styles.greenBtn }} />
            <CustomButton nav={'ELearning'} title={"E-Learning"} {...this.props} styles={{ ...styles.btnStyle, ...styles.purpleBtn }} />
          </View>
          <View style={styles.btnContainer} >
            <CustomButton nav={'ContactForm'} title={"Contact Us"} {...this.props} styles={{ ...styles.btnStyle, ...styles.yellowBtn }} />
            <CustomButton nav={'DrawerOpen'} title={"What's New"} {...this.props} styles={{ ...styles.btnStyle, ...styles.greenBtn }} />
          </View>
        </Content>
      </ScrollView>
    )
  }
}

const { width } = Dimensions.get('window')

const styles = {
  containerStyle: {
    display: 'flex',
    alignItems: "center",
  },
  btnContainer: {
    margin: 10,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  btnStyle: {
    flexDirection: 'column',
    width: "50%",
    justifyContent: 'center',
  },
  greenBtn: {
    backgroundColor: '#33CD5F'
  },
  purpleBtn: {
    backgroundColor: "#886AEA"
  },
  yellowBtn: {
    backgroundColor: '#FFC900'
  },
  imgStyle: {
    height: 200,
    width: 200,
    flex: 1
  },
  background: {
    backgroundColor: "#FFF4CA"
  },
  info: {
    width: '70%',
    margin: 'auto'
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  slide: {
    flex: 1,
    width,
  },
}