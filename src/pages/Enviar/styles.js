import styled from 'styled-components/native';


export const View = styled.View`
flex:1;
background-color: black;
`;

export const Text = styled.Text`
color: #fff;
margin-top: 10px;
margin-bottom: 5px;
font-size: 20px;
`;


export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: '#999999'
})`
height: 30px;
border-width:1px;
border-color: #fff;
font-size: 13px;
background-color: rgba(255,255,255, 0.9);
`;

export const SubmitButton = styled.Button`
flex:1;
margin-top: 30px;
`;


export const TextTitle = styled.Text`
color: #fff;
font-size: 24px;
width:100%;
height:100%;
text-align:center;
align-items:center;
justify-content:center;
font-weight: bold;
display:flex;
`;

export const ContainerPicker = styled.View`
align-items:center;
margin-top:15px;
`;

export const BodySafe = styled.View`
width:85%;
`;

export const BodyButtton = styled.View`
margin-top: 30px;
border-width:1px;
border-color:#fff;
`;

export const Body = styled.View`
width: 100%;
height:54px;
border-bottom-width:1px;
border-bottom-color: #fff;
`;

export const Scroll = styled.ScrollView`

`;


export const SelectVideo = styled.TouchableOpacity`
border-width: 1px;
border-color: #fff;
height: 40px;
width: 120px;
align-items: center;
justify-content: center;
`;

export const TextSelectVideo = styled.Text`
color: #fff;
margin-bottom: 5px;
`;


export const AreaIcon = styled.View`
justify-content: center;
align-items: center;
margin-left: 10px;
border-width: 1px;
border-color: #fff;
width: 80;
height: 80;
${props => props.view == false && 'display:none'}
`;

export const AreaVideo = styled.View`
flex-direction: row;
`;

export const CancelVideo = styled.TouchableOpacity`
height: 100%;
width: 100%;
align-items: flex-end;
`;

export const IconVideo = styled.View`
position: absolute;
`;


export const ViewLoad = styled.View`
flex: 1;
justify-content: center;
background-color:black;
`;

export const Image = styled.Image`
height: 100%;
width: 100%;
`;
