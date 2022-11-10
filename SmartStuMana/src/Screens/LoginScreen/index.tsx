import {SafeAreaView, View, Text, StyleSheet, TextInput} from 'react-native';
import {Button} from 'react-native-ui-lib';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

import SvgXml, {CalendarIcon} from '@Components/SvgXml';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenName from '@Configs/ScreenName';
import {setAccount} from '@Store/Reducers/accountSlice';
import {IRootState} from '@Store/configureStore';
import accountApi from '@Api/accountApi';

export default function LoginScreen({
  navigation,
  route,
}: NativeStackScreenProps<any>) {
  const dispatch = useDispatch();
  const account = useSelector((state: IRootState) => state.account);

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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

  const onPressLogin = async () => {
    // try {
    //   const res = await accountApi.validateAccount(username, password);
    //   console.log('validate', res);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Login Screen</Text>
      </View>
      <SvgXml xml={CalendarIcon} />
      <View>
        <Text>{`username: ${account.username}, userId: ${account.userId}, token: ${account.token}`}</Text>
      </View>
      <TextInput
        style={styles.textField}
        onChangeText={(text: string) => {
          setUsername(text);
        }}
      />
      <TextInput
        style={styles.textField}
        onChangeText={(text: string) => {
          setPassword(text);
        }}
      />
      <Button label="Login" onPress={onPressLogin} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textField: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 5,
  },
});
