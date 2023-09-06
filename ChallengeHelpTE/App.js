import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PaginaIncial from './App/Screens/PaginaInicial/Page'
import Login from './App/Screens/Login/Page';
import Cadastro from './App/Screens/Cadastro/Page';
import Dialogo from './App/Screens/Dialogo/Page';
import Home from './App/Screens/Home/Page';
import Linguagem from './App/Screens/Cadastro/Linguagem/Page';
import Termos from './App/Screens/Cadastro/Termos/Page';


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='PaginaInicial' 
        screenOptions={{
          gestureEnabled: true,
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
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