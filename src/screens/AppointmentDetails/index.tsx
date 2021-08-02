import React from 'react'
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import { ImageBackground, Text, View, FlatList } from 'react-native';

import { Background } from "../../components/background";
import { ListHeader } from "../../components/ListHeader";
import { ButtonIcon } from "../../components/ButtonIcons";
import { Header } from "../../components/Header";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import BannerImg from '../../assets/banner.png';


export function AppointmentDetails() {
    const members = [
        {
            id: '1',
            username: 'Jonas',
            avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWgduIfOrtiY2W_0adZ3jiYiyho9-uVOXNg&usqp=CAU',
            status: 'online',
        },
        {
            id: '2',
            username: 'Mathias',
            avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/FC_Admira_Wacker_M%C3%B6dling_vs._FC_Red_Bull_Salzburg_%28Cup%29_2017-04-26_%28061%29.jpg',
            status: 'ofline',
        },
    ]
    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>

                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Text>
                </View>
            </ImageBackground>

            <ListHeader
                title="Jogadores"
                subtitle="Total 3" />

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style = {styles.members}
            />

        <View style={styles.footer}>
            <ButtonIcon title="Entrar na partida"

            />

    </View>
        </Background>
    )
}

