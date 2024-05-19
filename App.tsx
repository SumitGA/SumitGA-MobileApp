import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import UserLogin from './src/screens/UserLogin';
import {StyleSheet, Text} from 'react-native';

const App: React.ElementType = () => {
  const Drawer = createDrawerNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator>
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
