import React from 'react';
import {Picker} from '@react-native-community/picker';
import {PickerView} from './styles';



export default function Pickerf({ onChange, peixe}){
    return(
        <PickerView>
            <Picker
            style={{
                width: '100%',
                height: 30
            }}
            selectedValue={peixe}
            onValueChange={(valor)=> onChange(valor)}
            >
            <Picker.Item label="Selecione a espécie" value='null' color="#ddd"/>
            <Picker.Item label="Tucunaré Azul" value="tucunareazul"/>
            <Picker.Item label="Tucunaré Amarelo" value="tucunareamarelo"/>
            <Picker.Item label="Traira" value="traira"/>
            </Picker>
                
        </PickerView>

    )
}

