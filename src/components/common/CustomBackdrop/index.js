import React, { useMemo } from 'react';
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';
import { useBottomSheetModal } from '@gorhom/bottom-sheet';
import { TouchableOpacity, Dimensions } from "react-native"


const CustomBackdrop = ({ animatedIndex = 1, style, onClose }) => {
    
    const { dismiss, dismissAll } = useBottomSheetModal();
    const height=Dimensions.get("screen").height
  // animated variables
  const animatedOpacity = useMemo(
    () =>
      interpolate(animatedIndex, {
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: Extrapolate.CLAMP,
      }),
    [animatedIndex]
  );

  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: '#a8b5eb',
        opacity: animatedOpacity,
      },
    ],
    [style, animatedOpacity]
  );

    return <Animated.View style={containerStyle} ><TouchableOpacity onPress={dismissAll} style={{
      height
  }}></TouchableOpacity></Animated.View >;
};

export default CustomBackdrop;
