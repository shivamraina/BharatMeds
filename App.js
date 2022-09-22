
// import Home from './screens/Home';

// export default function App() {

//   return <Home />;
// }

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/Home"
import SubmittedScreen from "./screens/Submitted"
import UploadMedicineDetailsScreen from "./screens/UploadMedicineDetails"

const Stack = createNativeStackNavigator();
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
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }} 
        />
        <Stack.Screen  options={{
            headerShown: false,
          }}  name="UploadMedicineDetails" component={UploadMedicineDetailsScreen} />
        <Stack.Screen 
        options={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
        }} 
          name="Submitted" component={SubmittedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
