// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Analysis from "./assets/SVGs/analysisIcon.svg";
// import AnalysisOutline from "./assets/SVGs/analysisIconOutline.svg";
// import Nutrition from "./assets/SVGs/nutrition.svg";
// import NutritionOutline from "./assets/SVGs/nutritionOutline.svg";
// import Sport from "./assets/SVGs/sport.svg";
// import SportOutline from "./assets/SVGs/sportOutline.svg";
// import Home from "./assets/SVGs/Home.svg";
// import HomeOutline from "./assets/SVGs/HomeOutline.svg"
// import HomePage from "@/screens/home-page";


// // Tab Bottom
// const Tab = createBottomTabNavigator();

// function TabGroup() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, focused, size }) => {
//           let Component;
//           let iconName;
//           if (route.name === "HomeScreen") {
//             Component = iconName = focused ? Analysis : AnalysisOutline;
//           } else if (route.name === "page1") {
//             Component = iconName = focused ? Home : HomeOutline;
//           } else if (route.name === "page2") {
//             Component = iconName = focused ? Nutrition : NutritionOutline;
//           } else if (route.name === "page3") {
//             Component = iconName = focused ? Sport : SportOutline;
//           }
//           return null
//         },
        
//       })}
//     >
//       <Tab.Screen name="home" component={HomePage} options={{headerShown:false}} />
//       <Tab.Screen name="Item1" component={HomePage} />
//       <Tab.Screen name="Item2" component={HomePage} />
//       <Tab.Screen name="Item3" component={HomePage} />
      
//     </Tab.Navigator>
//   );
// }

// export default function ButtonNavigation() {
//   return (
//     <NavigationContainer>
//       <TabGroup />
//     </NavigationContainer>
//   );
// }