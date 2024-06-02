import {useState} from 'react';
import {StyleSheet, Text, View, Pressable, Platform} from 'react-native';
import {PrimaryButton} from '../components/shared/PrimaryButton';
import {Button} from 'react-native-paper';

export const CounterScreen = () => {
  let [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>

      {/* <PrimaryButton
        label="incrementar"
        onPress={() => {
          setCount(count + 1);
        }}
        onLongPress={() => {
          setCount(0);
        }}></PrimaryButton> */}
      <Button
        mode="contained"
        onPress={() => {
          setCount(count + 1);
        }}
        onLongPress={() => {
          setCount(0);
        }}>
        Incrementar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
});
