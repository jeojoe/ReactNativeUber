import { StackNavigator } from 'react-navigation';

// Screens
import Home from './screens/Home';

export const MainNavigator = StackNavigator({
  Home: { screen: Home },
});
