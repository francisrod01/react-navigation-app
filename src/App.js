import React from 'react';
import { SafeAreaView, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';


const HomeScreen = ({ navigation }) => (
  <SafeAreaView>
    <Button
      title="Go to details"
      onPress={() => navigation.navigate('Details')}
    />

    <Button
      title="Go to modal"
      onPress={() => navigation.navigate('Modal')}
    />
  </SafeAreaView>
);

const DetailsScreen = ({ navigation }) => (
  <SafeAreaView>
      <Button
        title="Go to modal"
        onPress={() => navigation.navigate('Modal')}
      />
    </SafeAreaView>
);

const ModalScreen = () => (
  <SafeAreaView>
    <Button
      title="Close modal"
      onPress={() => null}
    />
  </SafeAreaView>
);

const MainAppStack = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home Screen',
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      title: 'Details',
    },
  },
});

const RootNavigator = StackNavigator({
  MainApp: {
    screen: MainAppStack,
  },
  Modal: {
    screen: ModalScreen,
  },
}, {
  mode: 'modal'
});


export default MainAppStack;
