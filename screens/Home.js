import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import CartScreen from "./CartScreen";
import UploadScreen from "./UploadScreen";
import ActivityScreen from "./ActivityScreen";
import ProfileScreen from "./ProfileScreen";
import SubmittedScreen from "./SubmittedScreen";

export default function Home({navigation}) {

    const Tab = createBottomTabNavigator();

    return (   
        <Tab.Navigator
        screenOptions={
          ({route}) => ({
              tabBarIcon : ({focused, size, color}) => {
                  let iconName;
                  if(route.name === "HomeScreen") {
                      iconName = focused ? "home" : 'home-sharp';
                      size = focused ? size+7 : size+5;
                  }
                  else if(route.name === "Cart") {
                      iconName = focused ? "cart" : 'cart-sharp';
                      size = focused ? size+7 : size+5;
                  }
                  else if(route.name === "Upload") {
                      iconName = focused ? "add-circle" : 'add-circle-sharp';
                      size = focused ? size+7 : size+5;
                  }
                  else if(route.name === "Activity") {
                      iconName = focused ? "heart" : 'heart-sharp';
                      size = focused ? size+7 : size+5;
                  }
                  else if(route.name === "Profile") {
                      iconName = focused ? "person" : 'person-sharp';
                      size = focused ? size+7 : size+5;
                  }
                  return <Ionicons name={iconName} size={size} color={color} />
              },
              tabBarActiveTintColor: 'red',
              tabBarActiveBackgroundColor: 'white',
              tabBarInactiveBackgroundColor: 'white',
              tabBarShowLabel: false,
              tabBarStyle: {
                  backgroundColor: "#ffffff",
                  borderRadius: 25,
                  shadowColor: '#7F5Df0',
                  shadowOffset: {
                      width: 0,
                      height: 10
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.5,
                  elevation: 5
              }
          })
        }
      >
        <Tab.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} navigation={navigation}/>        
        <Tab.Screen name="Cart" component={CartScreen} options={{headerShown: false}} navigation={navigation}/>        
        <Tab.Screen name="Upload" component={UploadScreen} options={{headerShown: false}} navigation={navigation}/>        
        <Tab.Screen name="Activity" component={ActivityScreen} options={{headerShown: false}} navigation={navigation}/>        
        <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}} navigation={navigation}/>           
      </Tab.Navigator>
      );
}