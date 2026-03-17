import { createDrawerNavigator } from '@react-navigation/drawer';

import ProfileScreen from '../screens/ProfileScreen';
import HomeNavigator from './HomeNavigator';
import OrderNavigator from './OrderNavigator';

export default function RootNavigator() {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false, headerTitle: '' }}>
            <Drawer.Screen name='Home' component={HomeNavigator} />
            <Drawer.Screen name='Orders' component={OrderNavigator} />
            <Drawer.Screen name='Profile' component={ProfileScreen} />
        </Drawer.Navigator>
    )
}