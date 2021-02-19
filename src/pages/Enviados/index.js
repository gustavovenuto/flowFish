import React,{useState, useEffect, useContext} from 'react';
import {View, Text, Container, Body,ListView,  Loading, AreaNull, TextNull} from './styles';
import firebase from '../../services/firebaseConnection';
import {ActivityIndicator, FlatList, RefreshControl} from 'react-native';
import ListEnviados from './../../components/ListEnviados';
import {AuthContext} from '../../contexts/auth';
import {format, set} from 'date-fns'




export default function Enviados() {


    const [valueList, setValueList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nullList, setNullList] = useState(true);

    const {user} = useContext(AuthContext);

    

    useEffect(()=>{
        async function loadList(){
          
          const uid = user.uid;

          const rootRef = firebase.database().ref('historico').child(uid);
          rootRef.on('value', snap => {
            if(snap.val() === null){
            setLoading(false);              
              
            }
              setValueList([]);
              snap.forEach(function(child) {
               
                    console.log(child)
                    let list = {
                      key: child.key,
                      nome: child.val().nome,
                      estado: child.val().estado,
                      status: child.val().status,
                      date: child.val().date,
                      medida: child.val().medida,
                      peixe: child.val().peixe,
                      rio: child.val().rio
                    }

                    
                    setValueList(oldArray => [...oldArray, list].reverse());
                 

                  
              
                setNullList(false);
                setLoading(false);
                });         
              
          });
            
    
        }
    
        loadList();
      }, []);

      


    if(loading === true){
      return(
        <Loading>
          <ActivityIndicator color="#fff"   size={40}/>
        </Loading>
      )
    }if(nullList === false){
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
                    data={valueList}
                    keyExtractor={(item) => item.id}
                    renderItem={({item})=>(<ListEnviados data={item} />)}
                    />
                   
        </ListView> 


    </Container>
    )
    }
    return(
      <AreaNull>
        <TextNull>
          Não possui nenhum !
        </TextNull>
      </AreaNull>
    )


    
}



