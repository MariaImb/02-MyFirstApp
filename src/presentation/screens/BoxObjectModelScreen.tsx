import { StyleSheet } from 'react-native';
import {View, Text} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}> BoxObjectModelScreen</Text> */}
      <View style={styles.pulpleBox}>
        <Text style={{color: 'white'}}>Hola Mundo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 10,
  },
  pulpleBox: {
    height: 30,
    backgroundColor: 'purple',
    // margin: 10,
    marginHorizontal: 20,
    marginVertical: 50,
  }
})