import { useColorScheme } from 'react-native';

export const useIsDarkTheme = () => {
  const scheme = useColorScheme();

  return scheme === 'dark';
};
