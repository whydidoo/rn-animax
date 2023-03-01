import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Box, Button, Typography } from 'components';
import React, { useCallback, useRef } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthorizationStackParams } from '..';

const img = require('./background.png');

type Props = NavigationProp<AuthorizationStackParams, 'Start'>;

export const Start: React.FC = () => {
  const { bottom } = useSafeAreaInsets();
  const style = useRef({ marginBottom: bottom });
  const navigation = useNavigation<Props>();

  const goToSocial = useCallback(() => {
    navigation.navigate('Social');
  }, [navigation]);

  return (
    <ImageBackground source={img} style={styles.imgBackground} resizeMode="cover">
      <Box flex={1} justifyContent="flex-end" style={style.current} alignItems="center" paddingHorizontal="6">
        <Typography variant="Heading3" color="othersWhite" marginBottom="6">
          Welcome to Animax
        </Typography>
        <Typography variant="BodyLargeMedium" color="othersWhite" textAlign="center" marginBottom="6">
          The best streaming anime app of the century to entertain you every day
        </Typography>
        <Button shape="rounded" text="Get Started" variant="primary" onPress={goToSocial} />
      </Box>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
  },
});
