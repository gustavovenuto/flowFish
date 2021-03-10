import React, {useState, useEffect, useContext} from 'react';

import Header from '../../../components/Header';
import {useNavigation} from '@react-navigation/native';

import {View, Text, Container, Logo, Link, Img, TouchableOpacity, FlatList,ListView, TextClass,AreaFirst,Body,Bodytitle, TextTitle, TextClassMedida,Loading,BodyRanking, Name, BarraClass} from './styles';
import { Button, ActivityIndicator, } from 'react-native';
import firebase from '../../../services/firebaseConnection';
import ListRankings from './../../../components/ListRankings';

import Icon from 'react-native-vector-icons/Ionicons';



export default function Traira(){

    const [valueList, setValueList] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();



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
      }
        return(
            <Container>
            
            <View> 
                <Body> 
                    <Text>
                        Classificações
                    </Text>
                    <Link onPress={()=> navigation.goBack()}>
                    <Icon
                    name="md-arrow-back"
                    size={30}
                    color='#fff'
                    />

                </Link>
                </Body>

                

                {/* <Bodytitle>
                    <TextTitle>Traira</TextTitle>
                </Bodytitle> */}
                <AreaFirst>
                  
                </AreaFirst>
                <BarraClass>
                  <TextClass>CLASSIFICAÇÃO</TextClass>
                  <TextClassMedida>MEDIDA</TextClassMedida>
                </BarraClass>
                
                <ListView>
                    <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={valueList}
                    keyExtractor={(item) => item.id}
                    renderItem={({item})=>(<ListRankings data={item} />)}
                    />
                   
                </ListView> 
            </View>
               
        </Container>
    );
}