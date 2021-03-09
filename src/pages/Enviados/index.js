import React,{useState, useEffect, useContext} from 'react';
import {View, Text, Container, Body,ListView,  Loading, AreaNull, TextNull,ViewLoad, Image } from './styles';
import firebase from '../../services/firebaseConnection';
import {ActivityIndicator, FlatList, RefreshControl} from 'react-native';
import ListEnviados from './../../components/ListEnviados';
import {AuthContext} from '../../contexts/auth';
import {format, set} from 'date-fns'




export default function Enviados() {


    const [valueList, setValueList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [nullList, setNullList] = useState(true);

    const {user} = useContext(AuthContext);

    

    useEffect(()=>{
        async function loadList(){
          
          setLoading(true)
          const uid = user.uid;

          const rootRef = await firebase.database().ref('historico').child(uid);
          rootRef.on('value', snap => {

          
              setValueList([]);
              snap.forEach(function(child) {
               
                  
                    let list = {
                      key: child.key,
                      nome: child.val().nome,
                      estado: child.val().estado,
                      status: child.val().status,
                      date: child.val().date,
                      medida: child.val().medida,
                      peixe: child.val().peixe,
                      rio: child.val().rio,
                      video: child.val().video
                    }

                    
                    setValueList(oldArray => [...oldArray, list].reverse());
                 
                if(valueList.video == ''){
                  setLoading(true);
                  console.log(valueList.video)
                }
                console.log(valueList.video)                
                
                setLoading(false);
                });         
              
          });
            
    
        }
    
        loadList();
      }, []);

      


      if(loading == true){
        return <ViewLoad><Image source={require('./../../assets/loadingGif.gif')} /></ViewLoad>
    }
      return(
        
        <Container>
    
        <View> 
            <Body> 
                <Text>
                    Enviados
                </Text>   
            </Body>
            
        </View>
         <ListView>
                    <FlatList 
                    showsVerticalScrollIndicator={false}
                    data= {valueList}
                    keyExtractor={(item) => item.id}
                    renderItem={({item})=>(<ListEnviados data={item} />)}
                    />
                   
        </ListView> 


    </Container>
    )
    }
    


    




