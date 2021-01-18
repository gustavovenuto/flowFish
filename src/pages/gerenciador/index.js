import React,{useState} from 'react';
import {View, Text, Container, Body, List, ListView, ListRender, TextRender, BlocView, AreaView} from './styles';
import firebase from '../../services/firebaseConnection';
import {FlatList} from 'react-native';





const dados = [ {id: '1', nome: 'Gustavo bla bla', idade: 17, cidade: 'Franca', status: 'pendente'},
                {id: '2', nome: 'Eduardo bla bla', idade: 23, cidade: 'Franca', status: 'pendente'},
                ];





export default function Gerenciador() {
    const [exibir, setExibir] = useState(true);
    

    const alterarExibir=()=>{
      if(exibir){setExibir(false)}else(setExibir(true))
    
        console.log(exibir)    
       
        
    }

    const Pessoa = ({item})=> {
        console.log('caiu na função pessoa')
           return(
                <ListRender>
                    <BlocView onPress={alterarExibir}>
                        <TextRender> Nome: {item.nome} </TextRender>
                        <TextRender> Status: {item.status}</TextRender>
                    </BlocView>
                    {/* <AreaView>
                        <TextRender>idade: {item.idade}</TextRender>
                        <TextRender>cidade aonde mora: {item.cidade}</TextRender>
                    </AreaView> */}
                    
                    
                </ListRender>
            )
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
        <ListView>
                    <FlatList 
                    data={dados}
                    keyExtractor={(item) => item.id}
                    renderItem={Pessoa}
                    />
                    {exibir ? <TextRender>idade</TextRender> : null }
        </ListView> 

    </Container>
    )
}



