import React from 'react';

import { Feather, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { handleLikeChange } from '../../reducers/joke.slice';
import { useAppDispatch } from '../../store/configureStore';

interface IProps {
  isSmallSize?: boolean;
  isLike?: boolean;
  idJoke: number;
}

export const ButtonLike: React.FC<IProps> = ({ isSmallSize, isLike, idJoke }) => {
  const dispatch = useAppDispatch();

  return (
    <TouchableOpacity
      style={tw`rounded-full items-center justify-center ${isLike ? 'bg-purple' : 'bg-purple/20'} ${
        isSmallSize ? 'w-12 h-12' : 'w-16 h-16'
      }`}
      onPress={() => dispatch(handleLikeChange(idJoke))}
    >
      {isLike ? (
        <FontAwesome name="heart" size={24} color={colors.white} />
      ) : (
        <Feather name="heart" size={24} color={colors.purple} />
      )}
    </TouchableOpacity>
  );
};
