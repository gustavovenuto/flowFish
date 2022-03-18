import React, {useState, useContext} from 'react';
import { View, Text, Platform, ActivityIndicator, Modal} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { AuthContext} from '../../contexts/auth';

import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText, LogoText, BodyRedefinirSenha, BodyCadastrar, TextRedefirSenha} from './styles';

export default function SignIn() {

const navigation = useNavigation();

const [email, setEmail] = useState('');

const [password, setPassword] = useState('');

const {signIn, loadingAuth} = useContext(AuthContext);



function handleLogin(){
  signIn(email, password);
}

 return (
   <Background>
       <Container behavior={Platform.OS === 'ios' ? 'padding' : ''}>

          <Logo source={require('../../assets/invertCor.png')}/>

          <AreaInput>
          
            <Input 
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(texto) => setEmail(texto)}
            />

          </AreaInput>

          <AreaInput>
          
            <Input 
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            secureTextEntry={true}
            onChangeText={(texto) => setPassword(texto)}
            />

          </AreaInput>

          <SubmitButton onPress={handleLogin} 
        
          >
            <SubmitText>
              Acessar
            </SubmitText>
          </SubmitButton>

          <Link onPress={()=> navigation.navigate('SignUp')}>
            <LinkText>Esqueceu sua senha ?</LinkText>
          </Link>

         
          <BodyCadastrar>

            <TextRedefirSenha>Não tem uma conta ?</TextRedefirSenha>

            <Link onPress={()=> navigation.navigate('SignUp')}>
              <LinkText  style={{textAlign: 'center', fontSize: '20px'}} >Cadastre-se</LinkText>
            </Link>

          </BodyCadastrar>

       </Container>
   </Background>
  );
}