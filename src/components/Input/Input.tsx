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
import { Box } from 'components/Box';
import React, { ReactNode, ReactSVGElement, useCallback, useState } from 'react';
import { TextInputProps as RNTextInputProps, TextInput } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Theme, ThemeColors } from 'theme';
import { useGetValueByDarkTheme, useThemeApplication } from 'theme/hooks';

interface InputProps extends RNTextInputProps {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onPressLeftIcon?: () => void;
  onPressRightIcon?: () => void;
}

type RestyleProps = BorderProps<Theme> & BackgroundColorProps<Theme> & ColorProps<Theme> & SpacingProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([border as any, backgroundColor, color, spacing]);

export const Input: React.FC<InputProps> = ({ iconLeft, iconRight, onPressLeftIcon, onPressRightIcon, ...props }) => {
  const { getValueByDarkTheme } = useGetValueByDarkTheme();
  const [isFocus, setIsFocus] = useState(false);

  const changeFocus = useCallback(() => {
    setIsFocus((value) => !value);
  }, []);

  const backgroundColorInput: ThemeColors = isFocus ? 'transparentGreen' : getValueByDarkTheme('dark2', 'greyscale50');

  const colorText: ThemeColors = getValueByDarkTheme('othersWhite', 'greyscale900');
  const borderWidth = 1;
  const borderColor = isFocus ? 'primary500' : getValueByDarkTheme('dark2', 'greyscale50');

  const {
    colors: { greyscale500, primary500 },
  } = useThemeApplication();

  const stylesInput = useRestyle(restyleFunctions as any, {
    backgroundColor: backgroundColorInput,
    height: 56,
    borderRadius: 16,
    paddingLeft: iconLeft ? '12' : '5',
    paddingRight: iconLeft ? '12' : '5',
    color: colorText,
    borderWidth,
    borderColor,
    width: '100%',
  });

  const colorIcon = isFocus ? primary500 : greyscale500;

  const iconLeftContent = iconLeft ? (
    <Box zIndex={2} position="absolute" left={20}>
      <TouchableWithoutFeedback onPress={onPressLeftIcon}>
        {React.cloneElement(iconLeft as ReactSVGElement, {
          fill: colorIcon,
        })}
      </TouchableWithoutFeedback>
    </Box>
  ) : null;

  const iconRightContent = iconRight ? (
    <Box zIndex={2} position="absolute" right={20}>
      <TouchableWithoutFeedback onPress={onPressRightIcon}>
        {React.cloneElement(iconRight as ReactSVGElement, {
          fill: colorIcon,
        })}
      </TouchableWithoutFeedback>
    </Box>
  ) : null;

  return (
    <Box width="100%" position="relative" justifyContent="center">
      {iconLeftContent}
      <TextInput
        {...props}
        {...stylesInput}
        placeholderTextColor={greyscale500}
        onFocus={changeFocus}
        onBlur={changeFocus}
      />
      {iconRightContent}
    </Box>
  );
};
