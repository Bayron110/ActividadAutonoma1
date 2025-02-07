import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../thimi/thimiStyles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    PFormulario: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'PFormulario'>;

interface Props {
    title: string;
}

export const ButtonComponents = ({ title }: Props) => {
    const navigation = useNavigation<NavigationProps>();

    return (
        <TouchableOpacity
            style={styles.buttonFrom}
            onPress={() => navigation.navigate('PFormulario')}
        >
            <Text style={styles.buttonForText}>{title}</Text>
        </TouchableOpacity>
    );
};
