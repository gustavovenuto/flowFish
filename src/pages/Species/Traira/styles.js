import styled from 'styled-components/native';





export const View = styled.View`
flex:1;
background-color: black;
`;

export const Text = styled.Text`

color: #fff;
font-size: 24px;
width:100%;
height:100%;
text-align:center;
align-items:center;
justify-content:center;
font-weight: bold;
display:flex;
font-family: Roboto;
`;


export const Container = styled.View`
flex: 1;
`;


export const Logo = styled.Image`
height: 50px;
width:50px;
`;

export const Link = styled.TouchableOpacity`
flex:1;
margin-left:10px;
margin-top:10px;
`;

export const Button = styled.Button`

`;



export const Img = styled.Image`
height:100%;
width:100%;
`;

export const TouchableOpacity = styled.TouchableOpacity`
flex:1;
border: 5px solid;
border-color: red;
`;

export const Body = styled.View`
width: 100%;
height:54px;
border-bottom-width:1px;
border-bottom-color: #fff;
flex-direction: row-reverse;
box-shadow: 0px 6px 13px rgb(115, 113, 113);
`;

export const Bodytitle = styled.View`

`;

export const TextTitle = styled.Text`
color: #fff;
border-top:30px;
justify-content: center;
align-items: center;
height: 100%;
font-size: 30px;
text-align: center;
font-family: Roboto;
`;


export const BodyRanking = styled.View`
margin-left:10px;
background-color:rgb(79, 79, 79);
border-width:1px;
border-color: #fff;
margin-right:10px;
`;

export const Name = styled.Text`
color:#fff;
`;

export const Loading = styled.View`
flex: 1;
background-color: black;
align-items: center;
justify-content: center;
`;

export const ListView = styled.View`
flex:1;
`;

export const AreaFirst = styled.View`
flex:1;
`;

export const BarraClass = styled.View`
background-color:#000;
height:30px;
justify-content:center;
flex-direction: row;
align-items: center;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
border-top-width: 3px;
border-bottom-width: 2px;
border-color: rgb(206, 129, 255);
`;

export const TextClass = styled.Text`
flex:1;
font-weight: bold;
margin-left:20px;
font-size:12px;
color: #Fff;
font-family: Roboto;
`;

export const TextClassMedida = styled.Text`
flex:1;
font-weight: bold;
margin-left:100px;
font-size:12px;
color: #fff;
font-family: Roboto;
`;


export const FlatList = styled.FlatList`
background-color: #000;
`;