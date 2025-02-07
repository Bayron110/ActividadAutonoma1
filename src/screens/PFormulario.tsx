import React, { useState } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { styles } from '../thimi/thimiStyles';
import { TitleComponents } from '../components/TitleComponents';
import { BodyComponents } from '../components/BodyComponents';
import { ButtonComponents } from '../components/ButtonComponents';
import { InputComponent } from '../components/InputComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { TERTIARY_COLOR } from '../thimi/consts/Constans';

export const PFormulario = () => {
    const [formNum, setFormNum] = useState({ numero1: '', numero2: '' });
    const [result, setResult] = useState(''); //alamcanenar el resultado de la division

    const handleChange = (name: string, value: string) => {
        setFormNum((prevState) => ({...prevState,[name]: value,}));
    };

    const handleDivide = () => {
        const { numero1, numero2 } = formNum;
        
        const num1 = parseFloat(numero1);
        const num2 = parseFloat(numero2);
        if (num1 === 0 && num2 === 0) {
            Alert.alert("Error", "Indeterminación");
            return;
        } else if (num2 === 0) {
            Alert.alert("Error", "No existe división para cero");
            return;
        }

        if (numero1 && numero2) {
            const result = num1 / num2;
            setResult(result.toString());
        } else {
            Alert.alert('Error', 'Por favor ingrese ambos números');
        }
    };
    
    const navigation = useNavigation();

    return (
        <View style={{ backgroundColor: TERTIARY_COLOR, padding: 20 }}>
            <TitleComponents title='Formulario' />
            <BodyComponents>
                <Text style={styles.titleStar}>División</Text>
                <Text style={styles.separacion}>Ingrese el Primer Número</Text>
                <InputComponent 
                    placeholder='Número'
                    handleChange={handleChange}
                    name="numero1"
                />
                <Text style={styles.separacion}>Ingrese el Segundo Número</Text>
                <InputComponent 
                    placeholder='Número'
                    handleChange={handleChange}
                    name="numero2"
                />
                <Text style={styles.separacion}>El resultado es: {result}</Text>
                <View style={styles.separacion}>
                    <Button
                        title='Dividir'
                        onPress={handleDivide}
                    />
                </View>
                <Button
                    title='Regresar al Inicio'
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: "PInicio" }))}
                />
            </BodyComponents>
        </View>
    );
};
