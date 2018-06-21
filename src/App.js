import React, { Component } from 'react';
import { SafeAreaView, Button, View, Text } from 'react-native';
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
    <View style={styles.modalBody}>
      <Text>
        This is my modal, there are many like it but this one is mine.
      </Text>

      <Button
        title="Close modal"
        onPress={() => this.changeModalVisibility(false)}
      />
    </View>
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
  headerMode: 'none',
  mode: 'modal'
});


class App extends Component {
  state = {
    modalVisible: false,
  };

  changeModalVisibility = (modalVisible = false) => {
    this.setState({ modalVisible });
  }

  render() {
    return ();
  }
}


export default App;
