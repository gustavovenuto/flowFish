import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import {Container, ButtonMenu, Text, SafeAreaView} from './styles';

export default function Header() {

    const navigation = useNavigation();

 return (
     <SafeAreaView>
     <Container>
        <Text>
            Flow Fish
        </Text>
   </Container>
   </SafeAreaView>
    
  );
}