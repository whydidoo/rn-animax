import { useCallback } from 'react';
import { useColorScheme } from 'react-native';

export const useIsDarkTheme = () => {
  const scheme = useColorScheme();

  return scheme === 'dark';
};

export const useGetValueByDarkTheme = () => {
  const scheme = useColorScheme();

  const conditionalIsDark = scheme === 'dark';

  const getValueByDarkTheme = useCallback(
    <DarkValue = any, LightValue = any>(darkValue: DarkValue, lightValue: LightValue) =>
      conditionalIsDark ? darkValue : lightValue,
    [conditionalIsDark],
  );

  return {
    getValueByDarkTheme,
  };
};
