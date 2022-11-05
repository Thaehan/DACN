import {View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from '@Store/configureStore';

import HomeScreen from '@Screens/HomeScreen';
import AppNavigator from '@Navigations/AppNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
