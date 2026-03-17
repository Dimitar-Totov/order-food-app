import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';

import OrdersScreen from '../screens/OrdersScreen';

import { ChevronLeft } from 'lucide-react-native';

export default function OrderNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Details"
                component={OrdersScreen}
                options={({ navigation }) => ({
                    headerTitle: () => null,
                    headerTransparent: true,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <ChevronLeft size={40} strokeWidth={3} color={'#424242'} />
                        </TouchableOpacity>
                    ),
                })}
            />
        </Stack.Navigator>
    );
}