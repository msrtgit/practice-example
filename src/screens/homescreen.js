import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Hello im HomeScreen!</Text>
      {/* <Button
        onPress={() => navigation.navigate('Settings')}
        title="Go to Settings"
      /> */}
       {/* <Buttonit tle="Open drawer" onPress={() => navigation.openDrawer()} /> */}
        <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      <StatusBar style="auto" />
    </View>
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