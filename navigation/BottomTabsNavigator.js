import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppointmentsScreen from '../Screens/AppointmentsScreen';
import DietsScreen from '../Screens/DietScreen';
import PharmacyShopScreen from '../Screens/PharmacyShopScreen';
import ProfileScreen from '../Screens/ProfileScreen';

import HomeStackNavigator from "./HomeStackNavigator";

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigator() {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Tab.Screen name="Appintments" component={AppointmentsScreen} />
            <Tab.Screen name="Pharmacy" component={PharmacyShopScreen} />
            <Tab.Screen name="Home" component={HomeStackNavigator}/>
            <Tab.Screen name="Diets" component={DietsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}