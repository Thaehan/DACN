import {SafeAreaView, View, Text} from 'react-native';
import {Button} from 'react-native-ui-lib';
import {useDispatch, useSelector} from 'react-redux';

import SvgXml, {CalendarIcon} from '@Components/SvgXml';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenName from '@Configs/ScreenName';
import {IRootState} from '@Store/configureStore';
import {resetAccount} from '@Store/Reducers/accountSlice';
import accountApi from '@Api/accountApi';

export default function HomeScreen({
  navigation,
  route,
}: NativeStackScreenProps<any>) {
  const dispatch = useDispatch();
  const {username, userId, token} = useSelector(
    (state: IRootState) => state.account,
  );

  const onPress = () => {
    dispatch(resetAccount());
    navigation.navigate(ScreenName.Login);
  };

  const onPressGetData = async () => {
    try {
      const res = await accountApi.getAllAsync();
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Text>{`username: ${username}, userId: ${userId}, token: ${token}`}</Text>
      </View>
      <Button label="Logout" onPress={onPress} />
      <Button label="Get data" onPress={onPressGetData} />
    </SafeAreaView>
  );
}
