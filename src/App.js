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


export default class App extends React.Component {
  render() {
    return (
    );
  }
}
