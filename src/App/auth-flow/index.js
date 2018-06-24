import React from 'react';
import { AsyncStorage, View, Text } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import SignUpScreen from './screens/SignUp';
import SignInScreen from './screens/SignIn';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';


const checkAuth = () => {
  return new Promise(async (resolve, reject) => {
    const isAuthorized = await AsyncStorage.getItem('authorized');
    if (isAuthorized) {
      resolve(true);
    }
    else {
      reject(false);
    }
  });
}

const AuthStack = StackNavigator({
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      title: 'Sign Up',
    }
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      title: 'Sign In',
    }
  }
});

const PrimaryApp = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Icon name="home" size={26} color={tintColor} />
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon name="user" size={26} color={tintColor} />
      }
    }
  }
);


class App extends React.Component {
  state = {
    isAuthorized: false,
    checkingInitialAuth: true,
  };

  async componentDidMount() {
    const isAuthorized = await checkAuth();
    this.setState({
      isAuthorized,
      checkingInitialAuth: false,
    });
  }

  signIn = () => {
    this.setState({ isAuthorized: true });
    AsyncStorage.setItem('authorized', 'true');
  }

  signOut = () => {
    this.setState({ isAuthorized: false });
    AsyncStorage.removeItem('authorized');
  }

  render() {
    const { isAuthorized, checkingInitialAuth } = this.state;

    if (checkingInitialAuth) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Loading...</Text>
        </View>
      );
    }
    else if (isAuthorized) {
      return <PrimaryApp screenProps={{ signOut: this.signOut }} />;
    }
    else {
      return <AuthStack screenProps={{ signIn: this.signIn }} />;
    }
  }
}

export default App;

// export default AuthStack;
// export default PrimaryApp;
