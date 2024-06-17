import { StyleSheet, View } from "react-native"


export const HomeworkScreen6 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425b',
  },
  box: {
    height: 100,
    // width: 100,
    borderWidth: 10,
    borderColor: 'white'
  },
  purpleBox: {
    backgroundColor: "#5856d6",
    flex: 1,
  },
  orangeBox: {
    backgroundColor: "#f0a238",
    flex: 1,
  },
  blueBox: {
    backgroundColor: "#28c4d9",
    flex: 2,
  }
})