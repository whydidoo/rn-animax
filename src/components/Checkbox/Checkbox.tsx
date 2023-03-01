import { Box } from 'components/Box';
import { Typography } from 'components/Typography';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import { useThemeApplication } from 'theme/hooks';
import Check from './check.svg';

interface CheckboxProps {
  check: boolean;
  onCheck: (value: boolean) => void;
  text?: string;
}

const AnimatedBox = Animated.createAnimatedComponent(Box);

export const Checkbox: React.FC<CheckboxProps> = ({ check, onCheck, text }) => {
  const {
    colors: { primary500 },
  } = useThemeApplication();
  const valueAnimate = useSharedValue(Number(check));

  const onCheckCallback = () => {
    onCheck(!check);
    valueAnimate.value = withTiming(Number(!check), {
      duration: 300,
    });
  };

  const circleAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(valueAnimate.value, [0, 1], ['transparent', primary500]),
    };
  }, [valueAnimate]);

  const opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(valueAnimate.value, [0, 1], [0, 1]),
    };
  }, [valueAnimate]);

  return (
    <TouchableOpacity onPress={onCheckCallback} activeOpacity={0.9}>
      <Box flexDirection="row" width="auto" alignItems="center">
        <AnimatedBox
          width={24}
          height={24}
          borderWidth={3}
          borderColor="primary500"
          borderRadius={8}
          style={circleAnimatedStyle}
          alignItems="center"
          justifyContent="center"
        >
          <AnimatedBox style={opacityStyle}>
            <Check />
          </AnimatedBox>
        </AnimatedBox>
        {text ? (
          <Typography variant="BodyMediumSemiBold" paddingLeft="3">
            {text}
          </Typography>
        ) : null}
      </Box>
    </TouchableOpacity>
  );
};
