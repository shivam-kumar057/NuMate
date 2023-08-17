import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
//import { navigate, navigationRef } from './app/navigation/navigatonService';
const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();
// Feed Screen
const FeedScreen = (props) => {
  return (
    <View style={styles.mainScreen}>
      <Text style={styles.name}>React-navigation/bottom-tabs</Text>
      <Button
        title='Profile'
        onPress={() => navigate('FeedDetails')}
      />
    </View>
  );
};
const FeedDetailsScreen = (props) => {
  return (
    <View style={styles.mainScreen}>
      <Text style={styles.name}>Feed Details Screen with Hide Tab Bar</Text>
    </View>
  );
};
const FeedStackNavigation = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={'Home'}
      headerShown={false}
    >
      <HomeStack.Screen
        name={'Home'}
        component={FeedScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name={'FeedDetails'}
        component={FeedDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}
// Notification Screen
const NotificationScreen = (props) => {
  return (
    <View style={styles.mainScreen}>
      <Text style={styles.name}>Notification Screen</Text>
    </View>
  );
};
// Settings Screen
const SettingsScreen = (props) => {
  return (
    <View style={styles.mainScreen}>
      <Text style={styles.name}>Settings Screen</Text>
    </View>
  );
};
const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator>
        <Tab.Screen
          name="Feed"
          component={FeedStackNavigation}
          options={({ route }) => ({
            tabBarStyle: ((route) => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? ""
              console.log(routeName)
              if (routeName === 'FeedDetails') {
                return { display: "none" }
              }
              return
            })(route),
          })}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarStyle: { display: "none" },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// Just some styles
const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 20,
  },
});
export default App;