import React, {useContext, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import firebase from '../../services/firebaseConnection';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import {AuthContext} from '../../contexts/auth';

import {Container, Nome, NewLink, NewText,Logout, LogoutText, Body, SelectImage, Text, ViewLoad, Image, View, ImagePerfil} from './styles';



export default function Profile() {

    const navigation = useNavigation();
    
    const {user, signOut} = useContext(AuthContext);

    const [loading, setLoading] = useState(false);

    const [ upPhoto, setUpPhoto] = useState('');

    const [exibir, setExibir] = useState(false);

    const [photo, setPhoto] = useState('');

    async function handleAdd(){

      console.log(photo)
      setLoading(true);

        const uid = user.uid;
       
        console.log(uid)
       await firebase.database().ref('users').child(uid).update({
         photo: photo,
       }).then(()=>{
        setLoading(false);
        setExibir(false);  
        alert('Enviado com Sucesso!');
      })
      
        
    }


    useEffect(()=>{
      async function loadList(){
        
        setLoading(true)
        const uid = user.uid;

        const rootRef = await firebase.database().ref('users').child(uid);
        rootRef.on('value', snap => {

            const data = {
              photo: snap.val().photo
            } 

            console.log(data)
            
            console.log(data.photo)                
            setUpPhoto(data);
            setLoading(false);

            
                     
            
        });
          
  
      }
  
      loadList();
    }, []);

    
    

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

            setExibir(true);
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
                    <ImagePerfil source={{uri: exibir ? photo : `${upPhoto.photo}`}}/>
                </View>
                <SelectImage onPress={openAlbum}>
                    <Text>Selecionar foto</Text>
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