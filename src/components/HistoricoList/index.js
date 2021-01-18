import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';


import {Container, Text, AreaView, Detalhe, TextStatus, RenderList} from './styles';




export default function HistoricoList({data}) {

const [exibir, setExibir] = useState(false);


function AlteraExibir(){
    if(exibir === true){
        setExibir(false);
    }else{
        setExibir(true);
    }
}

 return (
   <Container>
       <AreaView onPress={AlteraExibir}>
           <RenderList>
                <Text>
                    Nome: {data.nome}
                </Text>
                <Text>
                    Status:<TextStatus status={data.status}>{data.status}</TextStatus> 
                </Text>
                    <Detalhe view={exibir}>
                        <Text>
                            Idade: {data.idade}
                        </Text>
                        <Text>
                            cidade: {data.cidade}
                        </Text>
                    </Detalhe>
            </RenderList>
       </AreaView>
   </Container>
  );
}