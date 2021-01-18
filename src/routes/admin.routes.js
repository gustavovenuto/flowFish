import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import {createStackNavigator} from '@react-navigation/stack';

import Traira from '../pages/Species/Traira';
import TucunaAzul from '../pages/Species/TucunareAz';
import TucunaAmarelo from '../pages/Species/TucunareAm';
import Home from '../pages/Home';
import Ranking from '../pages/Ranking';
import Profile from '../pages/Profile';
import Gerenciador from '../pages/gerenciador';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const icons = {
  Home: {
    name: 'ios-home'
  },
  Ranking:{
    name: 'md-podium'
  },
  Gerenciador: {
    name: 'ios-document'
  },
  Perfil:{
    name: 'ios-people'
  }
};

function Tabs(){
  return(
   
      <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size}) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        } 
      }) }
      tabBarOptions={{
        style:{
          backgroundColor: '#121212'
        },
        labelStyle: {
          fontSize: 13,
          marginBottom: 2,
          
        },
        activeTintColor: '#FFF',
      }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Ranking" component={Ranking} />
        <Tab.Screen name="Gerenciador" component={Gerenciador} />
        <Tab.Screen name="Perfil" component={Profile} />
      </Tab.Navigator>
   
  );
}


export default function App(){
  return(
  
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Tabs} options={{headerShown: false}}/>
      <Stack.Screen name="Traira" component={Traira} options={{headerShown: false}}/>
      <Stack.Screen name="TucunaAzul" component={TucunaAzul} options={{headerShown: false}}/>
      <Stack.Screen name="TucunaAmarelo" component={TucunaAmarelo} options={{headerShown: false}}/>
    </Stack.Navigator>
     
 
  );
}