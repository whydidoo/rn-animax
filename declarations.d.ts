declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";

  type Props = SvgProps & { children?: React.ReactNode};
  const content: React.FC<Props>;

  export default content;
}