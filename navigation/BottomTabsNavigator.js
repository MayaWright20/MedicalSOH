import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../Screens/HomeScreen";
import AppointmentsScreen from '../Screens/AppointmentsScreen';
import DietsScreen from '../Screens/DietScreen';
import PharmacyShopScreen from '../Screens/PharmacyShopScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigator() {
    return (
        <Tab.Navigator initialRouteName="Home" >
            <Tab.Screen name="Appintments" component={AppointmentsScreen} />
            <Tab.Screen name="Pharmacy" component={PharmacyShopScreen} />
            <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Tab.Screen name="Diets" component={DietsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}