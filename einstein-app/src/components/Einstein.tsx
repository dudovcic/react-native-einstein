import React, { useState, useEffect, useRef } from 'react';
import { Image, StyleProp, ImageStyle, ImageProps } from 'react-native';

const einsteinImages = [
  require('./../assets/images/einstein/animation/_default.png'),
  require('./../assets/images/einstein/animation/blinking-1.png'),
  require('./../assets/images/einstein/animation/blinking-2.png'),
  require('./../assets/images/einstein/animation/blinking-3.png'),
  require('./../assets/images/einstein/animation/blinking-4.png'),
  require('./../assets/images/einstein/animation/blinking-5.png'),
];

interface Props {
  style?: StyleProp<ImageStyle>;
  resizeMode?: ImageProps['resizeMode'];
}

const Einstein = (props: Props) => {
  const [animationStep, setAnimationStep] = useState<number>(0);
  const animation = useRef<null | number>(null);

  useEffect(() => {
    if (animation.current) {
      clearTimeout(animation.current);
    }
    animation.current = setTimeout(
      () => {
        const nextStep = animationStep === 5 ? 0 : animationStep + 1;
        setAnimationStep(nextStep);
      },
      animationStep === 0 ? 6500 : 35
    );
  });

  return (
    <Image
      resizeMode={props.resizeMode}
      style={props.style}
      source={einsteinImages[animationStep]}
    />
  );
};

export default Einstein;
