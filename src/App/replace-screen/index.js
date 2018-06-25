import React from 'react';
import { SafeAreaView, Button, View } from 'react-native';
import { StackNavigator } from 'react-navigation';


const FooScreen = ({ navigation }) => (
  <View>
    <Button
      title="Go to bar"
      onPress={() => navigation.navigate('Bar')}
    />
  </View>
);

const BarScreen = ({ navigation }) => (
  <View>
    <Button
      title="Go to baz"
      onPress={() => navigation.navigate('Baz')}
    />

    <Button
      title="Replace with baz"
      onPress={() => navigation.dispatch(replaceCurrentScreen('Baz'))}
    />
  </View>
);

const BazScreen = ({ navigation }) => (
  <View>
    <Button
      title="Go back"
      onPress={() => navigation.goBack()}
    />
  </View>
);


const MainAppStack = StackNavigator({
  Foo: {
    screen: FooScreen,
    navigationOptions: {
      title: 'Foo',
    },
  },
  Bar: {
    screen: BarScreen,
    navigationOptions: {
      title: 'Bar',
    },
  },
  Baz: {
    screen: BazScreen,
    navigationOptions: {
      title: 'Baz',
    },
  },
});


const replaceCurrentScreen = (routeName, params = {}) => ({
  type: 'ReplaceCurrentScreen',
  routeName,
  params,
});

const prevGetStateForAction = MainAppStack.router.getStateForAction;
MainAppStack.router.getStateForAction = (action, state) => {
  if (state && action.type === 'ReplaceCurrentScreen') {
    const routes = state.routes.slice(0, state.routes.length - 1);
    routes.push(action);
    return {
      ...state,
      routes,
      index: routes.length - 1,
    }
  }

  return prevGetStateForAction(action, state);
}


export default MainAppStack;
