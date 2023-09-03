import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppointmentsScreen from '../Screens/AppointmentsScreen';
import DietsScreen from '../Screens/DietStack/DietScreen';
import PharmacyShopScreen from '../Screens/PharmacyStack/PharmacyShopScreen';
import ProfileScreen from '../Screens/ProfileScreen';

import HomeStackNavigator from "./HomeStackNavigator";
import { COLORS } from '../constants/COLORS';

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigator() {
    return (
        <Tab.Navigator 
        initialRouteName="Home" 
        screenOptions={{
            headerShown: false, 
            tabBarActiveTintColor: COLORS.GREEN, 
            tabBarInactiveTintColor: COLORS.WHITE,
            tabBarActiveBackgroundColor: COLORS.LIGHT_PURPLE, 
            tabBarInactiveBackgroundColor: COLORS.DARK_PURPLE, 
            tabBarStyle:{
                backgroundColor: COLORS.DARK_PURPLE
            },
            tabBarItemStyle:{
            }
            }}>
            <Tab.Screen name="Appintments" component={AppointmentsScreen} />
            <Tab.Screen name="Pharmacy" component={PharmacyShopScreen} />
            <Tab.Screen name="Home" component={HomeStackNavigator}/>
            <Tab.Screen name="Diets" component={DietsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}