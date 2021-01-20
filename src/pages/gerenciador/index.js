import React,{useState, useEffect, useContext} from 'react';
import {View, Text, Container, Body, List, ListView, ListRender, TextRender, BlocView, AreaView, Texte} from './styles';
import firebase from '../../services/firebaseConnection';
import {FlatList} from 'react-native';
import HistoricoList from './../../components/HistoricoList';
import {AuthContext} from '../../contexts/auth';
import {format} from 'date-fns'




export default function Gerenciador() {


    const [cadList, setCadList] = useState([]);



    const {user} = useContext(AuthContext);

    

    useEffect(()=>{
        async function loadList(){
    
          const rootRef = firebase.database().ref().child('historico');
          rootRef.on('value', snap => {

              
              snap.forEach(function(child) {
                if (child.val()) {

                  child.forEach((child2)=> {
                    let list = {
                      nome: child2.val().nome,
                      estado: child2.val().estado
                    }

                    console.log(list)
                  })

                  
                }
                });
             
             console.log( snap.val());
              
             
          
              
          });
            
    
        }
    
        loadList();
      }, []);




    const Teste=()=>{
        console.log(cadList)
    }


    return(
        
        <Container>
    
        <View> 
            <Body> 
                <Text>
                    Gerenciador
                </Text>   
            </Body>
        </View>
        {/* <ListView>
                    <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={cadList}
                    keyExtractor={(item) => item.id}
                    renderItem={({item})=>(<HistoricoList data={item} />)}
                    />
                   
        </ListView> */}

        <Texte onPress={Teste}>
                <Text>
                    teste
                </Text>
        </Texte>

    </Container>
    )
}



