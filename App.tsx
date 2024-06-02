import React from 'react';
import {SafeAreaView} from 'react-native';
// import { HelowWorldScreen } from './src/presentation/screens/HelowWorldScreen';
import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';
import IonIcon from 'react-native-vector-icons/Ionicons'

export const App = () => {
  return (
    <PaperProvider
    settings={{icon: (props) => <IonIcon {...props}/>}}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelowWorldScreen name="Maria Imbert"/> */}
        {/* <CounterScreen />
         */}
        <CounterM3Screen />
      </SafeAreaView>
    </PaperProvider>
  );
};
