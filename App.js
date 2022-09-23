import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import UploadScreen from "./screens/UploadScreen";
import CartScreen from "./screens/CartScreen";
import ActivityScreen from "./screens/ActivityScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/LoginScreen";
import SubmittedScreen from "./screens/SubmittedScreen";
import Home from "./screens/Home";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();
const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();
const CartStack = createStackNavigator();
const UploadStack = createStackNavigator();
const ActivityStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen = () => {
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Upload" component={UploadScreen} />
  </HomeStack.Navigator>
}

const CartStackScreen = () => {
  <CartStack.Navigator>
    <CartStack.Screen name="Cart" component={CartScreen} />
  </CartStack.Navigator>
}

const LoginStackScreen = () => {
  <LoginStack.Navigator>
    <LoginStack.Screen name="Login" component={LoginScreen} />
  </LoginStack.Navigator>
}

const ActivityStackScreen = () => {
  <ActivityStack.Navigator>
    <ActivityStack.Screen name="Activity" component={ActivityScreen} />
  </ActivityStack.Navigator>
}

const ProfileStackScreen = () => {
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  </ProfileStack.Navigator>
}

const UploadStackScreen = () => {
  <UploadStack.Navigator>
    <UploadStack.Screen name="Upload" component={UploadScreen} />
  </UploadStack.Navigator>
}

const SubmittedStackScreen = () => {
  <SubmittedStack.Navigator>
    <SubmittedStack.Screen name="Submitted" component={SubmittedScreen} />
  </SubmittedStack.Navigator>
}

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

// export default function App() {
//   return (
//     <NavigationContainer>
      // <Tab.Navigator
      //   screenOptions={
      //     ({route}) => ({
      //         tabBarIcon : ({focused, size, color}) => {
      //             let iconName;
      //             if(route.name === "Home") {
      //                 iconName = focused ? "home" : 'home-sharp';
      //                 size = focused ? size+7 : size+5;
      //             }
      //             else if(route.name === "Cart") {
      //                 iconName = focused ? "cart" : 'cart-sharp';
      //                 size = focused ? size+7 : size+5;
      //             }
      //             else if(route.name === "Upload") {
      //                 iconName = focused ? "add-circle" : 'add-circle-sharp';
      //                 size = focused ? size+7 : size+5;
      //             }
      //             else if(route.name === "Activity") {
      //                 iconName = focused ? "heart" : 'heart-sharp';
      //                 size = focused ? size+7 : size+5;
      //             }
      //             else if(route.name === "Profile") {
      //                 iconName = focused ? "person" : 'person-sharp';
      //                 size = focused ? size+7 : size+5;
      //             }
      //             return <Ionicons name={iconName} size={size} color={color} />
      //         },
      //         tabBarActiveTintColor: 'red',
      //         tabBarActiveBackgroundColor: 'white',
      //         tabBarInactiveBackgroundColor: 'white',
      //         tabBarShowLabel: false,
      //         tabBarStyle: {
      //             backgroundColor: "#ffffff",
      //             borderRadius: 25,
      //             shadowColor: '#7F5Df0',
      //             shadowOffset: {
      //                 width: 0,
      //                 height: 10
      //             },
      //             shadowOpacity: 0.25,
      //             shadowRadius: 3.5,
      //             elevation: 5
      //         }
      //     })
      //   }
      // >
      //   <Tab.Screen name="Home" component={HomeStackScreen} options={{headerShown: false}}/>        
      //   <Tab.Screen name="Cart" component={CartScreen} options={{headerShown: false}}/>        
      //   <Tab.Screen name="Upload" component={UploadScreen} options={{headerShown: false}}/>        
      //   <Tab.Screen name="Activity" component={ActivityScreen} options={{headerShown: false}}/>        
      //   <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>        
      //   <Tab.Screen name="Submitted" component={SubmittedScreen} options={{
      //     headerShown: false,
      //     transitionSpec: {
      //       open: config,
      //       close: config,
      //     },
      //     size: 0.2
      //   }}/>        
      // </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="SubmittedScreen" component={SubmittedScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


