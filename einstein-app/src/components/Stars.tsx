import React from 'react';
import { View, Image, ImageProps, StyleProp, StyleSheet } from 'react-native';

const STAR = {
  small: require('../assets/images/chat-star-small-grey.png'),
  big: require('../assets/images/chat-star-big-grey.png'),
};

interface StarProps {
  big?: boolean;
  style?: StyleProp<ImageProps>;
}

const Star = ({ big, style }: StarProps) => (
  <Image style={style} source={big ? STAR.big : STAR.small} />
);

interface Props {}

export default (_props: Props) => (
  <View style={styles.container}>
    <Star />
    <Star big={true} />
    <Star />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: 100,
    height: 50,
    marginBottom: -22,
    transform: [{ scale: 0.5 }],
  },
  star: {},
});
