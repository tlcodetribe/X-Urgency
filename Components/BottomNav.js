/**
    * @description      : 
    * @author           : TLeeuw
    * @group            : 
    * @created          : 13/10/2021 - 10:58:21
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/10/2021
    * - Author          : TLeeuw
    * - Modification    : 
**/
import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const BottomNav = () => {
  return (
    <View>
      {!visibleStatusBar ? (
        <View>
          <View style={{ flexDirection: 'row', paddingLeft: 50, marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>
              Stroke Emergency Video
            </Text>
            <TouchableOpacity title="topNav" onPress={() => changeVisibilityStatusBar()} >
              <AntDesign name="downcircle" size={18} color="black" style={styles.dropDown} />
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 10, paddingLeft: 50, paddingTop: 5 }}>1.7M views - 2years ago</Text>
          <Card style={{ borderColor: 'black', width: 315, marginTop: 20, marginLeft: 30 }}>
            <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 3 }}>
              <View style={{ marginLeft: 10 }}>
                <Entypo name="thumbs-up" size={24} color="black" style={{ marginLeft: 10 }} />
                <Text style={{ marginTop: 5 }}>  16k  </Text>
              </View>
              <View style={{ marginLeft: 45 }}>
                <Entypo name="thumbs-down" size={24} color="black" style={{ marginTop: 3, marginLeft: 5 }} />
                <Text style={{ paddingTop: 2 }}>  16  </Text>
              </View>
              <View style={{ marginLeft: 40 }}>
                <FontAwesome5 name="share" size={24} color="black"
                  style={{ marginLeft: 13 }} />
                <Text style={{ paddingTop: 5 }}>  Share  </Text>
              </View>
              <View style={{ marginLeft: 40 }}>
                <Entypo name="save" size={24} color="black" style={{ marginLeft: 10 }} />
                <Text style={{ paddingTop: 5 }}>  Save  </Text>
              </View>
            </View>
          </Card>
          <View style={{ marginTop: 50, marginLeft: 30, flexDirection: 'row' }}>
            <Avatar rounded
              source={{
                uri: 'https://randomuser.me/api/portraits/men/41.jpg',
              }}
              size="medium"
            />
            <Text style={{ paddingTop: 15, paddingLeft: 15 }}>Rando123</Text>
          </View>
        </View>
      )
        : //Hidden Description
        <View>
          <Card style={{
            width: 315, height: 300, marginLeft: 28,
            borderRadius: 20,
            backgroundColor: '#fff',
            marginTop: 20
          }}>
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={{
                  paddingLeft: 10,
                  paddingTop: 15,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Description:
              </Text>
              <TouchableOpacity onPress={() => changeVisibilityStatusBar()}>
                <AntDesign name="closecircle" size={18} color="black" style={{ marginLeft: 180, marginTop: 15 }} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: 10,
                marginLeft: 12,
                width: 255,
              }}>
              <Text >
                Stroke Emergency Video
              </Text>
              <Text style={{ fontSize: 10, color: 'grey' }}>
                1 000 000 Views
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                marginLeft: 12,
                width: 255,
              }}>
              <Text style={{ paddingTop: 10 }}>
                Lost your faith in ambulances' response time?
                You can play doctor and help save a life by just
                following the instructions of this video.
                This video is accredited by the Department of Health
                and Social Development, for critical emergencies only.
              </Text>
              <Text style={{ paddingTop: 10, fontWeight: 'bold' }}>Thank you for your support.</Text>
            </View>
          </Card>
        </View>
      }
    </View>
  )
}
export default BottomNav
