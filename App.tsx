import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';


const App: React.ElementType = () => {

  return (
    <SafeAreaView style={styles.root}>
      <Text>Welcome to my Portfolio</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
