import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default function RootNavigator() {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={HomeScreen} options={{headerTitle: ''}} />
            <Drawer.Screen name='Orders' component={OrdersScreen} options={{headerTitle: ''}} />
            <Drawer.Screen name='Profile' component={ProfileScreen} options={{headerTitle: ''}} />
        </Drawer.Navigator>
    )
}