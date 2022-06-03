import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Calculator from "../pages/Calculator";
import Content from "../pages/Content";
import CinematicaUV from "../pages/CinematicaUV";
const AppStack = createNativeStackNavigator();

const Routes = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Calculator" component={Calculator} />
      <AppStack.Screen name="Content" component={Content} />
      <AppStack.Screen name="CinematicaUV" component={CinematicaUV} />
    </AppStack.Navigator>
  );
};

export default Routes;
