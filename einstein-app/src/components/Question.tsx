import React from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsparagusText from './AsparagusText';

interface Props {
  children: string;
  styles?: StyleProp<TextStyle>;
  onPress?(): void;
}

const Question = (props: Props) => (
  <TouchableOpacity onPress={props.onPress}>
    <AsparagusText style={[styles.question, props.styles]}>
      {props.children}
    </AsparagusText>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  question: {
    fontSize: 34,
    color: 'blue',
  },
});

export default Question;
