import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OrderFoodCard from "../components/OrderFoodCard";

const orders = [
    { name: 'Noodles', description: 'with shrimps,egg,pork', imageUrl: 'https://www.tasteofhome.com/wp-content/uploads/2025/07/30-Summer-Desserts-That-Are-No-Bake-and-Oh-So-Easy_TOHcom23_27515_P2_MD_03_22_6b.jpg', price: 7.50 },
    { name: 'Fruits Salad', description: 'with strawberry,tomato,egg', imageUrl: 'https://chopnotch.com/wp-content/uploads/2020/11/Panna-Cotta-1.jpg', price: 7.50 },
    { name: 'Curry', description: 'with strawberry,tomato,egg', imageUrl: 'https://thedeliciousspoon.com/wp-content/uploads/2019/04/Burger-pic-pin-1.jpg', price: 7.50 },
]

export default function OrdersScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>My Order</Text>
            </View>
            {orders.map(order => <OrderFoodCard key={order.name} food={order} />)}
            <TouchableOpacity style={styles.checkoutButton}>
                <Text style={styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    header: {
        paddingHorizontal: 30,
        marginTop: 90,
        marginBottom: 45,
        width: '100%'
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#3f3e3e'
    },
    checkoutButton: {
        marginTop: 50,
        backgroundColor: '#419F7D',
        width: '80%',
        alignItems: 'center',
        paddingBlock: 15,
        borderRadius: 30
    },
    checkoutText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    }
})