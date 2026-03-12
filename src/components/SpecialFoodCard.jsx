import { ChevronRight } from "lucide-react-native";

import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export default function SpecialFoodCard({ food }) {
    return (
        <View style={styles.cardContainer}>
            <Image style={styles.cardImage} source={{ uri: food.imageUrl }} />
            <Text style={styles.name}>{food.name}</Text>
            <Text style={styles.price}>${food.price}</Text>
            <View style={styles.detailsContainer}>
                <Text>See Details</Text>
                <TouchableOpacity hitSlop={20}>
                    <ChevronRight style={styles.detailsButton} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#F4E4CD',
        paddingTop: 100,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 20,
        borderRadius: 30
    },
    cardImage: {
        height: 150,
        width: 150,
        resizeMode: 'contain',
        position: 'absolute',
        top: -45,
        left: -25
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 15,
        fontWeight: 500,
        marginBottom: 15
    },
    detailsContainer: {
        flexDirection: 'row',
        gap: 20
    },
    detailsButton: {
        backgroundColor: '#419F7D',
        color: '#fff',
        borderRadius: '50%'
    }
})