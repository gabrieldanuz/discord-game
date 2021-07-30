import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from '../Avatar/Index';

import { styles } from './styles';

export function Profile() {
    return (
        <View style={styles.container}>

        <Avatar urlImage="https://static.meionorte.com/uploads/imagens/2020/10/20/thumb/r-1200-800-q-90-aos-80-anos-pele-nao-tem-a-palavra-final-sobre-seus-negocios-cc419427-c279-4654-beff-2d933af8d7d7.jpg"/>
            <View>
                <View style={styles.user}>
                <Text style = {styles.greeting}>
                    Olá,
                </Text>
                <Text style={styles.username}>
                    Gabriel
                </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>
        </View>
    )
}