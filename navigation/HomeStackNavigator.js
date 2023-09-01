import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import CareersScreen from '../Screens/HomeScreenStack/CareersScreen';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="CareersScreen" component={CareersScreen} />
        </Stack.Navigator>
    );
}