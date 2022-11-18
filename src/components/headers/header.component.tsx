import React from 'react';

import { View, Text } from 'react-native';

import { tw } from '@lib/tailwind';

interface IProps {
  title: string;
}

export const HeaderTitle: React.FC<IProps> = ({ title }) => {
  return (
    <View style={tw`px-6 pb-6 border-b border-grey pt-18`}>
      <Text style={tw`text-4xl font-bold`}>{title}</Text>
    </View>
  );
};
