import React, {useState, useRef} from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
  } from "react-native";
  import { Card } from "react-native-paper";
import { Video } from "expo-av";

const ItemSeperatorView = () => {
    return (
      <View style={{ height: 0.5, width: "100%", backgroundColor: "#c8c8c8" }} />
    );
};

export const VideoList = ({videos, VideoScreen}) =>{
    const [status, setStatus] = useState({});
   const ref = useRef(null);
 
   return videos
     ? videos.map((vid) => (
         <View style={{ width: 295, alignItems: "center" }} key={vid.id}>
           <Card
             style={{
               marginTop: 15,
               width: 335,
               height: 245,
               alignItems: "center",             
               backgroundColor: "#FAFAFA",
             }}
           >
             <TouchableOpacity style={{ width: 335 }} onPress={()=>VideoScreen(vid)}>
               <Video
                 ref={ref}
                 source={{ uri: vid.url }}
                 resizeMode="stretch"
                 isLooping
                 onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                 style={{
                   width: "100%",
                   height: 165,
                   marginTop: 5,
                   alignSelf: "center",
                 }}
               />
             </TouchableOpacity>
 
             <View style={{ justifyContent:'space-evenly' }}>
               <Text style={styles.vidTitle}>{vid.title}</Text>
               <Text style={styles.tag}>{vid.owner}</Text>
 
               <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                 <Text style={styles.tag}>{vid.views} Views</Text>
                 <Text style={styles.tag}>{vid.stamp}</Text>
               </View>
             </View>
           </Card>
 
           <ItemSeperatorView />
         </View>
       ))
     : null;
}

const styles = StyleSheet.create({
    vidTitle: {
      fontSize: 16,
      fontWeight: "bold",
    },
  
    tag: {
      paddingVertical:2,
      fontSize: 12,
    },
  });