import React from 'react';
import {SafeAreaView} from 'react-native';
// import { HelowWorldScreen } from './src/presentation/screens/HelowWorldScreen';
import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';
import {CounterM3Screen} from './src/presentation/screens/CounterM3Screen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {BoxObjectModelScreen} from './src/presentation/screens/BoxObjectModelScreen';
import {DimensionScreen} from './src/presentation/screens/DimensionScreen';
import {PositionScreen} from './src/presentation/screens/PositionScreen';
import {FlexScreen} from './src/presentation/screens/FlexScreen';
import { FlexDirectionScreen } from './src/presentation/screens/FlexDirectionScreen';
import { HomeworkScreen1 } from './src/presentation/screens/HomeworkScreen1';
import { HomeworkScreen2 } from './src/presentation/screens/HomeworkScreen2';
import { HomeworkScreen3 } from './src/presentation/screens/HomeworkScreen3';
import { HomeworkScreen4 } from './src/presentation/screens/HomeworkScreen4';
import { HomeworkScreen5 } from './src/presentation/screens/HomeworkScreen5';
import { HomeworkScreen6 } from './src/presentation/screens/HomeworkScreen6';
import { HomeworkScreen7 } from './src/presentation/screens/HomeworkScreen7';
import { HomeworkScreen8 } from './src/presentation/screens/HomeworkScreen8';
import { HomeworkScreen9 } from './src/presentation/screens/HomeworkScreen9';
import { HomeworkScreen10 } from './src/presentation/screens/HomeworkScreen10';

export const App = () => {
  return (
    <PaperProvider settings={{icon: props => <IonIcon {...props} />}}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelowWorldScreen name="Maria Imbert"/> */}
        {/* <CounterScreen />
         */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen/> */}
        {/* <DimensionScreen/> */}
        {/* <PositionScreen/> */}
        {/* <FlexScreen/> */}
        {/* <FlexDirectionScreen/> */}
        {/* <HomeworkScreen1/> */}
        {/* <HomeworkScreen2/> */}
        {/* <HomeworkScreen3/> */}
        {/* <HomeworkScreen4/> */}
        {/* <HomeworkScreen5/> */}
        {/* <HomeworkScreen6/> */}
        {/* <HomeworkScreen7/> */}
        {/* <HomeworkScreen8/> */}
        <HomeworkScreen9/>
        {/* <HomeworkScreen10/> */}
      </SafeAreaView>
    </PaperProvider>
  );
};
