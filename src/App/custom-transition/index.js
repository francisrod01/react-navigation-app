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
      },
      screenInterpolator: interpolator,
      headerTitleInterpolator: interpolator,
      headerLeftInterpolator: interpolator,
      headerRightInterpolator: interpolator,
    }
  }
});

const interpolator = (sceneProps) => {
  const { layout, position, scene } = sceneProps;

  const opacity = position.interpolate({
    inputRange: [scene.index - 1, scene.index, scene.index + 1],
    outputRange: [0, 1, 0],
  });

  const scale = position.interpolate({
    inputRange: [scene.index - 1, scene.index, scene.index + 1],
    outputRange: [0.8, 1, 1],
  });

  const height = layout.initHeight;
  const translateY = position.interpolate({
    inputRange: [scene.index - 1, scene.index, scene.index + 1],
    outputRange: [height, 0, 0],
  });

  return {
    opacity,
    // transform: [
    //   { scale },
    //   { translateY },
    // ]
  }
}


export default MainAppStack;
