import React from 'react';
import { Modal, View, Button, TextInput } from 'react-native';
import AsparagusText from './AsparagusText';

interface Props {
  show: boolean;
  onClose(): void;
  inputValue: string;
  onChange(t: string): void;
  onClose(): void;
}

export default (props: Props) => (
  <Modal visible={props.show} animationType="slide" transparent={true}>
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 100,
      }}
    >
      <View
        style={{
          backgroundColor: 'white',
          height: 200,
          width: 300,
          padding: 20,
          borderRadius: 20,
        }}
      >
        <AsparagusText>
          What's the API url ? ( needed in order to get questions )
        </AsparagusText>
        <TextInput
          selectTextOnFocus={true}
          style={{
            borderWidth: 1,
            borderColor: 'grey',
            marginTop: 10,
            height: 30,
          }}
          value={props.inputValue}
          onChangeText={props.onChange}
        />
        <View style={{ marginTop: 'auto' }}>
          <Button color="orange" title="Close" onPress={props.onClose} />
        </View>
      </View>
    </View>
  </Modal>
);
