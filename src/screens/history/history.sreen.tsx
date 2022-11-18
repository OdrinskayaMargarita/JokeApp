import { SafeAreaView, ScrollView, View } from 'react-native';

import { tw } from '@lib/tailwind';

import { HeaderTitle } from '../../components/headers/header.component';
import { JokeHistoryItemComponent } from '../../components/jokeHistory/jokeHistoryItem.component';
import { useAppSelector } from '../../store/configureStore';

export const HistoryScreen = () => {
  const { listJokes } = useAppSelector(({ joke }) => joke);

  return (
    <SafeAreaView>
      <ScrollView style={tw`h-full`}>
        <HeaderTitle title="History" />
        <View style={tw`flex-col-reverse`}>
          {listJokes.map(({ joke, setup, delivery, isLike, idJoke }, key) => (
            <JokeHistoryItemComponent
              jokeText={joke}
              setup={setup}
              delivery={delivery}
              isLike={isLike}
              idJoke={idJoke}
              key={key}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
