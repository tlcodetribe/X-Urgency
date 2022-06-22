import React, {useEffect, useState} from 'react';
import { } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Clone, MedicalHome, UploadVideo, Upload, PlayVideo, DoctorProfile } from '..';

const Stack = createNativeStackNavigator()

export const DoctorsScreens = () => {

    const [percentage, setPerc] = useState(null)
    const [match, setMatch] = useState(null)

    return (
        <Stack.Navigator>
            <Stack.Screen name="DocHome" options={{ headerShown: false }} >
                {props=><MedicalHome {...props} Log={setPerc} progress={percentage} setMatch={setMatch}/>}
            </Stack.Screen>
            <Stack.Screen name="Upload" options={{ headerShown: false }} >
                {props=><Upload {...props} Log={setPerc}/>}
            </Stack.Screen>
            <Stack.Screen name="PlayVideo" options={{ headerShown: false }} >
                {props=><PlayVideo {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Doctor" options={{ headerShown: false }} >
                {props=><DoctorProfile {...props} match={match}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}