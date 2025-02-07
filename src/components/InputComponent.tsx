import React from 'react';
import { TextInput } from 'react-native';
import { styles } from '../thimi/thimiStyles';

interface Props {
    placeholder: string;
    handleChange: (name: string, value: string) => void;
    name: string;
}

export const InputComponent = ({ placeholder, handleChange, name }: Props) => {
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType='numeric'
            onChangeText={(value) => handleChange(name, value)}
            style={styles.inputText}
        />
    );
}
