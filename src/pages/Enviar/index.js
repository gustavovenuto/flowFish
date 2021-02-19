import React, {useState, useContext, useEffect} from 'react';
import {View, Text, TextInput, SubmitButton, TextTitle, ContainerPicker, BodySafe, BodyButtton, Body, SelectVideo, TextSelectVideo} from './styles';
import {Keyboard, SafeAreaView, TouchableNativeFeedback, KeyboardAvoidingView, Platform,Alert, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firebase from '../../services/firebaseConnection';
import  {format} from 'date-fns';
import {AuthContext} from '../../contexts/auth';

import Pickerf from '../../components/Picker/index.android';
import PickerEst from '../../components/PickerEst/index.android';

import * as ImagePicker from 'expo-image-picker';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';


export default function Enviar(){
    const navigation = useNavigation();

    const [peixe, setPeixe] = useState('');
    const [medida, setMedida] = useState('');
    const [estado, setEstado] = useState('');
    const [rio, setRio] = useState('');


    const {user} = useContext(AuthContext);


    const [status, setStatus] = useState('Pendente');


    function handleSubmit(){
        Keyboard.dismiss();
        if(isNaN(parseFloat(medida)) || peixe === 'null' || estado === 'null' || rio ==='null'|| null ){
          
          alert('Preencha todos os campos!');
          return;
        }
        
      
        Alert.alert(
          'Confirmando dados',
          `Peixe: ${peixe} - Medida: ${medida} Cm`,
          [
            {
              text: 'Cancelar',
              style: 'cancel',
            },
            {
              text: 'Continuar',
              onPress: () => handleAdd()
            }
          ]
        )
      
    }

    async function handleAdd(){
        let uid = user.uid;
 
     let key = await firebase.database().ref('historico').child(uid).push().key;
     await firebase.database().ref('historico').child(uid).child(key).set({
       nome: user.nome,
       peixe: peixe,
       medida: parseFloat(medida),
       estado: estado,
       rio: rio,
       status: status,
       date: format(new Date(), 'dd/MM/yy')
       
     })
     alert('Enviado com Sucesso!');
  
     Keyboard.dismiss();
     setPeixe('');
     setMedida('');
     setEstado('');
     setRio('');
     navigation.navigate('Home');
 
        
    }

   

    function openAlbum(){
      const options = {
        mediaType: 'video'
      }

      ImagePicker.launchImageLibraryAsync(options, (response)=>{
        if(response.didCancel){
          console.log('image picker cancelado')
        }else if (response.error){
          console.log('gerou um erro' + response.error);
        }
      })
    }

    return(
       // <TouchableNativeFeedback onPress={() => Keyboard.dismiss() }> habilitar quando tudo pronto
        <View>
          <ScrollView>
                <Body> 
                    <TextTitle>
                        Entre no Ranking
                    </TextTitle>
                </Body>
                <SafeAreaView>
                    <ContainerPicker>
                        <BodySafe> 
                            <Text>Peixe:</Text>       
                            <Pickerf
                            onChange={setPeixe}
                            peixe={peixe}
                            />

                            <Text>Medida:</Text>
                            <TextInput
                                placeholder="Qual foi a medida em cm ?"
                                keyboardType='numeric'
                                returnKeytype='next'
                                onsubmitEditing={() => Keyboard.dismiss()}
                                value={medida}
                                onChangeText={(texto)=> setMedida(texto)}
                                autoCorrect={false}
                                maxLength={5}
                                
                            />
                            <Text>Estado:</Text>      
                            <PickerEst
                                onChange={setEstado}
                                estado={estado}
                            />
                            

                            
                            <Text>Rio:</Text>
                            <TextInput
                                placeholder="Qual rio foi pego o peixe ?"
                                returnKeytype='next'
                                onsubmitEditing={() => Keyboard.dismiss()}
                                value={rio}
                                onChangeText={(texto)=> setRio(texto)} 
                                autoCorrect={false}                               
                            />

                            <Text>Video:</Text>
                            <SelectVideo onPress={(openAlbum)}>
                                <TextSelectVideo>
                                  Selecione o video
                                </TextSelectVideo>
                            </SelectVideo>
                        </BodySafe>

                        <BodyButtton>
                            <SubmitButton onPress={handleSubmit} title="Enviar" color='#black'/>
                        </BodyButtton>

                    </ContainerPicker>
            

                    </SafeAreaView>
                  </ScrollView>
        </View>
       // </TouchableNativeFeedback>
    )
}