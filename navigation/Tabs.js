import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import UploadScreen from "../screens/UploadScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ActivityScreen from "../screens/ActivityScreen";

export default function Tabs() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator

            screenOptions={
                ({route}) => ({
                    tabBarIcon : ({focused, size, color}) => {
                        let iconName;
                        if(route.name === "Home") {
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
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Upload" component={UploadScreen} />
            <Tab.Screen name="Activity" component={ActivityScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}