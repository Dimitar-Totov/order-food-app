import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default function RecommendFoodCard({ food }) {

    const navigation = useNavigation();
    const navigatePressHandler = () => navigation.navigate('Details', { foodId: food.id })

    return (
        <TouchableOpacity onPress={navigatePressHandler} style={styles.foodContainer}>
            <Image style={styles.image} source={{ uri: food.image_url }} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    foodContainer: {
        height: 130,
        width: 130
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    }
})