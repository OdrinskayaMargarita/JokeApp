import React from 'react';

import { Text, View } from 'react-native';

import { tw } from '@lib/tailwind';

import { ButtonLike } from '../buttons/buttonLike.component';

interface IProps {
  jokeText: string;
  setup: string;
  delivery: string;
  isLike: boolean;
  idJoke: number;
}

export const JokeHistoryItemComponent: React.FC<IProps> = ({
  jokeText,
  isLike,
  setup,
  idJoke,
  delivery,
}) => {
  return (
    <View style={tw` border-b border-grey p-6`}>
      <View style={tw`flex-row items-start justify-between`}>
        <View style={tw`w-9/12`}>
          {jokeText ? <Text style={tw`font-medium text-base`}>{jokeText}</Text> : null}
          {setup.length && delivery.length ? (
            <>
              <Text style={tw`font-medium text-base`}>- {setup}</Text>
              <Text style={tw`font-medium text-base`}>- {delivery}</Text>
            </>
          ) : null}
        </View>
        <ButtonLike isSmallSize={true} isLike={isLike} idJoke={idJoke} />
      </View>
    </View>
  );
};
