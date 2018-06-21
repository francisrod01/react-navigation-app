import React from 'react';
import { SafeAreaView } from 'react-native';
import { StackNavigator } from 'react-navigation';


const HomeScreen = ({ navigation }) => (
  <SafeAreaView>
    <Button
      title="Go to details"
      onPress={() => navigation.navigate('Details')}
    />
  </SafeAreaView>
);

const DetailsScreen = () => (
  <SafeAreaView>
      <Button
        title="Go to modal"
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


export default MainAppStack;
