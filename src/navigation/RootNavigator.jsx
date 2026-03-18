import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeNavigator from './HomeNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import OrdersScreen from '../screens/OrdersScreen';

export default function RootNavigator() {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false, headerTitle: '' }}
        >
            <Drawer.Screen name='Home' component={HomeNavigator} options={{headerShown: true}} />
            <Drawer.Screen
                name='Orders'
                component={OrdersScreen}
                options={{
                    headerShown: true,
                    headerTitle: 'My Order'
                }}
            />
            <Drawer.Screen name='Profile' component={ProfileScreen} />
        </Drawer.Navigator>
    )
}