import React, {useState, useContext} from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../../contexts/auth';

import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText} from '../SignIn/styles';

export default function SignIn() {

const [nome, setNome] = useState('');

const [email, setEmail] = useState('');

const [password, setPassword] = useState('');

const {signUp} = useContext(AuthContext);


function handleSignUp(){
    signUp(email, password, nome);
}



 return (
   <Background>
       <Container behavior={Platform.OS === 'ios' ? 'padding' : ''}>

         
        <Text style={{color: 'green', fontSize: 40}}>Cadastro</Text>
        
         <AreaInput>
          
          <Input 
          placeholder="Nome"
          autoCorrect={false}
          autoCapitalize="none"
          value={nome}
          onChangeText={(texto) => setNome(texto)}
          />

        </AreaInput>

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

          <SubmitButton onPress={handleSignUp}>
            <SubmitText>
              Cadastrar
            </SubmitText>
          </SubmitButton>

        

       </Container>
   </Background>
  );
 }