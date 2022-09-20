// import Home from './screens/Home';

// export default function App() {

//   return <Home />;
// }

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/Home"
import UploadMedicineDetailsScreen from "./screens/UploadMedicineDetails"

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={<Navbar />}
        />
        <Stack.Screen name="UploadMedicineDetails" component={UploadMedicineDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
