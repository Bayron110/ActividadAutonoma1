import React, { ReactNode } from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import { styles } from '../thimi/thimiStyles';

//Definir la Interfaz
interface Props {
    children: ReactNode;
}
export const BodyComponents = ({ children}: Props) => {
    const {height}= useWindowDimensions();
  return (
    <View style={{...styles.body,
        height: height *0.88
    }}>
      {children}
    </View>
  )
}
