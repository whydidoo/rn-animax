import { Box, Button, Checkbox, Divider, Input, SafeArea, Typography } from 'components';
import React, { useCallback, useState } from 'react';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import Logo from '../svg/logo.svg';
import { useGetValueByDarkTheme } from 'theme/hooks';
import { NavigationProp, StackActions, useNavigation } from '@react-navigation/native';
import { AuthorizationStackParams } from '..';

type Navigation = NavigationProp<AuthorizationStackParams, 'Register'>;

export const Register: React.FC = () => {
  const sizeButton = 1 / 4;
  const [isRember, setIsRember] = useState(false);
  const { getValueByDarkTheme } = useGetValueByDarkTheme();
  const navigation = useNavigation<Navigation>();

  const onPressButton = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const goToLogin = useCallback(() => {
    navigation.dispatch(StackActions.replace('Login'));
  }, [navigation]);

  return (
    <ScrollView keyboardDismissMode="interactive" contentContainerStyle={style.container}>
      <SafeArea>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={style.keyboardAvoiding}>
          <Box alignItems="center" marginBottom="10">
            <Logo />

            <Typography variant="Heading3" marginTop="10">
              Create Your Account
            </Typography>
          </Box>

          <Box rowGap="5" marginBottom="5" alignItems="center">
            <Input placeholder="Email" />
            <Input placeholder="Password" secureTextEntry />
            <Checkbox check={isRember} onCheck={setIsRember} text="Remember me" />
            <Button text="Sign up" onPress={onPressButton} />
          </Box>

          <Divider text="or continue with" marginVertical="5" />

          <Box columnGap="5" flexDirection="row" justifyContent="center">
            <Box flex={sizeButton}>
              <Button variant="ounline" />
            </Box>
            <Box flex={sizeButton}>
              <Button variant="ounline" />
            </Box>
            <Box flex={sizeButton}>
              <Button variant="ounline" />
            </Box>
          </Box>

          <Box marginTop="5" flexDirection="row" justifyContent="center">
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