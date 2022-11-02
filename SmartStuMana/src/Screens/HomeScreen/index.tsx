import {SafeAreaView, View, Text} from 'react-native';
import {Button} from 'react-native-ui-lib';

import SvgXml, {CalendarIcon} from '@Components/SvgXml';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenName from '@Configs/ScreenName';

export default function HomeScreen({
  navigation,
  route,
}: NativeStackScreenProps<any>) {
  return (
    <SafeAreaView>
      <View>
        <Text>HomeScreen</Text>
      </View>
      <Button
        label="Login"
        onPress={() => {
          console.log('navigation', navigation.getState());
          navigation.navigate(ScreenName.Login);
        }}
      />
    </SafeAreaView>
  );
}
