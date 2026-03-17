import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

import { ChevronLeft } from 'lucide-react-native';

import ProfileScreen from '../screens/ProfileScreen';
import HomeNavigator from './HomeNavigator';
import OrderNavigator from './OrderNavigator';

export default function RootNavigator() {
    const Drawer = createDrawerNavigator();
    const navigation = useNavigation();
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false, headerTitle: '' }}>
            <Drawer.Screen name='Home' component={HomeNavigator} />
            <Drawer.Screen name='Orders' component={OrderNavigator} />
            <Drawer.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    headerShown: true,
                    headerTitle: '',
                    headerTransparent: true,
                    drawerLabel: 'Profile',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
                            <ChevronLeft size={40} strokeWidth={3} color="#424242" />
                        </TouchableOpacity>
                    )
                }}
            />
        </Drawer.Navigator>
    )
}