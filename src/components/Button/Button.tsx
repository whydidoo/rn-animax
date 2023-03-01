import React from 'react';
import { Box } from 'components/Box';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, TouchableOpacityProps } from 'react-native';
import { GenericTouchableProps } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
import { Theme } from 'theme';
import { useGetValueByDarkTheme } from 'theme/hooks';
import { BorderProps } from '@shopify/restyle';
import { Typography } from 'components/Typography';

type ButtonShape = 'default' | 'rounded';
type ButtonVariant = 'primary' | 'ounline' | 'secondary';

interface ButtonProps {
  fullWidth?: boolean;
  shape?: ButtonShape;
  variant?: ButtonVariant;
  text?: string;
}

type Props = TouchableOpacityProps & GenericTouchableProps & TouchableOpacityProps;

export const Button: React.FC<Props & ButtonProps> = ({
  fullWidth = true,
  shape = 'default',
  variant = 'primary',
  text,
  ...props
}) => {
  const height = 58;
  const width = fullWidth ? '100%' : height;
  const borderRadius = shape === 'default' ? 16 : 100;
  const { containerStyleFullWidth, containerStyle } = styleButton;
  const borderProps = {} as BorderProps<Theme>;
  const { getValueByDarkTheme } = useGetValueByDarkTheme();
  let colorButton: keyof Theme['colors'] = 'primary500';
  let textColor: keyof Theme['colors'] = 'othersWhite';

  if (variant === 'ounline') {
    colorButton = getValueByDarkTheme('dark2', 'othersWhite');
    borderProps.borderColor = getValueByDarkTheme('dark3', 'greyscale200');
    borderProps.borderWidth = 1;
    textColor = getValueByDarkTheme('othersWhite', 'greyscale900');
  }

  if (variant === 'secondary') {
    colorButton = getValueByDarkTheme('dark3', 'primary100');
    textColor = getValueByDarkTheme('othersWhite', 'primary500');
  }

  const styleTouchableContainer = fullWidth ? containerStyleFullWidth : containerStyle;
  const textContent = text ? (
    <Typography variant="BodyLargeBold" textAlign="center" color={textColor}>
      {text}
    </Typography>
  ) : null;

  return (
    <TouchableOpacity {...props} containerStyle={styleTouchableContainer} activeOpacity={0.9}>
      <Box
        backgroundColor={colorButton}
        width={width}
        paddingHorizontal="4"
        borderRadius={borderRadius}
        height={height}
        justifyContent="center"
        {...borderProps}
      >
        {textContent}
      </Box>
    </TouchableOpacity>
  );
};

const styleButton = StyleSheet.create({
  containerStyleFullWidth: {
    width: '100%',
    height: 58,
  },
  containerStyle: {
    height: 58,
  },
});
