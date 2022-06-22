import React, { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
const HeartLoader = () => {
    const [size, setSize] = useState(76)
    useEffect(() => {
        setInterval(() => {
            setSize(85)
        }, 1000)
    }, [])
    return <FontAwesome name="heartbeat" size={size} color="#F47066" />
}
export { HeartLoader }