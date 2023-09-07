import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import PaginaIncial from './App/Screens/PaginaInicial/Page'
import Login from './App/Screens/Login/Page';
import Cadastro from './App/Screens/Cadastro/Page';
import Dialogo from './App/Screens/Dialogo/Page';
import Home from './App/Screens/Home/Page';
import Linguagem from './App/Screens/Cadastro/Linguagem/Page';
import Termos from './App/Screens/Cadastro/Termos/Page';
import './App/language/i18n';
import { useEffect } from 'react';


export default function App() {

  useEffect(() => {
    
  }, []);

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Linguagem' 
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
          options={{
            headerShown : false
          }}
        />

      <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown : false
          }}
        />

      <Stack.Screen
          name='Linguagem'
          component={Linguagem}
          options={{
            headerShown : false
          }}
        />

      <Stack.Screen
          name='Termos'
          component={Termos}
          options={{
            headerShown : false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}