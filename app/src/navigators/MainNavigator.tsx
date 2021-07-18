/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon, Text, useTheme } from "native-base";
import { Entypo, MaterialIcons, FontAwesome } from "@expo/vector-icons";

import RentalScreen from "../apps/Rental";
import EquipmentScreen from "../apps/Equipment";
import ResultsScreen from "../apps/Results/ResultsScreen";

export default function MainNavigator() {
  const { colors } = useTheme();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          inactiveBackgroundColor: colors.primary[600],
          activeBackgroundColor: colors.primary[700],
          labelPosition: "below-icon",
          style: {
            height: 60,
          },
        }}
      >
        <Tab.Screen
          name="Rental"
          component={RentalScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Icon as={Entypo} name="clock" color="white" />;
            },
            tabBarLabel: () => <Text color="white">Alquiler</Text>,
          }}
        />
        <Tab.Screen
          name="Equipment"
          component={EquipmentScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Icon as={MaterialIcons} name="electric-scooter" color="white" />;
            },
            tabBarLabel: () => <Text color="white">Equipos</Text>,
          }}
        />
        <Tab.Screen
          name="Results"
          component={ResultsScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Icon as={FontAwesome} name="list-alt" color="white" />;
            },
            tabBarLabel: () => <Text color="white">Resultados</Text>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
