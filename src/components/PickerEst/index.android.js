import React from 'react';
import {Picker} from '@react-native-community/picker';
import {PickerView} from './styles';



export default function PickerEst({ onChange, estado}){
    return(
        <PickerView>
            <Picker
            style={{
                width: '100%',
                height: 30
            }}
            selectedValue={estado}
            onValueChange={(valor)=> onChange(valor)}
            >
                <Picker.Item  label="Selecione o Estado" value='null' color="#999999"/>
                <Picker.Item  label="Acre" value="AC" color="#131313"/>
	            <Picker.Item  label="Alagoas" value="AL" color="#131313"/>
	            <Picker.Item  label="Amapá" value="AP" color="#131313"/>
	            <Picker.Item  label="Amazonas" value="AM" color="#131313"/>
	            <Picker.Item  label="Bahia" value="BA" color="#131313"/>
	            <Picker.Item  label="Ceará" value="CE" color="#131313"/>
	            <Picker.Item  label="Distrito Federal" value="DF" color="#131313"/>
	            <Picker.Item  label="Espírito Santo" value="ES" color="#131313"/>
	            <Picker.Item  label="Goiás" value="GO" color="#131313"/>
	            <Picker.Item  label="Maranhão" value="MA" color="#131313"/>
	            <Picker.Item  label="Mato Grosso" value="MT" color="#131313"/>
	            <Picker.Item  label="Mato Grosso do Sul" value="MS" color="#131313"/>
	            <Picker.Item  label="Minas Gerais" value="MG" color="#131313"/>
	            <Picker.Item  label="Pará" value="PA" color="#131313"/>
	            <Picker.Item  label="Paraíba" value="PB" color="#131313"/>
	            <Picker.Item  label="Paraná" value="PR" color="#131313"/>
	            <Picker.Item  label="Pernambuco" value="PE" color="#131313"/>
	            <Picker.Item  label="Piauí" value="PI" color="#131313"/>
	            <Picker.Item  label="Rio de Janeiro" value="RJ" color="#131313"/>
	            <Picker.Item  label="Rio Grande do Norte" value="RN"color="#131313"/>
	            <Picker.Item  label="Rio Grande do Sul" value="RS" color="#131313"/>
	            <Picker.Item  label="Rondônia" value="RO" color="#131313"/>
	            <Picker.Item  label="Roraima" value="RR" color="#131313"/>
	            <Picker.Item  label="Santa Catarina" value="SC" color="#131313"/>
	            <Picker.Item  label="São Paulo" value="SP" color="#131313"/>
	            <Picker.Item  label="Sergipe" value="SE" color="#131313"/>
	            <Picker.Item  label="Tocantins" value="TO" color="#131313"/>
            </Picker>
                
        </PickerView>

    )
}

