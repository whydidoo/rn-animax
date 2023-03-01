import { Box, Button, Divider, SafeArea, Typography } from 'components';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useGetValueByDarkTheme } from 'theme/hooks';
import ImgDark from './img_dark.svg';
import ImgLight from './img_light.svg';

export const Social: React.FC = () => {
  const { getValueByDarkTheme } = useGetValueByDarkTheme();

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

      <Button text="Sign in with password" variant="primary" />

      <Box marginTop="7" flexDirection="row" justifyContent="center">
        <Typography variant="BodyMediumRegular">Don’t have an account?</Typography>
        <TouchableWithoutFeedback>
          <Typography variant="BodyMediumRegular" color="primary500">
            {' '}
            Sign up
          </Typography>
        </TouchableWithoutFeedback>
      </Box>
    </SafeArea>
  );
};
