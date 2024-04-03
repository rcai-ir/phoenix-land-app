import React, { useCallback, useImperativeHandle, ReactNode } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring,
} from 'react-native-reanimated';

import { useSelector } from 'react-redux';
import theme from '../../config/theme';

const { height: SCREEN_HEIGHT } = Dimensions.get('screen');
const MAx_TRANSLATE_Y = -SCREEN_HEIGHT + 40;

type BottomSheetProps = {
  children?: ReactNode,
};
export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
};

const BottomSheet = React.forwardRef<BottomSheetRefProps, BottomSheetProps>(({ children }, ref) => {
  const { themeMode } = useSelector((state:any) => state.globalState);
  const mode = themeMode === 'light' ? theme.light : theme.dark;

  const styles = StyleSheet.create({
    bottomSheetContainer: {
      height: SCREEN_HEIGHT,
      width: '100%',
      backgroundColor: mode.background,
      position: 'absolute',
      top: SCREEN_HEIGHT - 30,
      borderRadius: 25,
      shadowColor: mode.color,
      borderColor: 'gray',
      borderWidth: 0.4,
      shadowOffset: {
        width: 10,
        height: 0,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,
      elevation: 12,

    },
    line: {
      width: 70,
      height: 4,
      backgroundColor: '#D9D9D9',
      alignSelf: 'center',
      marginVertical: 15,
      borderRadius: 3,
    },
  });

  const translateY = useSharedValue(0);
  const active = useSharedValue(false);

  const scrollTo = useCallback((destination: number) => {
    'worklet';

    active.value = destination !== 0;
    translateY.value = withSpring(destination, { damping: 50 });
  }, []);

  const isActive = () => active.value;

  useImperativeHandle(ref, () => ({ scrollTo, isActive }), [scrollTo, isActive]);

  const context = useSharedValue({ y: 0 });
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAx_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 3) {
        scrollTo(0);
      } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
        scrollTo(MAx_TRANSLATE_Y - 5);
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAx_TRANSLATE_Y + 50, MAx_TRANSLATE_Y],
      [25, 0],
      Extrapolate.CLAMP,
    );
    return {
      borderRadius,
      transform: [{ translateY: translateY.value }],
    };
  });
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
        <View style={styles.line} />
        {children}
      </Animated.View>
    </GestureDetector>
  );
});

export default BottomSheet;
