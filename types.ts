import { NavigatorScreenParams } from '@react-navigation/native';

export interface IStore {
  joke: {
    listJokes: [] | ItemJokeList[];
  };
}

export interface ItemJokeList {
  joke: string;
  setup: string;
  delivery: string;
  date: string;
  idJoke: number;
  isLike: boolean;
}

export type RootStackParamList = {
  Dashboard: NavigatorScreenParams<RootTabParamList> | undefined;
  Today: undefined;
  History: undefined;
};

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};
