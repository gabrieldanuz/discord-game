import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export type GuildProps = {

}


export function GuildIcon() {
const uri = 'https://xboxplay.games/uploadStream/18660.jpg';
    return (
        <Image 
        source= {{uri}}
        style={styles.image}
        resizeMode="cover"
         />
    )
}