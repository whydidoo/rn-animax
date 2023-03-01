import { useTheme } from '@shopify/restyle';
import { Theme } from '..';

export const useThemeApplication = () => {
  return useTheme<Theme>();
};
