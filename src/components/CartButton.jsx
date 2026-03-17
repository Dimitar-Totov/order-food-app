import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { ShoppingCart } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

import { useCart } from '../context/cart/useCart'

export default function CartButton() {
    const navigation = useNavigation();
    // const { cartItems } = useCart()
    const cartItems = ['one','two','three']

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate("Orders")}
        >
            <View style={{ position: "relative" }}>
                <ShoppingCart size={30} color="#000" />
                {cartItems.length > 0 && (
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>{cartItems.length}</Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 70,
        right: 20,
        zIndex: 999,
    },
    badge: {
        position: "absolute",
        right: -6,
        top: -6,
        backgroundColor: "red",
        borderRadius: 10,
        paddingHorizontal: 5,
    },
    badgeText: {
        color: "white",
        fontSize: 12,
    },
});