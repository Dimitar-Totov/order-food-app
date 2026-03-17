import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';

import { CartProvider } from './context/cart/CartProvider';
import CartButton from './components/CartButton';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <CartProvider>
          <RootNavigator />
          <CartButton />
        </CartProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

