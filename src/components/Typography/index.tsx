import React from 'react';
import { createText, TextProps } from '@shopify/restyle';
import { Theme } from 'theme';
import { useGetValueByDarkTheme } from 'theme/hooks';

const TypographyCreator = createText<Theme>();

type Props = TextProps<Theme> & { children?: React.ReactNode };

export const Typography: React.FC<Props> = ({ children, ...props }) => {
  const { getValueByDarkTheme } = useGetValueByDarkTheme();
  const valueColor: keyof Theme['colors'] = getValueByDarkTheme('othersWhite', 'greyscale900');

  return (
    <TypographyCreator color={valueColor} {...props}>
      {children}
    </TypographyCreator>
  );
};
