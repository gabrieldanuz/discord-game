import React from "react";
import {
  View,
  Text,
  Image,
} from "react-native";

import IllustrationImg from '../../assets/illustration.png';
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

import { ButtonIcon } from "../../components/ButtonIcons";
import { Background } from "../../components/background";


export function SignIn() {
const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }
  return (
    <Background>
    <View style={styles.container}>
      <Image source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize suas jogatinas {'\n'}
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>

        <ButtonIcon
          title="Entrar com Discord" 
          onPress={handleSignIn}
          />
          
      </View>
    </View>
    </Background>
  );
}