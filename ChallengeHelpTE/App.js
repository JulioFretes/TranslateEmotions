import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PaginaIncial from './App/Screens/PaginaInicial/Page'
import Login from './App/Screens/Login/Page';
import Cadastro from './App/Screens/Cadastro/Page';


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='PaginaInicial'>
        <Stack.Screen
          name='PaginaInicial'
          component={PaginaIncial}
          options={{
            headerShown : false
          }}
        />

      <Stack.Screen
          name='Login'
          component={Login}
        />

      <Stack.Screen
          name='Cadastro'
          component={Cadastro}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
