import React, { Component } from 'react';
import {
  SafeAreaView,
  Button,
  StyleSheet,
  View,
  Text,
  Modal
} from 'react-native';
import { StackNavigator } from 'react-navigation';


const HomeScreen = ({ navigation, screenProps }) => (
  <SafeAreaView>
    <Button
      title="Go to details"
      onPress={() => navigation.navigate('Details')}
    />

    <Button
      title="Go to modal"
      onPress={() => screenProps.changeModalVisibility(true)}
    />
  </SafeAreaView>
);

const DetailsScreen = ({ screenProps }) => (
  <SafeAreaView>
      <Button
        title="Go to modal"
        onPress={() => screenProps.changeModalVisibility(true)}
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


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBody: {
    padding: 20,
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 5,
  },
});


class App extends Component {
  state = {
    modalVisible: false,
  };

  changeModalVisibility = (modalVisible = false) => {
    this.setState({ modalVisible });
  }

  modalContent = () => (
    <Modal
      visible={this.state.modalVisible}
      animationType="fade"
      onRequestClose={this.changeModalVisibility}>
      <SafeAreaView style={styles.modalContainer}>
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
    </Modal>
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainAppStack
          screenProps={{ changeModalVisibility: this.changeModalVisibility }}
        />

        { this.modalContent() }
      </View>
    );
  }
}


export default App;
