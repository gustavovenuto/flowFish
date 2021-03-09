import React, {useState, useContext, useEffect} from 'react';
import {View, Text, TextInput, SubmitButton, TextTitle, ContainerPicker, BodySafe, BodyButtton, Body, SelectVideo, ViewLoad,AreaVideo,CancelVideo,IconVideo,AreaIcon,Image,TextSelectVideo} from './styles';
import {Keyboard, SafeAreaView, TouchableNativeFeedback, KeyboardAvoidingView, Platform,Alert, ScrollView, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import firebase from '../../services/firebaseConnection';
import  {format, set} from 'date-fns';
import {AuthContext} from '../../contexts/auth';
import base64 from 'react-native-base64';
import Icon from 'react-native-vector-icons/Feather';



import Pickerf from '../../components/Picker/index.android';
import PickerEst from '../../components/PickerEst/index.android';
import * as FileSystem from 'expo-file-system';

import * as ImagePicker from 'expo-image-picker';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';


export default function Enviar(){
    const navigation = useNavigation();

    const [peixe, setPeixe] = useState('');
    const [medida, setMedida] = useState('');
    const [estado, setEstado] = useState('');
    const [rio, setRio] = useState('');
    const [videoUri, setVideoUri] = useState('');
    const [icone, setIcone] = useState(false);
    const [urlPlayVideo, setUrlPlayVideo] = useState('');
    const [loading, setLoading] = useState(false);
    


    const {user} = useContext(AuthContext);


    const [status, setStatus] = useState('Pendente');


    function handleSubmit(){
        Keyboard.dismiss();
        if(isNaN(parseFloat(medida)) || peixe === 'null' || estado === 'null' || rio ==='null'|| null ){
          
          alert('Preencha todos os campos!');
          return;
        } 
        if(icone == false){
          alert('Selecione um video');
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
      setLoading(true);
      /* Envia video para o cloudinary */
      
      let base64Img =  `data:video/mp4;base64,${videoUri}`
        
      
      //Add your cloud name
      let apiUrl = 'https://api.cloudinary.com/v1_1/dlgq1ko0x/video/upload';
  
      let data = {
        "file": base64Img,
        "upload_preset": "dlgq1ko0x",
      }
      
      
        const videoUploadResponse = await fetch(apiUrl, {
              body: JSON.stringify(data),
              headers: {
                'content-type': 'application/json'
              },
              method: 'POST',
            })
        // acredito que aqui não precisa de await, é bom evitar usar quando não precisa, pq deixa mais lento
        const dataf = await videoUploadResponse.json();
        console.log(dataf.secure_url)
        const secure_url = dataf.secure_url;
        
      
     

    /*   Envia para o banco   */
    
    
    const video = secure_url;
    let uid = user.uid;
 
     let key = await firebase.database().ref('historico').child(uid).push().key;
     await firebase.database().ref('historico').child(uid).child(key).set({
       nome: user.nome,
       peixe: peixe,
       medida: parseFloat(medida),
       estado: estado,
       rio: rio,
       status: status,
       video: video,
       date: format(new Date(), 'dd/MM/yy')
       
     })
     setLoading(false);  
     alert('Enviado com Sucesso!');
     
     Keyboard.dismiss();
     setPeixe('');
     setMedida('');
     setEstado('');
     setRio('');
     setIcone(false);
     navigation.navigate('Home');
 
        
    }

   

    const openAlbum = async() => {
      
      setLoading(true);
      
      let response =  await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos
      });
      
     
      if(!response.cancelled){
        
        const resp = await FileSystem.readAsStringAsync(response.uri, {
        encoding: 'base64'}) 
         
        setVideoUri(resp)
        setIcone(true);
        setLoading(false);
      }
      
    }


    const SelectCancel = ()=>{
      setUrlPlayVideo('');
      setIcone(false)
    }

    if(loading == true){
        return <ViewLoad><Image source={require('./../../assets/loadingGif.gif')} /></ViewLoad>
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
                            <AreaVideo>
                            <SelectVideo onPress={(openAlbum)}>
                                <TextSelectVideo>
                                  Selecione o video
                                </TextSelectVideo>
                            </SelectVideo>
                            <AreaIcon view={icone}>
                              <IconVideo>
                                  <Icon
                                    name={icone ? 'film' : ''}
                                    size={40}
                                    color='#fff' 
                                  />
                              </IconVideo>
                              <CancelVideo onPress={SelectCancel}>
                                  <Icon
                                    name={icone ? 'x' : ''}
                                    size={20}
                                    color='#fff'
                                  />
                              </CancelVideo>
                            </AreaIcon>
                            </AreaVideo>
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