import React,{useState, useEffect, useContext} from 'react';
import {View, Text, Container, Body, List, ListView, ListRender, TextRender, BlocView, AreaView, Texte, TextTitle, Title, Loading} from './styles';
import firebase from '../../services/firebaseConnection';
import {ActivityIndicator, FlatList, RefreshControl} from 'react-native';
import HistoricoList from './../../components/HistoricoList';
import {AuthContext} from '../../contexts/auth';





export default function Gerenciador() {


    const [valueList, setValueList] = useState([]);
    const [loading, setLoading] = useState(true);


    const {user} = useContext(AuthContext);

    

    useEffect(()=>{
        async function loadList(){
    
          const rootRef = firebase.database().ref().child('historico');
          rootRef.on('value', snap => {

              setValueList([]);
              snap.forEach(function(child) {
                if (child.val()) {
                  
                  child.forEach((child2)=> {
                    let list = {
                      key: child2.key,
                      nome: child2.val().nome,
                      estado: child2.val().estado,
                      status: child2.val().status,
                      date: child2.val().date,
                      medida: child2.val().medida,
                      peixe: child2.val().peixe,
                      rio: child2.val().rio,
                      video: child2.val().video
                    }
                    
                    setValueList(oldArray => [...oldArray, list].reverse());
                  })

                  
                }
                
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
    }else{
      return(
        
        <Container>
    
        <View> 
            <Body> 
                <Text>
                    Gerenciador
                </Text>   
            </Body>
            <Title>
                    <TextTitle>Análise para Ranking</TextTitle>
            </Title>
        </View>
         <ListView>
                    <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={valueList}
                    keyExtractor={(item) => item.id}
                    renderItem={({item})=>(<HistoricoList data={item} />)}
                    />
                   
        </ListView> 


    </Container>
    )
    }


    
}



