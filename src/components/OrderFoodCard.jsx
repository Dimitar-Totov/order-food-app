import { Minus, Plus } from "lucide-react-native"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function OrderFoodCard({ food }) {
    return (
        <View style={styles.container}>
            <View style={styles.contentWrapper}>
                <View style={styles.imageSection}>
                    <Image style={styles.image} source={{ uri: food.imageUrl }} />
                </View>
                <View style={styles.info}>
                    <View style={styles.headerInfo}>
                        <Text style={styles.foodName}>{food.name}</Text>
                        <Text style={styles.foodPrice}>${food.price.toFixed(2)}</Text>
                    </View>
                    <Text style={styles.foodDescription}>{food.description}</Text>
                    <View style={styles.quantitySection}>
                        <TouchableOpacity>
                            <Plus style={styles.quantityIcon} strokeWidth={4} color={'#fff'} hitSlop={5} />
                        </TouchableOpacity>
                        <Text style={styles.quantity}>1</Text>
                        <TouchableOpacity>
                            <Minus style={styles.quantityIcon} strokeWidth={4} color={'#fff'} hitSlop={5} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: '#E3E3E3',
        borderBottomWidth: 2,
        paddingBlock: 20,
        width: '100%'
    },
    contentWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 30,
    },
    imageSection: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        width: 110,
        borderRadius: 20,
        backgroundColor: '#F4E4CD',
    },
    image: {
        resizeMode: 'cover',
        height: 70,
        width: 70,
        borderRadius: 100,
    },
    info: {
        flexGrow: 1,
        marginLeft: 10
    },
    headerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    foodName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    foodPrice: {
        fontWeight: 'bold',
        fontSize: 17
    },
    foodDescription: {
        color: '#484747',
        marginBottom: 8
    },
    quantitySection: {
        flexDirection: 'row',
        gap: 10
    },
    quantityIcon: {
        backgroundColor: '#F4E4CC',
        borderRadius: '100%',
    },
    quantity: {
        fontWeight: 'bold',
        fontSize: 17
    }
})