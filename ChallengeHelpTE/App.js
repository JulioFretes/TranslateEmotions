import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import PaginaIncial from './App/Screens/PaginaInicial/Page'
import Login from './App/Screens/Login/Page';
import Cadastro from './App/Screens/Cadastro/Page';
import TextoInput from './App/Screens/TextoInput/Page';
import Dialogo from './App/Screens/Dialogo/Page';
import Home from './App/Screens/Home/Page';
import Linguagem from './App/Screens/Cadastro/Linguagem/Page';
import Termos from './App/Screens/Cadastro/Termos/Page';
import './App/language/i18n';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { changeLanguage } from 'i18next';
import Historico from './App/Screens/Historico/Page';
import DetalhesHistorico from './App/Screens/Detalhes/Page';


export default function App() {

  useEffect(() => {
    getLinguagem()
  }, []);

  const getLinguagem = async () => {
    const resultado =  await AsyncStorage.getItem('linguagem');
    resultado !== null ? changeLanguage(resultado) : changeLanguage('en');
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='PaginaInicial' 
        screenOptions={{
          gestureEnabled : true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
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

      <Stack.Screen
          name='Dialogo'
          component={Dialogo}
        />

      <Stack.Screen
          name='Home'
          component={Home}
        />

      <Stack.Screen
          name='Linguagem'
          component={Linguagem}
        />

      <Stack.Screen
          name='Termos'
          component={Termos}
        />

      <Stack.Screen
          name='TextoInput'
          component={TextoInput}
          options={{
            headerTitle : 'Diálogo por texto'
          }}
        />

        <Stack.Screen
          name='Histórico'
          component={Historico}
        />

      <Stack.Screen
          name='DetalhesHistorico'
          component={DetalhesHistorico}
          options={{
            // headerShown : false,
            cardStyleInterpolator : CardStyleInterpolators.forVerticalIOS,
            gestureDirection : 'vertical'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}