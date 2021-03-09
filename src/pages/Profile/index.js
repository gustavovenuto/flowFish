import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import {AuthContext} from '../../contexts/auth';

import {Container, Nome, NewLink, NewText,Logout, LogoutText, Body, SelectImage, Text, ViewLoad, Image, View, ImagePerfil} from './styles';



export default function Profile() {

    const navigation = useNavigation();
    
    const {user, signOut} = useContext(AuthContext);

    const [loading, setLoading] = useState(false);

    const [photo, setPhoto] = useState('https://res.cloudinary.com/dlgq1ko0x/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1615166992/oleo7hjptcbeficu5avs.jpg');

    async function handleAdd(){
      setLoading(true);

        let uid = user.uid;

       await firebase.database().ref('users').child(uid).update({
        photo:  `${photo}` 
       
      })
      setLoading(false);  
      alert('Enviado com Sucesso!');
      
      
 
        
    }

    
    

    const openAlbum = async() => {
      
        setLoading(true);
        
        let response =  await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true
        });
        

        
       
        if(!response.cancelled){

            
          let uri = `data:image/jpg;base64,${response.base64}`;

            

          let data = {
            "file": uri,
            "upload_preset": "dlgq1ko0x",
          }

          let apiUrl = "https://api.cloudinary.com/v1_1/dlgq1ko0x/image/upload";
          const imageUploadResponse = await fetch(apiUrl, {
            body: JSON.stringify(data),
            headers: {
              'content-type': 'application/json'
            },
            method: 'POST',
          })
        
          const dataf = await imageUploadResponse.json();
          console.log(dataf.secure_url)
          const secure_url = dataf.secure_url;
          setPhoto(secure_url)
            setLoading(false);
          
           
          
        }else {
          return;
        }
        
    }
  
    

    if(loading == true){
        return <ViewLoad><Image source={require('./../../assets/loadingGif.gif')} /></ViewLoad>
    }
 return (
   <Container>
       <Header/>
            <Body>
                <View>
                    <ImagePerfil source={{uri: photo}}/>
                </View>
                <SelectImage onPress={openAlbum}>
                    <Text>Selecione foto</Text>
                </SelectImage>
                <SelectImage onPress={handleAdd}>
                    <Text>Salvar</Text>
                </SelectImage>

                <Nome>
                    {user && user.nome}
                </Nome>
                <Logout onPress={() => signOut()}>
                    <LogoutText>
                        Sair
                    </LogoutText>
                </Logout>
            </Body>
   </Container>
  );
}