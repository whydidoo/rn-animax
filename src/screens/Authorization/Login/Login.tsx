import { Box, Button, Typography } from 'components';
import React, { useRef } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const img = require('./background.png');

export const Login: React.FC = () => {
  const { bottom } = useSafeAreaInsets();
  const style = useRef({ marginBottom: bottom });

  return (
    <ImageBackground source={img} style={styles.imgBackground} resizeMode="cover">
      <Box flex={1} justifyContent="flex-end" style={style.current} alignItems="center" paddingHorizontal="6">
        <Typography variant="Heading3" color="othersWhite" marginBottom="6">
          Welcome to Animax
        </Typography>
        <Typography variant="BodyLargeMedium" color="othersWhite" textAlign="center" marginBottom="6">
          The best streaming anime app of the century to entertain you every day
        </Typography>
        <Button shape="rounded" text="Get Started" variant="primary" />
      </Box>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
  },
});
