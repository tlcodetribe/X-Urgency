import React, {useState, useEffect} from 'react';
import { } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, PlayVideo, Clone, DoctorProfile } from '..';


const Stack = createNativeStackNavigator()

export const UserScreens = () => {

    const [match, setMatch] = useState(null)

    useEffect(()=>{
        console.log(match)
    },[match])
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="PlayVideo" component={PlayVideo} options={{ headerShown: false }} />
            <Stack.Screen name="Home" options={{ headerShown: false }} >
                {props=><Home {...props} setMatch={setMatch}/>}
            </Stack.Screen>
            <Stack.Screen name="Doctor" options={{ headerShown: false }} >
                {props=><DoctorProfile {...props} match={match} />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}