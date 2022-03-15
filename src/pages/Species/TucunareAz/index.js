import React, {useState, useEffect,useContext} from 'react';

import Header from '../../../components/Header';
import {useNavigation} from '@react-navigation/native';
import firebase from '../../../services/firebaseConnection';

import {View, Text, Container, Logo, Link, Img, TouchableOpacity, Body, Bodytitle, TextTitle, BodyRanking, Name, Loading} from './styles';
import { Button } from 'react-native';
import {ActivityIndicator} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



export default function TucunaAzul(){

    const [valueList, setValueList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadList(){
    
          const rootRef = firebase.database().ref().child('historico');
          rootRef.on('value', snap => {
              //console.log(snap.val());

              setValueList([]);
              snap.forEach(function(child) {
                  //console.log(child.val());
                if (child.val()) {
                    const array = Object.values( child.val() );
                    const aprovados = array.filter(pescador => pescador.status == "Aprovado" && pescador.peixe == "Tucunaré Azul");

                    console.log(aprovados);
                  
                  aprovados.forEach((aprovado)=> {
                    let list = {
                      key: aprovado.key,
                      nome: aprovado.nome,
                      medida: aprovado.medida,
                      peixe: aprovado.peixe,
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

    const navigation = useNavigation();

    if(loading === true){
        return(
          <Loading>
            <ActivityIndicator color="#fff"   size={40}/>
          </Loading>
        )
      }else{return(
            <Container>
            
            <View> 
                <Body> 
                    <Text>
                        Ranking
                    </Text>
                </Body>

                <Link onPress={()=> navigation.goBack()}>

                    <Icon
                    name="md-arrow-back"
                    size={30}
                    color='#fff'
                    />

                </Link>

                <Bodytitle>
                    <TextTitle>Tucunaré Azul</TextTitle>
                </Bodytitle>

                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <table style={{display: 'block'}}>
                        <tr style={{display: 'flex', color: 'white'}}>
                            <th style={{width: '95px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Classificação</th>
                            <th style={{width: '95px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Pescador</th>
                            <th style={{width: '95px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Medida</th>
                        </tr>
                        {valueList.map(( listValue, index ) => {
                            return (
                                <tr style={{display: 'flex', border: '1px solid white'}} key={index}>
                                    <td style={{width: '95px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}}>{index+1}</td>
                                    <td style={{width: '95px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}}>{listValue.nome}</td>
                                    <td style={{width: '95px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}}>{listValue.medida}</td>
                                </tr>
                            );
                        })}
                       
                       {/*  <tr style={{display: 'flex', border: '1px solid white'}}>
                            <td style={{width: '95px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}}>2</td>
                            <td style={{width: '95px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}}>Paulo</td>
                            <td style={{width: '95px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}}>56cm</td>
                        </tr> */}
                    </table>
                </div>
                
                {/* <BodyRanking>
                    <Name>1- Gustavo</Name>
                    <Name>Medida: 47cm</Name>
                </BodyRanking> */}
            </View>
               {/*  <TouchableOpacity onPress={() => navigation.goBack()}>
            
                    <Img
                     source={require('./logo2.png')}
                    />
                </TouchableOpacity> */}
        </Container>
    )};
}