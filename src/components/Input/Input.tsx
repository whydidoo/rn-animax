import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  color,
  ColorProps,
  composeRestyleFunctions,
  spacing,
  SpacingProps,
  useRestyle,
} from '@shopify/restyle';
import React, { useCallback, useState } from 'react';
import { TextInputProps as RNTextInputProps, TextInput } from 'react-native';
import { Theme } from 'theme';
import { useGetValueByDarkTheme, useThemeApplication } from 'theme/hooks';

interface InputProps extends RNTextInputProps {}

type RestyleProps = BorderProps<Theme> & BackgroundColorProps<Theme> & ColorProps<Theme> & SpacingProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([border as any, backgroundColor, color, spacing]);

export const Input: React.FC<InputProps> = (props) => {
  const { getValueByDarkTheme } = useGetValueByDarkTheme();
  const [isFocus, setIsFocus] = useState(false);

  const changeFocus = useCallback(() => {
    setIsFocus((value) => !value);
  }, []);

  const backgroundColorInput: keyof Theme['colors'] = isFocus
    ? 'transparentGreen'
    : getValueByDarkTheme('dark2', 'greyscale50');

  const colorText: keyof Theme['colors'] = getValueByDarkTheme('othersWhite', 'greyscale900');
  const borderWidth = 1;
  const borderColor = isFocus ? 'primary500' : getValueByDarkTheme('dark2', 'greyscale50');

  const {
    colors: { greyscale500 },
  } = useThemeApplication();

  const stylesInput = useRestyle(restyleFunctions as any, {
    backgroundColor: backgroundColorInput,
    height: 56,
    borderRadius: 16,
    paddingHorizontal: '5',
    color: colorText,
    borderWidth,
    borderColor,
    width: '100%',
  });

  return (
    <TextInput
      {...props}
      {...stylesInput}
      placeholderTextColor={greyscale500}
      onFocus={changeFocus}
      onBlur={changeFocus}
    />
  );
};
