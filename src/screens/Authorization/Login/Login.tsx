import { Box, Button, Checkbox, Divider, Input, SafeArea, Typography } from 'components';
import React, { useCallback, useState } from 'react';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import Logo from '../svg/logo.svg';
import { useGetValueByDarkTheme } from 'theme/hooks';
import { NavigationProp, StackActions, useNavigation } from '@react-navigation/native';
import { AuthorizationStackParams } from '..';
import IconMessage from 'components/Icons/BoldMessage.svg';
import BoldLock from 'components/Icons/BoldLock.svg';
import BoldHide from 'components/Icons/BoldHide.svg';
import { SocialButtons } from '../components';

type Navigation = NavigationProp<AuthorizationStackParams, 'Login'>;

export const Login: React.FC = () => {
  const [isRember, setIsRember] = useState(false);
  const { getValueByDarkTheme } = useGetValueByDarkTheme();
  const navigation = useNavigation<Navigation>();
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const onPressButton = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const goToRegister = useCallback(() => {
    navigation.dispatch(StackActions.replace('Register'));
  }, [navigation]);

  const changeViewPassword = useCallback(() => {
    setSecureTextEntry((value) => !value);
  }, []);

  return (
    <ScrollView keyboardDismissMode="interactive" contentContainerStyle={style.container}>
      <SafeArea>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={style.keyboardAvoiding}>
          <Box alignItems="center" marginBottom="10">
            <Logo />

            <Typography variant="Heading3" marginTop="10">
              Login to Your Account
            </Typography>
          </Box>

          <Box rowGap="5" marginBottom="2" alignItems="center">
            <Input placeholder="Email" iconLeft={<IconMessage />} />
            <Input
              placeholder="Password"
              secureTextEntry={secureTextEntry}
              iconLeft={<BoldLock />}
              iconRight={<BoldHide />}
              onPressRightIcon={changeViewPassword}
            />
            <Checkbox check={isRember} onCheck={setIsRember} text="Remember me" />
            <Button text="Sign in" onPress={onPressButton} />
            <TouchableWithoutFeedback>
              <Typography variant="BodyMediumRegular" color="primary500">
                Forgot the password?
              </Typography>
            </TouchableWithoutFeedback>
          </Box>

          <Divider text="or continue with" marginVertical="3" />
          <SocialButtons />

          <Box marginTop="7" flexDirection="row" justifyContent="center">
            <Typography variant="BodyMediumRegular" color={getValueByDarkTheme('othersWhite', 'greyscale500')}>
              Don’t have an account?
            </Typography>
            <TouchableWithoutFeedback onPress={goToRegister}>
              <Typography variant="BodyMediumRegular" color="primary500">
                {' '}
                Sign up
              </Typography>
            </TouchableWithoutFeedback>
          </Box>
        </KeyboardAvoidingView>
      </SafeArea>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  keyboardAvoiding: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
  },
});
