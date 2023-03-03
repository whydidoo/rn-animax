import { useNavigation } from '@react-navigation/native';
import { BoxProps } from '@shopify/restyle';
import { Box, IconWrapper } from 'components';
import ArrowRight from 'components/Icons/LightOutlineArrowLeft.svg';
import React, { ReactNode } from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Theme } from 'theme';

type Props = BoxProps<Theme> & {
  children?: ReactNode;
};

export const BackButton: React.FC<Props> = ({ children, ...props }) => {
  const navigation = useNavigation();

  return (
    <Box {...props} flexDirection="row" height={48} alignItems="center">
      <TouchableWithoutFeedback onPress={navigation.goBack}>
        <IconWrapper>
          <ArrowRight />
        </IconWrapper>
      </TouchableWithoutFeedback>

      {children}
    </Box>
  );
};
