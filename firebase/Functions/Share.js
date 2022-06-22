
import React from 'react';
import { Share } from 'react-native';

const ShareItem = async(url) => {
    try {
      const result = await Share.share({
        url: url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Shared with activity type") // shared with activity type of result.activityType
          console.log(result.activityType)
        } else {
          console.log("Shared") // shared
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Could not share") // dismissed
      }
    } catch (error) {
      console.log(error.message);
    }
};

export { ShareItem };