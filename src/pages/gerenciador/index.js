import React,{useState} from 'react';
import {View, Text, Container, Body, List, ListView, ListRender, TextRender, BlocView, AreaView} from './styles';
import firebase from '../../services/firebaseConnection';
import {FlatList} from 'react-native';
import HistoricoList from './../../components/HistoricoList';




const dados = [ {id: '1', nome: 'Gustavo bla bla', idade: 17, cidade: 'Franca', status: 'Pendente'},
                {id: '2', nome: 'Eduardo bla bla', idade: 23, cidade: 'Franca', status: 'Aprovado'},
                ];





export default function Gerenciador() {

    return(
        <Container>
            
        <View> 
            <Body> 
                <Text>
                    Gerenciador
                </Text>   
            </Body>
        </View>
        <ListView>
                    <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={dados}
                    keyExtractor={(item) => item.id}
                    renderItem={({item})=>(<HistoricoList data={item} />)}
                    />
                   
        </ListView> 

    </Container>
    )
}



