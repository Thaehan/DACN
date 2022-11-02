import {SafeAreaView, View, Text} from 'react-native';
import {Button} from 'react-native-ui-lib';

import SvgXml, {CalendarIcon} from '@Components/SvgXml';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenName from '@Configs/ScreenName';

export default function LoginScreen({
  navigation,
  route,
}: NativeStackScreenProps<any>) {
  return (
    <SafeAreaView>
      <View>
        <Text>Login Screen</Text>
      </View>
      <SvgXml xml={CalendarIcon} />
      <Button
        label="HomeScreen"
        onPress={() => {
          console.log('navigation', navigation.getState());
          navigation.navigate(ScreenName.Home);
        }}
      />
    </SafeAreaView>
  );
}
