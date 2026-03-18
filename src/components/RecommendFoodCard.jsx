import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default function RecommendFoodCard({food}){
    return (
        <TouchableOpacity style={styles.foodContainer}>
            <Image style={styles.image} source={{uri: food.image_url}} />
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