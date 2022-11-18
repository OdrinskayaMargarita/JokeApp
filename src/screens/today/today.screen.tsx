import { View, Text, SafeAreaView } from 'react-native';

import { tw } from '@lib/tailwind';

import { ButtonLike } from '../../components/buttons/buttonLike.component';
import { HeaderTitle } from '../../components/headers/header.component';
import { useGetTodayJoke } from '../../hooks/useGetTodayJoke.hook';
import { useAppSelector } from '../../store/configureStore';

export const TodayScreen = () => {
  useGetTodayJoke();

  const { listJokes } = useAppSelector(({ joke }) => joke);

  if (!listJokes.length) return <></>;

  const { idJoke, isLike, setup, delivery, joke } = listJokes[listJokes.length - 1];

  return (
    <SafeAreaView style={tw`w-full h-full bg-white`}>
      <HeaderTitle title="Today" />
      <View style={tw`flex-1 justify-center px-6`}>
        {listJokes.length ? (
          <>
            {joke.length ? <Text style={tw`text-2xl font-semibold mb-4`}>{joke}</Text> : null}
            {setup && delivery ? (
              <>
                <Text style={tw`text-2xl font-semibold mb-4`}>- {setup}</Text>
                <Text style={tw`text-2xl font-semibold mb-4`}>- {delivery}</Text>
              </>
            ) : null}
          </>
        ) : null}
        <ButtonLike idJoke={idJoke} isLike={isLike} />
      </View>
    </SafeAreaView>
  );
};
