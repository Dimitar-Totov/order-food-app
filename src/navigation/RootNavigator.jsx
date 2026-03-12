import { createDrawerNavigator } from '@react-navigation/drawer';

import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeNavigator from './HomeNavigator';

export default function RootNavigator() {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator screenOptions={{headerShown: false}}>
            <Drawer.Screen name='Home' component={HomeNavigator} options={{headerTitle: ''}}/>
            <Drawer.Screen name='Orders' component={OrdersScreen}/>
            <Drawer.Screen name='Profile' component={ProfileScreen}/>
        </Drawer.Navigator>
    )
}