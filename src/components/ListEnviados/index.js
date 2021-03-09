import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Video, AVPlaybackStatus} from 'expo-av';

import {Container, Text, AreaView, Detalhe, TextStatus, RenderList, AreaIcon,ViewLoad, ItemRow,Image, ViewExibirVideo,TextVideo,ButtonVideo,ViewContainer,AreaSafe, AreaData, Button, View} from './styles';
import { set } from 'date-fns';




export default function ListEnviados({data}) {

const [exibir, setExibir] = useState(false);
const [exibirVideo, setExibirVideo] = useState(false);

const video = React.useRef(null);


function AlteraExibir(){
    if(exibir === true){
        setExibir(false);
    }else{
        setExibir(true);
    }
}
function AlteraExibirVideo(){
    if(exibirVideo === true){
        setExibirVideo(false);
    }else{
        setExibirVideo(true);
    }
}


 return (
   <Container>
       <AreaView >
            
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
                            onPress={AlteraExibir}
                            name={exibir ? 'chevron-up' : 'chevron-down'}
                            size={20}
                            color='#fff'
                        />
                    </AreaIcon>
                </ItemRow> 
                    <Detalhe view={exibir} >
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
                        
                        <ViewExibirVideo>
                        <ButtonVideo onPress={AlteraExibirVideo}>
                            {exibirVideo ? <TextVideo>Ocultar Video</TextVideo> : <TextVideo>Exibir Video</TextVideo> }
                        </ButtonVideo>
                        </ViewExibirVideo>
                        <ViewContainer exVideo={exibirVideo}>
                        <Video 
                            
                            ref={video}
                            style={{
                            width: 320,
                            height: 200,
                            alignItems: 'center',
                            justifyContent: 'center'}}
                            source={{
                            uri: `${data.video}`,
                            }}
                            useNativeControls
                            resizeMode="contain"

                            />
                            
                        </ViewContainer>
                    </Detalhe>
            </RenderList>
       </AreaView>
   </Container>
  );
}