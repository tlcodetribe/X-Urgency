import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  Alert,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Video from 'react-native-video';

export const VideoTester = () =>{


  return()
}

// export default function MediaPlayerScreen({}) {

//     const is_device = useState(false),
//         videoBuffer = isBuffer =>{
//             console.log(isBuffer)
//         }

//     return(
//         <ScrollView style={styles.container}>
//         <View style={styles.mainView}>
//           <Video
//             source={{
//               uri: 'https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4',
//             }}

//             ref={ref => {
//               this.player = ref;
//             }}
//             controls={true}
//             onBuffer={this.onBuffer} // Callback when remote video is buffering
//             onError={this.videoError} // Callback when video cannot be loaded
//             onEnd={() => {
//               this.player.seek(0);
//             }}
//             onError={err => {
//               Alert.alert(JSON.stringify(err));
//             }}
//             style={styles.backgroundVideo}
//           />
//           <View style={styles.absoluteOverlay}>
//             <TouchableOpacity
//               onPress={async () => {
//                 let response = await this.player.save();
//                 let uri = response.uri;
//                 console.warn('Download URI', uri);
//               }}
//               text="Save"
//             />
//             <TouchableOpacity
//               onPress={() => {
//                 this.setState(state => ({showLocal: !state.showLocal}));
//               }}
//               text={this.state.showLocal ? 'Show Remote' : 'Show Local'}
//             />
//           </View>
//         </View>
//       </ScrollView>
//     )
    
// }

// // export default class MediaPlayerScreen extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       is_device: false,
// //     };
// //   }

// //   videoBuffer = isBuffer => {
// //     console.log(isBuffer);
// //     //here you could set the isBuffer value to the state and then do something with it
// //     //such as show a loading icon
// //   };

// //   render() {
// //     // const earthVideo = require('./earth.mp4');
// //     return (
// //       <ScrollView style={styles.container}>
// //         <View style={styles.mainView}>
// //           <Video
// //             //for playing local videos
// //             //    source={
// //             //     this.state.showLocal ?
// //             //     require('../basic/broadchurch.mp4') :
// //             //     {
// //             //       uri:  "https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4"
// //             //     }
// //             // }
// //             source={{
// //               uri: 'https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4',
// //             }} // Can be a URL or a local file.
// //             ref={ref => {
// //               this.player = ref;
// //             }} // Store reference
// //             //for showing a static image
// //             //poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/English_Cocker_Spaniel_4.jpg/800px-English_Cocker_Spaniel_4.jpg"
// //             // audioOnly={true} //for only audio playing
// //             controls={true}
// //             onBuffer={this.onBuffer} // Callback when remote video is buffering
// //             // onError={this.videoError} // Callback when video cannot be loaded
// //             onEnd={() => {
// //               this.player.seek(0);
// //             }}
// //             onError={err => {
// //               Alert.alert(JSON.stringify(err));
// //             }}
// //             style={styles.backgroundVideo}
// //           />
// //           <View style={styles.absoluteOverlay}>
// //             <TouchableOpacity
// //               onPress={async () => {
// //                 let response = await this.player.save();
// //                 let uri = response.uri;
// //                 console.warn('Download URI', uri);
// //               }}
// //               text="Save"
// //             />
// //             <TouchableOpacity
// //               onPress={() => {
// //                 this.setState(state => ({showLocal: !state.showLocal}));
// //               }}
// //               text={this.state.showLocal ? 'Show Remote' : 'Show Local'}
// //             />
// //           </View>
// //         </View>
// //       </ScrollView>
// //     );
// //   }
// // }

// const styles = StyleSheet.create({
//   container: {
//     flex: 10,
//     backgroundColor: colors.lightBlack,
//     // alignContent: 'center',
//     // justifyContent: 'center',
//   },
//   mainView: {
//     flex: 1,
//     // height: moderateScale(300),
//     width: '100%',
//   },
// });