import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Video, AVPlaybackStatus} from 'expo-av';
import {View, Button, Container} from './styles';




export default function PlayVideo(videoPlay){

    const [statusPlay, setStatusPlay] = React.useState({})

    const video = React.useRef(null);

    return(
        <Container>
            <Video
            ref={video}
            style={{alignSelf: 'center',
            width: 320,
            height: 200}}
            source={{
            uri: `${videoPlay}`,
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
    </Container>
    )
}