import React, { Component } from 'react';
import { Image, Dimensions, ScrollView } from 'react-native'
import { View, Text, Icon, Content, Card, CardItem, Right, List, ListItem } from 'native-base'

import Heading from '../components/heading/staticHeading'

export default class TechLaunch extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.background}  >
        <Heading title="Tech Launch v1-2018" {...this.props} />
        <ScrollView>
          <View style={styles.containerStyle} >
            <Image source={require("../assets/imgs/bankys.jpg")} style={styles.imgStyle} />
          </View>
          <Content style={{ padding: 10 }} >
            <Card >
              <CardItem header >
                <Text> Bankys Private School hosts “Tech Innovation Launch V1-2018” </Text>
              </CardItem>
              <CardItem>
                <Text>
                  Bankys Private School has set the pace, in a quest to prepare students for the current technology advances/revolution in our world today. Bankys Private School raised the bar by partnering with Big Idea project to promote their students’ Extra Curricular strength and competence by developing APPs from the scratch and pushing them into both Play Store and APP Store.
                </Text>
              </CardItem>
              <CardItem>
                <Text>
                  The Big idea Project showed the kids, the most contemporary ways to get things done and how much they could create by using technology to drive Science, Technology, Engineering, Arts and Mathematics and they went on to design a mobile APP for their school.
                </Text>
              </CardItem>
              <CardItem>
                <Text>
                  The students of Bankys also went a step further to develop six (6) other mobile APPs that could provide practical solutions to problems around their communities, Nigeria and possibly the world at large. These mobile Applications have been deployed into Play store and APP stores and they are ready for download.
                </Text>
              </CardItem>
              <CardItem>
                <Text>
                  A couple of these Apps developed by the students of Bankys include;
                </Text>
              </CardItem>
              <CardItem>
                <List>
                  <ListItem>
                    <Text>Job4Ever – A Simple Job and CV finder</Text>
                  </ListItem>
                  <ListItem>
                    <Text>My Little Pony – Fan Quiz APP</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Tagged Lost but Found APP</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Izy & Gracy- A Quotable Quotes App</Text>
                  </ListItem>
                  <ListItem>
                    <Text>The Mobile Art Galleria- A platform that displays creative arts</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Complete Amazing Fact APPs</Text>
                  </ListItem>
                </List>
              </CardItem>
              <CardItem>
                <Text>
                  This APPs which were developed by students between the ages of 8 and 17 are going to set the pace for so much more technological advancement for the kids and their counterparts in a couple of months.
                </Text>
              </CardItem>
              <CardItem>
                <Text>
                  The students who participated in the Big Idea project have already been enrolled in a 1 YEAR MENTORSHIP program with the Big Idea Project. This 1-year mentorship program is packed with a lot of helpful resources that will enable the students to upgrade their Apps to an internationally acceptable standard in a couple of months.
                </Text>
              </CardItem>
              <CardItem>
                <Text>
                  Bankys Private School prides itself to be a producer of Technology leading solution developers and this reputation is not only an achievement to be celebrated by the Students of Bankys Private School as it also sets a remarkable pace for other schools in Nigeria to follow.
                </Text>
              </CardItem>
              <CardItem>
                <Text>
                  The school is officially inviting the media and General Public to its Launch event which will take place in her school on March 2; 2018 where the APPs will be launched for use to about 142 countries on the stores.
  Please join us as we commemorate this ground-breaking event.
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