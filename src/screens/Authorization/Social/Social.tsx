import { Box, Button, Divider, SafeArea, Typography } from 'components';
import React, { useCallback } from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { useGetValueByDarkTheme } from 'theme/hooks';
import { AuthorizationStackParams } from '..';
import ImgDark from './img_dark.svg';
import ImgLight from './img_light.svg';
import { NavigationProp, useNavigation } from '@react-navigation/native';

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

  return (
    <SafeArea>
      <Box alignItems="center" marginBottom="7">
        {getValueByDarkTheme(<ImgDark />, <ImgLight />)}
      </Box>
      <Typography variant="Heading1" textAlign="center" marginBottom="7">
        Let’s you in
      </Typography>

      <Box rowGap="4">
        <Button text="Continue with Facebook" variant="ounline" />
        <Button text="Continue with Google" variant="ounline" />
        <Button text="Continue with Apple" variant="ounline" />
      </Box>

      <Divider marginVertical="6" text="or" />

      <Button text="Sign in with password" variant="primary" onPress={goToLogin} />

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
    </SafeArea>
  );
};
