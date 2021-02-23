import React,{useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Video, AVPlaybackStatus} from 'expo-av';

import {Container, Text, AreaView, Detalhe, TextStatus, RenderList, AreaIcon, ItemRow, AreaSafe, AreaData, Button, View} from './styles';




export default function ListEnviados({data}) {

const [exibir, setExibir] = useState(false);
const [statusPlay, setStatusPlay] = React.useState({})

const video = React.useRef(null);


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
                        <Text>Video:</Text>
                        <Video
                            ref={video}
                            style={{alignSelf: 'center',
                            width: 320,
                            height: 200}}
                            source={{
                            uri: `${data.video}`,
                            }}
                            useNativeControls
                            resizeMode="contain"

                            onPlaybackStatusUpdate={statusPlay => setStatusPlay(() => statusPlay)}
                            />
                            <View>
                             <Button
                            title={statusPlay.isPlaying ? 'Pause' : 'Play'}
                            onPress={() =>
                                statusPlay.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                            }
                            /> 
                        </View>
                    </Detalhe>
            </RenderList>
       </AreaView>
   </Container>
  );
}