import { Box, Button } from 'components';
import React from 'react';

import Facebook from 'components/Icons/Facebook.svg';
import Google from 'components/Icons/Google.svg';
import AppleWhiteTheme from 'components/Icons/AppleWhiteTheme.svg';
import AppleDarkTheme from 'components/Icons/AppleDarkTheme.svg';

import { useGetValueByDarkTheme } from 'theme/hooks';

export const SocialButtons: React.FC = () => {
  const sizeButton = 1 / 4;
  const { getValueByDarkTheme } = useGetValueByDarkTheme();

  const appleIcon = getValueByDarkTheme(<AppleDarkTheme />, <AppleWhiteTheme />);

  return (
    <Box columnGap="5" flexDirection="row" justifyContent="center">
      <Box flex={sizeButton}>
        <Button variant="ounline" leftIcon={<Facebook />} />
      </Box>
      <Box flex={sizeButton}>
        <Button variant="ounline" leftIcon={<Google />} />
      </Box>
      <Box flex={sizeButton}>
        <Button variant="ounline" leftIcon={appleIcon} />
      </Box>
    </Box>
  );
};
