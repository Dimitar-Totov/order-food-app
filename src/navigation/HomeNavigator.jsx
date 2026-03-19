import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import FoodDetails from '../components/FoodDetails';

import { ChevronLeft } from 'lucide-react-native';

export default function HomeNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Details"
                component={FoodDetails}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}