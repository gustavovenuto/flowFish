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
            <Picker.Item label="Selecione a espécie" value='null' color="#999999"/>
            <Picker.Item label="Tucunaré Azul" value="Tucunaré Azul"/>
            <Picker.Item label="Tucunaré Amarelo" value="Tucunaré Amarelo"/>
            <Picker.Item label="Traira" value="Traira"/>
            </Picker>
                
        </PickerView>

    )
}

