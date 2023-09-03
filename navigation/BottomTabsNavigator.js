import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppointmentsScreen from '../Screens/AppointmentsScreen';
import DietsScreen from '../Screens/DietStack/DietScreen';
import PharmacyShopScreen from '../Screens/PharmacyStack/PharmacyShopScreen';
import ProfileScreen from '../Screens/ProfileScreen';

import HomeStackNavigator from "./HomeStackNavigator";
import { COLORS } from '../constants/COLORS';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createBottomTabNavigator();

export default function BottomTabsNavigator() {


    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: COLORS.GREEN,
                tabBarInactiveTintColor: COLORS.WHITE,
                tabBarActiveBackgroundColor: COLORS.DARK_PURPLE,
                tabBarInactiveBackgroundColor: COLORS.DARK_PURPLE,
                tabBarStyle: {
                    backgroundColor: COLORS.DARK_PURPLE
                },
                tabBarItemStyle: {
                }
            }}>
            {/* <Tab.Screen
                name="Appointments"
                component={AppointmentsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }}
            /> */}
            <Tab.Screen
                name="Pharmacy"
                component={PharmacyShopScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="pill" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Diets"
                component={DietsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="food-apple" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}