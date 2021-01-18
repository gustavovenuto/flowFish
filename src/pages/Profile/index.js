import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';

import {AuthContext} from '../../contexts/auth';

import {Container, Nome, NewLink, NewText,Logout, LogoutText, Body} from './styles';

export default function Profile() {

    const navigation = useNavigation();

    const {user, signOut} = useContext(AuthContext);


 return (
   <Container>
       <Header/>
            <Body>
                <Nome>
                    {user && user.nome}
                </Nome>
       {/* <NewLink onPress={()=> navigation.navigate("Registrar")}>
           <NewText>
               Registrar Gastos
           </NewText>
       </NewLink> */}
                <Logout onPress={() => signOut()}>
                    <LogoutText>
                        Sair
                    </LogoutText>
                </Logout>
            </Body>
   </Container>
  );
}