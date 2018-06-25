import React from 'react';
import { SafeAreaView, Button, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const FavoritesScreen = ({ navigation }) => (
  <SafeAreaView>
    <Text>Hello from the favorite tab</Text>

    <Button
      title="Open Modal"
      onPress={() => navigation.navigate('Modal')}
    />
  </SafeAreaView>
);

const RecentsScreen = ({ navigation }) => (
  <SafeAreaView>
    <Text>Hello from the recents tab</Text>
  </SafeAreaView>
);

const MainApp = TabNavigator({
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      title: 'Favorites',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons color={tintColor} name="star" size={26} />
    },
  },
  New: {
    screen: View,
    navigationOptions: ({ navigation }) => ({
      title: 'New',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons color={tintColor} name="plus" size={26} />,
      tabBarOnPress: () => {
        navigation.navigate('Modal')
      },
    }),
  },
  Recents: {
    screen: RecentsScreen,
    navigationOptions: {
      title: 'Recents',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons color={tintColor} name="clock" size={26} />
    },
  },
});


const ModalScreen = ({ navigation }) => (
  <SafeAreaView>
    <Button
      title="Close modal"
      onPress={() => navigation.goBack(null)}
    />
  </SafeAreaView>
);

const RootNavigator = StackNavigator({
  MainApp: {
    screen: MainApp,
  },
  Modal: {
    screen: ModalScreen,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});


export default RootNavigator;
