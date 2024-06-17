import {StyleSheet, View} from 'react-native';

export const HomeworkScreen3 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 100,
    width: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    alignSelf: 'flex-end',
  },
  orangeBox: {
    backgroundColor: '#f0a238',
    alignSelf: 'flex-start',
  },
  blueBox: {
    backgroundColor: '#28c4d9',
  },
});
