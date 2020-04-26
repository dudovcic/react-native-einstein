import React, { ReactNode } from 'react';
import { Text, TextProperties } from 'react-native';

export interface Props extends TextProperties {
  children: ReactNode;
}

export default (props: Props) => {
  const { style, ...textProps } = props;
  return (
    <Text
      style={[
        {
          fontFamily: 'asparagus-regular',
          fontSize: 22,
          fontWeight: '300',
        },
        style,
      ]}
      {...textProps}
    >
      {props.children}
    </Text>
  );
};
