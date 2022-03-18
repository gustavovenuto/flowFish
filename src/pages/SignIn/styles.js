import styled from 'styled-components/native';



export const Background = styled.View`
flex: 1;
background-color: #131313;
`;

export const Container = styled.KeyboardAvoidingView`
flex: 1;
align-items: center;
justify-content: center;
`;

export const Logo = styled.Image`
margin-bottom: 82px;
height: 165px;
width: 111px;
`;

export const AreaInput = styled.View`
flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#fff'
})`
background: rgba(0,0,0,0.20);
font-size: 17px;
width: 80vw;
color: #fff;
margin-bottom: 10px;
border-radius: 7px;
padding: 10px;
border: 1px solid #fff;
`;

export const SubmitButton = styled.TouchableOpacity`
align-items: center;
justify-content: center;
width: 50%;
height: 45px;
border-radius: 7px;
margin-top: 10px;
padding: 8px 80px;
border: 1px solid #fff;
border-radius: 30px;
`;

export const SubmitText = styled.Text`
font-size: 20px;
color: #fff;
`;

export const Link = styled.TouchableOpacity`
margin-top: 5px;
margin-bottom: 9px;
`;

export const LinkText = styled.Text`
color: #fff
`;

export const LogoText = styled.Text`
font-size:30px;
font-weight: bold;
font-style: Cooper Black;
`;

export const BodyRedefinirSenha = styled.View`
display: flex;
`;

export const BodyCadastrar = styled.View`
margin-top: 17%;
`;

export const TextRedefirSenha = styled.Text`
color: #fff;
`;
