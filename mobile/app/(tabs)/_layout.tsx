import { lighttheme } from '@/constants/colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: lighttheme.BACKGROUND,
            }

        }}
    >
      <Tabs.Screen name="dashboard"
            options={{
                tabBarIcon: ({ focused} : { focused : boolean }) => (
                    focused ? (<Feather name="home" size={24} color={lighttheme.PRIMARY} />) : (<Feather name="home" size={24} color={lighttheme.MUTED_FOREGROUND} />)
                )
            }}
        />
      <Tabs.Screen name="sms-page"
          options={{
              tabBarIcon: ({ focused} : { focused : boolean }) => (
                  focused ? (<Feather name="message-square" size={24} color={lighttheme.PRIMARY} />) : (<Feather name="message-square" size={24} color={lighttheme.MUTED_FOREGROUND} />)
              )
          }}
      />
      <Tabs.Screen name="report"
          options={{
              tabBarIcon: ({ focused} : { focused : boolean }) => (
                  focused ? (<AntDesign name="barschart" size={24} color={lighttheme.PRIMARY} />) : (<AntDesign name="barschart" size={24} color={lighttheme.MUTED_FOREGROUND} />)
              )
          }}
      />
      <Tabs.Screen name="history"
          options={{
              tabBarIcon: ({ focused} : { focused : boolean }) => (
                  focused ? (<Feather name="credit-card" size={24} color={lighttheme.PRIMARY} />) : (<Feather name="credit-card" size={24} color={lighttheme.MUTED_FOREGROUND} />)
              )
          }}
      />
      <Tabs.Screen name="setting"
          options={{
              tabBarIcon: ({ focused} : { focused : boolean }) => (
                  focused ? (<Octicons name="gear" size={24} color={lighttheme.PRIMARY} />) : (<Octicons name="gear" size={24} color={lighttheme.MUTED_FOREGROUND} />)
              )
          }}
      />
    </Tabs>
  );

}