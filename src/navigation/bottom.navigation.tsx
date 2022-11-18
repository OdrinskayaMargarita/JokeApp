import React from 'react';

import { Ionicons, AntDesign } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { View, Text } from 'react-native';

import { colors, tw } from '@lib/tailwind';

import { RootStackParamList } from '../../types';
import { HistoryScreen } from '../screens/history/history.sreen';
import { TodayScreen } from '../screens/today/today.screen';

const bottomTabLayouts = (type: string, color: string) => {
  switch (type) {
    case 'Today':
      return (
        <View style={tw`min-w-10 justify-center items-center`}>
          <Ionicons name="flash-outline" size={24} color={color} />
          <Text style={tw`text-xs mt-1 text-[${color}]`}>Today</Text>
        </View>
      );
    case 'History':
      return (
        <View style={tw`min-w-10 justify-center items-center`}>
          <AntDesign name="clockcircleo" size={24} color={color} />
          <Text style={tw`text-xs mt-1 text-[${color}]`}>History</Text>
        </View>
      );
  }
};

const headerObjectWithTabBar = (type: string) => ({
  tabBarIcon: ({ focused }: any) =>
    bottomTabLayouts(type, focused ? colors.purple : colors.darkGrey),
});

const Tab = createMaterialBottomTabNavigator<RootStackParamList>();

export const BottomNavigate = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Today"
        labeled={false}
        barStyle={{
          backgroundColor: colors.white,
          height: 85,
        }}
      >
        <Tab.Screen
          name="Today"
          component={TodayScreen}
          options={() => headerObjectWithTabBar('Today')}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={() => headerObjectWithTabBar('History')}
        />
      </Tab.Navigator>
    </>
  );
};
