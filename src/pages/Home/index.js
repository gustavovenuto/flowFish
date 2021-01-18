import React, {useContext, useState, useEffect} from 'react';
import { View, Text, Button} from 'react-native';
import firebase from '../../services/firebaseConnection';

import {useNavigation} from '@react-navigation/native';

import {AuthContext} from '../../contexts/auth';
import Header from '../../components/Header';

import {Background, Body, Title, Img} from './styles';


export default function Home() {

  const navigation = useNavigation();

  const {signOut, user} = useContext(AuthContext);
  const uid = user && user.uid;

  function irRanking(){
    navigation.navigate('Ranking')
  }


 return (
   <Background>
     <Header/>
      <Body>
        <Title>
          Sigam a loja
        </Title>

        <Img source={require('../../assets/wild.png')}/>
        
        <Title>
            www.wildfishingbrasil.com.br
        </Title>
      </Body>
   </Background>
  );
}