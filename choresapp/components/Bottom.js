import React from 'react';
 
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
 
const Bottom = () => {
  return (
    <SafeAreaView>
        <View style={styles.containerMain}>
        <View style={styles.bottomView}>
          <Text style={styles.textStyle}>choresApp.com</Text>
        </View>
        </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    width: '100%',
    height: 50,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0, 
  },
  textStyle: {
    color: 'darkgreen',
    fontSize: 18,
  },
});
export default Bottom;