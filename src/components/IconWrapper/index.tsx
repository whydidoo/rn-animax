import React from 'react';
import { Box } from 'components/Box';
import { SvgProps } from 'react-native-svg';
import { ThemeColors } from 'theme';
import { useGetValueByDarkTheme, useThemeApplication } from 'theme/hooks';

type Props = {
  children: React.ReactElement;
  fill?: ThemeColors;
  stroke?: ThemeColors;
  typeUseColor?: 'stroke' | 'fill';
};

export const IconWrapper: React.FC<Omit<SvgProps, 'children' | 'fill' | 'stroke'> & Props> = ({
  children,
  fill,
  stroke,
  typeUseColor = 'fill',
  ...props
}) => {
  const { getValueByDarkTheme } = useGetValueByDarkTheme();
  const defaultColor: ThemeColors = getValueByDarkTheme('othersWhite', 'greyscale900');
  const { colors } = useThemeApplication();
  const fillColor = fill ? colors[fill] : colors[defaultColor];
  const strokeColor = stroke ? colors[stroke] : colors[defaultColor];

  const childCopy = children
    ? React.cloneElement(children, {
        ...props,
        fill: typeUseColor === 'fill' ? fillColor : undefined,
        stroke: typeUseColor === 'stroke' ? strokeColor : undefined,
      })
    : null;

  return <Box>{childCopy}</Box>;
};
