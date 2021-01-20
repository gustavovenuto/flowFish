import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';


import {Container, Text, AreaView, Detalhe, TextStatus, RenderList, AreaIcon, ItemRow, AreaSafe, AreaData} from './styles';




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
                <ItemRow>
                    
                    <AreaSafe>
                    <Text>
                        Nome: {data.nome}
                    </Text>

                    <Text>
                        Status:<TextStatus status={data.status}>{data.status}</TextStatus> 
                    </Text>
                    </AreaSafe>
                    <AreaData>
                        <Text>Data: {data.date}</Text>
                    </AreaData>

                    <AreaIcon>
                        <Icon 
                            name={exibir ? 'chevron-up' : 'chevron-down'}
                            size={20}
                            color='#fff'
                        />
                    </AreaIcon>
                </ItemRow> 
                    <Detalhe view={exibir}>
                        <Text>
                            Peixe: {data.peixe}
                        </Text>
                        <Text>
                            Medida: {data.medida} Cm
                        </Text>
                        <Text>
                            Estado: {data.estado}
                        </Text>
                        <Text>
                            Rio: {data.rio}
                        </Text>
                    </Detalhe>
            </RenderList>
       </AreaView>
   </Container>
  );
}