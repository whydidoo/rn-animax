import { Box, Button, Divider, SafeArea, Typography } from 'components';
import React, { useCallback } from 'react';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { useGetValueByDarkTheme } from 'theme/hooks';
import { AuthorizationStackParams } from '..';
import ImgDark from './img_dark.svg';
import ImgLight from './img_light.svg';

import Facebook from 'components/Icons/Facebook.svg';
import Google from 'components/Icons/Google.svg';
import AppleWhiteTheme from 'components/Icons/AppleWhiteTheme.svg';
import AppleDarkTheme from 'components/Icons/AppleDarkTheme.svg';

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BackButton } from 'routers/components';
import { StyleSheet } from 'react-native';

type Navigation = NavigationProp<AuthorizationStackParams, 'Social'>;

export const Social: React.FC = () => {
  const { getValueByDarkTheme } = useGetValueByDarkTheme();
  const { navigate } = useNavigation<Navigation>();

  const goToLogin = useCallback(() => {
    navigate('Login');
  }, [navigate]);

  const goToRegister = useCallback(() => {
    navigate('Register');
  }, [navigate]);

  const appleIcon = getValueByDarkTheme(<AppleDarkTheme />, <AppleWhiteTheme />);

  return (
    <SafeArea>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.container}>
        <BackButton />
        <Box alignItems="center">{getValueByDarkTheme(<ImgDark />, <ImgLight />)}</Box>
        <Typography variant="Heading1" textAlign="center" marginBottom="7">
          Let’s you in
        </Typography>

        <Box rowGap="4">
          <Button text="Continue with Facebook" variant="ounline" leftIcon={<Facebook />} />
          <Button text="Continue with Google" variant="ounline" leftIcon={<Google />} />
          <Button text="Continue with Apple" variant="ounline" leftIcon={appleIcon} />
        </Box>

        <Box>
          <Divider marginVertical="6" text="or" />
          <Button text="Sign in with password" variant="primary" onPress={goToLogin} shape="rounded" />
        </Box>

        <Box flexDirection="row" justifyContent="center" marginTop="6">
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
