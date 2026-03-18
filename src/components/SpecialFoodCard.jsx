import { ChevronRight } from "lucide-react-native";

import { useNavigation } from "@react-navigation/native";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export default function SpecialFoodCard({ food }) {
    const navigation = useNavigation();

    const navigatePressHandler = () => navigation.navigate('Details')
    return (
        <View style={styles.cardContainer}>
            <Image style={styles.cardImage} source={{ uri: food.image_url }} />
            <Text style={styles.name}>{food.name}</Text>
            <Text style={styles.price}>${food.price}</Text>
            <View style={styles.detailsContainer}>
                <Text>See Details</Text>
                <TouchableOpacity onPress={navigatePressHandler} hitSlop={20}>
                    <ChevronRight style={styles.detailsButton} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#F4E4CD',
        paddingTop: 140,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 20,
        borderRadius: 30,
        marginRight: 20,
    },
    cardImage: {
        height: 130,
        width: 130,
        resizeMode: 'contain',
        position: 'absolute',
        top: 5,
        left: 11
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