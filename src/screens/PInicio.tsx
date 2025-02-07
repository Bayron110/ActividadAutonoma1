import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../thimi/thimiStyles';
import { TitleComponents } from '../components/TitleComponents';
import { BodyComponents } from '../components/BodyComponents';
import { ButtonComponents } from '../components/ButtonComponents';
import { TERTIARY_COLOR } from '../thimi/consts/Constans';

export const PInicio = () => {
return (

    <View style={{backgroundColor: TERTIARY_COLOR}}>
            <StatusBar backgroundColor='white'/>
            <TitleComponents
            title='Bienvenido'/>
        <BodyComponents>
            <Text style={[styles.titleStar, styles.separacion]} > Aplicaciones Móviles </Text>
            <Image
            source={{
                uri:"https://www.qualitydevs.com/wp-content/uploads/2021/03/Desarrollo-apps-moviles.jpg"
            }} style={styles.imagenCentro}/>
            <View style={styles.separacion}>
            <ButtonComponents title='Acceder'/>
            </View>
        </BodyComponents>
    </View>
)
}
