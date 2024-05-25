import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import UserLogin from './src/screens/UserLogin';
import HomePage from './src/screens/HomePage';
import {PermissionsAndroid, StyleSheet, Text} from 'react-native';
import MenuIcon from './src/components/MenuIcon';
import MenuContent from './src/components/MenuContent';
import { useWindowDimensions } from 'react-native';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

const App: React.ElementType = () => {
  const Drawer = createDrawerNavigator();

  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  const MyTheme = {
    ...DefaultTheme, 
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(150, 100, 255)',
    }, 
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Drawer.Navigator
          screenOptions={{
            headerShown: true, 
            headerLeft: () => <MenuIcon />,
            drawerStyle: {
              width: 200,
            },
            swipeEnabled: true
          }}
          drawerContent={(props) => <MenuContent {...props} />}
          backBehavior='history'
          initialRouteName='Home'
        >
          <Drawer.Screen name='Home' component={HomePage}/>
          <Drawer.Screen name='Education and Certification' component={UserLogin}/>
          <Drawer.Screen name='Experience' component={UserLogin} />
          <Drawer.Screen name='Projects' component={UserLogin} />
          <Drawer.Screen name='Contact and Resume' component={UserLogin} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
