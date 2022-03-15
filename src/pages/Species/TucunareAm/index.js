import React, {useState, useEffect, useContext} from 'react';

import Header from '../../../components/Header';
import firebase from '../../../services/firebaseConnection';
import {useNavigation} from '@react-navigation/native';

import {View, Text, Container, Logo, Link, Img, TouchableOpacity, Body, Bodytitle, TextTitle, BodyRanking, Name, Loading} from './styles';
import {ActivityIndicator} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
//import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
//import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';



export default function TucunaAmarelo(){

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
                    const aprovados = array.filter(pescador => pescador.status == "Aprovado" && pescador.peixe == "Tucunaré Amarelo");

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
      }else{
        return(
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
                    <Img source={require('../../../assets/trofeu.png')}/>
                    <TextTitle>Tucunaré Amarelo</TextTitle>
                </Bodytitle>
                
                {/* <DataTable>
                    <DataTable.Header>
                    <DataTable.Title>Name</DataTable.Title>
                    <DataTable.Title>Email</DataTable.Title>
                    <DataTable.Title numeric>Age</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                    <DataTable.Cell>John</DataTable.Cell>
                    <DataTable.Cell>john@kindacode.com</DataTable.Cell>
                    <DataTable.Cell numeric>33</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                    <DataTable.Cell>Bob</DataTable.Cell>
                    <DataTable.Cell>test@test.com</DataTable.Cell>
                    <DataTable.Cell numeric>105</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                    <DataTable.Cell>Mei</DataTable.Cell>
                    <DataTable.Cell>mei@kindacode.com</DataTable.Cell>
                    <DataTable.Cell numeric>23</DataTable.Cell>
                    </DataTable.Row>

                </DataTable> */}

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
        );
    }
}