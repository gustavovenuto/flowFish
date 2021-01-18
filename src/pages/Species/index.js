import React, {useContext} from 'react';

import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';

import {View, Text, Container, Logo, Link, Img, TouchableOpacity, Body} from './styles';
import { Button } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



export default function TucunaAmarelo(){

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
                <Body> 
                    <Text>
                        Ranking
                    </Text>
                </Body>
            </View>
               {/*  <TouchableOpacity onPress={() => navigation.goBack()}>
            
                    <Img
                     source={require('./logo2.png')}
                    />
                </TouchableOpacity> */}
        </Container>
    );
}