import React from 'react';
import { Box } from 'components/Box';
import { Typography } from 'components/Typography';
import { Theme, ThemeColors } from 'theme';
import { BoxProps } from '@shopify/restyle';
import { useGetValueByDarkTheme } from 'theme/hooks';

interface DividerProps {
  text?: string;
}

export const Divider: React.FC<DividerProps & BoxProps<Theme>> = ({ text, ...props }) => {
  const { getValueByDarkTheme } = useGetValueByDarkTheme();
  const textContent = text ? (
    <Box backgroundColor={getValueByDarkTheme('dark1', 'othersWhite')} alignSelf="center">
      <Typography marginHorizontal="4" variant="BodyXLargeSemiBold" textAlign="center">
        {text}
      </Typography>
    </Box>
  ) : null;

  const dividerColor: ThemeColors = getValueByDarkTheme('dark3', 'greyscale200');

  return (
    <Box {...props} position="relative" justifyContent="center" height={45}>
      <Box position="absolute" height={1} backgroundColor={dividerColor} width="100%" />
      {textContent}
    </Box>
  );
};
