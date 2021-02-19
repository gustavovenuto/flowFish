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
color:#fff;
margin-left: 10px;
`;


export const AreaView = styled.TouchableOpacity`
width:100%;
border-width:1px;
border-color: #fff;
align-items: flex-start;
justify-content:flex-start;
background-color: #505050;
`;


export const Detalhe = styled.View`
width:100%;
align-items: flex-start;
justify-content:flex-start;
${props => props.view === false && 'display:none'};
`;

export const TextStatus = styled.Text`
color: ${props => props.status === 'Pendente' ? '#c62c36' : '#049301'};
margin-left: 5px;
`;

export const RenderList = styled.View`
padding: 4px;
width: 100%;
`;



export const AreaIcon = styled.View`
justify-content: center;
`;

export const ItemRow = styled.View`
flex-direction: row;
width: 100%
`;

export const AreaSafe = styled.View`
flex:1;
`;

export const AreaData = styled.View`
flex:1;
align-items: center;
justify-content: center;
`;
