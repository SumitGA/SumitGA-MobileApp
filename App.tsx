import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import UserLogin from './src/screens/UserLogin';
import HomePage from './src/screens/HomePage';
import {StyleSheet, Text} from 'react-native';
import MenuIcon from './src/components/MenuIcon';
import MenuContent from './src/components/MenuContent';
import { useWindowDimensions } from 'react-native';

const App: React.ElementType = () => {
  const Drawer = createDrawerNavigator();

  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
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
        >
          <Drawer.Screen name='Home' component={HomePage} />
          <Drawer.Screen name='UserLogin' component={UserLogin} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
