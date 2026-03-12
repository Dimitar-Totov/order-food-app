import { Search, Menu } from "lucide-react-native";

import {
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
    Keyboard,
    TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const specialFood = [
    { name: 'Noodles', price: 7.2, imageUrl: 'https://www.pngall.com/wp-content/uploads/5/Chinese-Noodles-PNG-High-Quality-Image.png' },
    { name: 'Pasta', price: 6.2, imageUrl: 'https://static.vecteezy.com/system/resources/previews/045/654/340/non_2x/spaghetti-on-transparent-background-free-png.png' }
]

const recommendedFood = [
    { imageUrl: 'https://www.tasteofhome.com/wp-content/uploads/2025/07/30-Summer-Desserts-That-Are-No-Bake-and-Oh-So-Easy_TOHcom23_27515_P2_MD_03_22_6b.jpg' },
    { imageUrl: 'https://chopnotch.com/wp-content/uploads/2020/11/Panna-Cotta-1.jpg' },
    { imageUrl: 'https://thedeliciousspoon.com/wp-content/uploads/2019/04/Burger-pic-pin-1.jpg' },
    { imageUrl: 'https://www.tasteofhome.com/wp-content/uploads/2025/01/That-Good-Salad_EXPS_FT24_6498_JR_1212_1.jpg' },
    { imageUrl: 'https://images.unsplash.com/photo-1678684279246-96e6afb970f2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va2VkJTIwbWVhdHxlbnwwfHwwfHx8MA%3D%3D' },
    { imageUrl: 'https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2024/11/AdobeStock_71037928.jpeg' }

]

import SpecialFoodCard from "../components/SpecialFoodCard";
import RecommendFoodCard from "../components/RecommendFoodCard";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.menu} onPress={() => navigation.openDrawer()}>
                        <Menu size={30} />
                    </TouchableOpacity>
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
                    <View style={styles.recommendedContainer}>
                        <Text style={[styles.primaryText, { fontSize: 20 }]}>Recommended</Text>
                        <View style={styles.recommendedFood}>
                            {recommendedFood.map(food => <RecommendFoodCard key={food.imageUrl} food={food} />)}
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingTop: 30
    },
    menu: {
        marginBottom: 25
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
        justifyContent: 'space-between',
        marginBottom: 20
    },
    recommendedContainer: {
        gap: 10
    },
    recommendedFood: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        gap: 20
    }
})