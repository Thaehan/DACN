import {SafeAreaView, View, Text} from 'react-native';
import {Button} from 'react-native-ui-lib';
import {useDispatch, useSelector} from 'react-redux';

import SvgXml, {CalendarIcon} from '@Components/SvgXml';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenName from '@Configs/ScreenName';
import {setAccount} from '@Store/Reducers/accountSlice';
import {IRootState} from '@Store/configureStore';

export default function LoginScreen({
  navigation,
  route,
}: NativeStackScreenProps<any>) {
  const dispatch = useDispatch();
  const {username, userId, token} = useSelector(
    (state: IRootState) => state.account,
  );

  const onPress = () => {
    dispatch(
      setAccount({
        userId: '061101',
        username: 'Thaehan',
        token: 'lkadfjlrre-rers-2',
      }),
    );
    navigation.navigate(ScreenName.Home);
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Login Screen</Text>
      </View>
      <SvgXml xml={CalendarIcon} />
      <View>
        <Text>{`username: ${username}, userId: ${userId}, token: ${token}`}</Text>
      </View>
      <Button label="HomeScreen" onPress={onPress} />
    </SafeAreaView>
  );
}
