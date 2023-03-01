import { ColorProps, SpacingProps } from '@shopify/restyle';
import React, { useMemo } from 'react';
import { StyleProp, ViewProps, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Theme } from 'theme';
import { useThemeApplication, useIsDarkTheme } from 'theme/hooks';

import { Box } from '../Box';

type Props = SpacingProps<Theme> & ColorProps<Theme> & { children?: React.ReactNode } & ViewProps;

export const SafeArea: React.FC<Props> = ({ children, style, ...props }) => {
  const { bottom, left, right, top } = useSafeAreaInsets();
  const isDark = useIsDarkTheme();
  const {
    colors: { othersWhite, dark1 },
  } = useThemeApplication();

  const styles: StyleProp<ViewStyle> = useMemo(() => {
    return {
      paddingLeft: left,
      paddingRight: right,
      paddingBottom: bottom,
      paddingTop: top,
      flex: 1,
      backgroundColor: isDark ? dark1 : othersWhite,
    };
  }, [bottom, dark1, isDark, left, othersWhite, right, top]);

  const listStyle = useMemo(() => [styles, style], [style, styles]);

  return (
    <Box style={listStyle} {...props}>
      {children}
    </Box>
  );
};
