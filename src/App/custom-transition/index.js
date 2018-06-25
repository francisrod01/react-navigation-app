import React from 'react';
import { SafeAreaView, Button, Text, Easing, Animated } from 'react-native';
import { StackNavigator } from 'react-navigation';


const HomeScreen = ({ navigation }) => (
  <SafeAreaView>
    <Text>Home screen</Text>

    <Button
      title="Go to details"
      onPress={() => navigation.navigate('Details')}
    />
  </SafeAreaView>
);

const DetailsScreen = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#7FB7BE' }}>
    <Text>Details screen</Text>

    <Button
      title="Go back"
      onPress={() => navigation.goBack()}
    />
  </SafeAreaView>
);

const MainAppStack = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      title: 'Details',
    },
  },
}, {
  transitionConfig: () => {
    return {
      transitionSpec: {
        duration: 750,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      }
    }
  }
});


export default MainAppStack;
