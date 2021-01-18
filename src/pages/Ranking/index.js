import React, {useContext} from 'react';

import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';

import {View, Text, Container, Logo, Link, TouchableOpacity, Img, Areabottom, OneBottom} from './styles';
import { Button } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



export default function Ranking(){

    const navigation = useNavigation();
  

        return(
            <Container>
            <Header/>
            <View>
                
                <Link onPress={()=> navigation.goBack()}>

                    <Icon
                    name="md-arrow-back"
                    size={30}
                    color='#fff'
                    />

                </Link>
                
                    <OneBottom>
                    <TouchableOpacity onPress={() => navigation.navigate('TucunaAzul')}>
            
                        <Img source={require('../../assets/TucunareAz.png')}/>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('TucunaAmarelo')}>
            
                        <Img source={require('../../assets/TucunareAma.png')}/>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Traira')}>
            
                        <Img source={require('../../assets/Traira.png')}/>

                    </TouchableOpacity>
                    </OneBottom>
                
            </View>
            
            
        </Container>
    );
}