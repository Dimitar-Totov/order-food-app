import { Search } from "lucide-react-native";

import {
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
    Keyboard
} from "react-native";

const specialFood = [
    { name: 'Noodles', price: 7.2, imageUrl: 'https://www.pngall.com/wp-content/uploads/5/Chinese-Noodles-PNG-High-Quality-Image.png' },
    { name: 'Pasta', price: 6.2, imageUrl: 'https://static.vecteezy.com/system/resources/previews/045/654/340/non_2x/spaghetti-on-transparent-background-free-png.png' }
]

import SpecialFoodCard from "../components/SpecialFoodCard";

export default function HomeScreen() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.primaryText}>Hello Dimitar</Text>
                    <Text style={styles.secondaryText}>What do you want to order today ?</Text>
                </View>
                <View style={styles.searchContainer}>
                    <Search color={'#868585'} />
                    <TextInput placeholder="Search" style={{ width: '90%' }} />
                </View>
                <View style={styles.specialsContainer}>
                    <Text style={[styles.primaryText, { fontSize: 20, marginBottom: 30 }]}>Specials</Text>
                    <View style={styles.specialFoods}>
                        {specialFood.map(food => <SpecialFoodCard key={food.name} food={food} />)}
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingTop: 30
    },
    header: {
        marginBottom: 20
    },
    primaryText: {
        fontSize: 30,
        fontWeight: 700
    },
    secondaryText: {
        fontSize: 15,
        fontWeight: 500
    },
    searchContainer: {
        backgroundColor: '#F4E4CD',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingBlock: 5,
        borderRadius: 25,
        marginBottom: 20
    },
    specialFoods: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})