import { Box, Button, Checkbox, Divider, Input, SafeArea, Typography } from 'components';
import React, { useCallback, useState } from 'react';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Keyboard, StyleSheet } from 'react-native';
import Logo from '../svg/logo.svg';
import { useGetValueByDarkTheme } from 'theme/hooks';
import { NavigationProp, StackActions, useNavigation } from '@react-navigation/native';
import { AuthorizationStackParams } from '..';
import IconMessage from 'components/Icons/BoldMessage.svg';
import BoldLock from 'components/Icons/BoldLock.svg';
import BoldHide from 'components/Icons/BoldHide.svg';
import { SocialButtons } from '../components';
import { BackButton } from 'routers/components';

type Navigation = NavigationProp<AuthorizationStackParams, 'Register'>;

export const Register: React.FC = () => {
  const [isRember, setIsRember] = useState(false);
  const { getValueByDarkTheme } = useGetValueByDarkTheme();
  const navigation = useNavigation<Navigation>();
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const onPressButton = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const goToLogin = useCallback(() => {
    navigation.dispatch(StackActions.replace('Login'));
  }, [navigation]);

  const changeViewPassword = useCallback(() => {
    setSecureTextEntry((value) => !value);
  }, []);

  return (
    <SafeArea>
      <ScrollView
        keyboardDismissMode="interactive"
        contentContainerStyle={style.container}
        showsVerticalScrollIndicator={false}
      >
        <BackButton />
        <Box alignItems="center">
          <Logo />
        </Box>

        <Typography variant="Heading3" textAlign="center">
          Create Your Account
        </Typography>

        <Box rowGap="6" alignItems="center">
          <Input placeholder="Email" iconLeft={<IconMessage />} />
          <Input
            placeholder="Password"
            secureTextEntry={secureTextEntry}
            iconLeft={<BoldLock />}
            iconRight={<BoldHide />}
            onPressRightIcon={changeViewPassword}
          />
          <Checkbox check={isRember} onCheck={setIsRember} text="Remember me" />
          <Button text="Sign up" onPress={onPressButton} shape="rounded" />
        </Box>

        <Box>
          <Divider text="or continue with" marginBottom="5" />
          <SocialButtons />
        </Box>

        <Box flexDirection="row" justifyContent="center">
          <Typography variant="BodyMediumRegular" color={getValueByDarkTheme('othersWhite', 'greyscale500')}>
            Already have an account?
          </Typography>
          <TouchableWithoutFeedback onPress={goToLogin}>
            <Typography variant="BodyMediumRegular" color="primary500">
              {' '}
              Sign in
            </Typography>
          </TouchableWithoutFeedback>
        </Box>
      </ScrollView>
    </SafeArea>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
