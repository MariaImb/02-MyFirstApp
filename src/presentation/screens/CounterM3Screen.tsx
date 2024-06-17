import {useState} from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {globalStyles} from '../theme/global.styles';
import {FAB} from 'react-native-paper';

export const CounterM3Screen = () => {
  let [count, setCount] = useState(0);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      {/* <Icon name="accessibility-outline" size={25}></Icon> */}
      <FAB
        style={globalStyles.fab}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        icon="add"
      />
    </View>
  );
};
