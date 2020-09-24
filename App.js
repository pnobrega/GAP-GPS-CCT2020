import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from './MainScreen';

const navigator = createStackNavigator(
  {
    Main: MainScreen,
  },
  {
    initialRouteName:'Main',
    defaultNavigationOptions:{
      title: 'Project: GPS',
    }
  }
);

export default createAppContainer(navigator);

