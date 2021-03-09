import { block } from 'react-native-reanimated';
import styled from 'styled-components/native';


export const Container = styled.View`
margin-bottom: 5px;
padding: 10px;
box-shadow: 2px 2px rgba(0,0,0,0.40);
background-color: rgba(0,0,0,0.02);
`;
export const Tipo = styled.View`
flex-direction: row;

`;
export const TipoText = styled.Text`

`;
export const IconView = styled.View`
flex-direction: row;
background-color: ${props=>props.tipo == 'despesa' ? '#c62c36' : '#049301'};
padding-bottom:3px;
padding-top: 3px;
padding-left: 8px;
padding-right: 8px;
border-radius: 7px;
`;
export const ValorText = styled.Text`
color: #222;
font-size: 22px;
font-weight:bold;
`;


export const Text = styled.Text`
color:black;
margin-left: 10px;
font-family: Roboto;
`;


export const AreaView = styled.View`
width:100%;
align-items: flex-start;
justify-content:flex-start;
`;


export const Detalhe = styled.View`
width:100%;
align-items: flex-start;
justify-content:flex-start;
${props => props.view === false && 'display:none'};
margin-top: 15px;
`;

export const TextStatus = styled.Text`
color: ${props => props.status === 'Pendente' ? '#c62c36' : '#049301'};
margin-left: 5px;
`;

export const RenderList = styled.View`
padding: 4px;
width: 100%;
background-color:#fff;
border-radius: 5px;
box-shadow: 0px 5px 21px rgb(114, 197, 216);
`;



export const AreaIcon = styled.View`
justify-content: center;
`;

export const ItemRow = styled.View`
flex-direction: row;
width: 100%;
`;

export const AreaSafe = styled.View`
flex:1;
`;

export const AreaData = styled.View`
flex:1;
align-items: center;
justify-content: center;
`;


export const Button = styled.Button`
flex: 1;
justify-content: center;
align-items: center;
`;

export const View = styled.View`
flex: 1;
justify-content: center;
background-color: #fff;
`;

export const Link = styled.TouchableOpacity`
color: blue;
`;

export const ViewContainer = styled.View`
flex:1;
justify-content: center;
align-items: center;
${props => props.exVideo === false && 'display:none'};
`;

export const ButtonVideo = styled.TouchableOpacity`

`;

export const TextVideo = styled.Text`
color: #000;
text-decoration: underline;
text-decoration-color: #000;
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

export const ViewExibirVideo = styled.View`
margin-left: 10px;
border:solid 1px;
border-color: #000;
padding: 5px;
`;


export const TextNome = styled.Text`
color:black;
margin-left: 10px;
font-size: 1.1em;
font-weight: bolder;
font-family: Roboto;
`;


export const AreaIconDet = styled.View`
align-items: center;
`;


export const TextData = styled.Text`
color:#696969;
margin-left: 10px;
font-size: 13px;
font-family: Roboto;
`;