import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  text: string;
};

const index = (props: Props) => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
};

export default index;
