import { createStackNavigator } from '@react-navigation/stack';
import { PInicio } from '../screens/PInicio';
import { PFormulario } from '../screens/PFormulario';

export type RootStackParams = {
  PInicio: undefined,
  PFormulario: undefined,
}
const Stack = createStackNavigator<RootStackParams>();

export const NavigatorScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='PInicio'
      options={{headerShown: false}}
      component={PInicio}/>
      <Stack.Screen
      options={{headerShown: false}}
      name="PFormulario" component={PFormulario}/>
    </Stack.Navigator>
  );
};
