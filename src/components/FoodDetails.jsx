import { Plus, Star } from "lucide-react-native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SwipeHintArrow from "./SwipeHintArrow";
import { useEffect, useState } from "react";
import { productService } from "../services";

export default function FoodDetails({ route }) {
    const { foodId } = route.params;
    const [food, setFood] = useState({});
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        async function loadData() {
            try {
                const result = await productService.getProductById(foodId);
                setFood(result)
            } catch (error) {
                setFetchError(error.message)
            }
        }
        loadData()
    }, [foodId])
    
    return (
        <View style={styles.cardContainer}>
            <SwipeHintArrow />
            <View style={styles.content}>
                <View style={styles.header}>
                    <Image style={styles.foodImage} source={{ uri: food.image_url }} />
                </View>
                <View style={styles.main}>
                    <Text style={styles.foodDescription}>{food.description}</Text>
                    <View style={styles.foodDetails}>
                        <Text style={styles.foodName}>{food.name}</Text>
                        <View style={styles.kcalInfo}>
                            <Text style={{ fontWeight: 500, fontSize: 15 }}>300g/530 kcal</Text>
                            <Text style={{ fontSize: 15 }}>1 portion</Text>
                        </View>
                    </View>
                    <View style={styles.rate}>
                        <Star color={'#f2de06'} />
                        <Star color={'#f2de06'} />
                        <Star color={'#f2de06'} />
                        <Star color={'#f2de06'} />
                        <Star color={'#f2de06'} />
                        <Star color={'#f2de06'} />
                    </View>
                    <View style={styles.orderSection}>
                        <View style={styles.priceInfo}>
                            <Text style={{ fontSize: 15, fontWeight: 500 }}>Price:</Text>
                            <Text style={{ fontSize: 17, fontWeight: 700 }}>${food.price?.toFixed(2)}</Text>
                        </View>
                        <TouchableOpacity style={styles.addToCartSection}>
                            <Text style={styles.addToCartButton}>Add to cart</Text>
                            <Plus color={'#419F7D'} strokeWidth={3} style={styles.addIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        backgroundColor: '#419F7D',
        justifyContent: 'flex-end'
    },
    content: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

    },
    header: {
        position: 'absolute',
        right: 80,
        top: -130,
    },
    foodImage: {
        resizeMode: 'cover',
        height: 250,
        width: 250,
        borderRadius: 150
    },
    main: {
        paddingTop: 200,
        paddingHorizontal: 15
    },
    foodDescription: {
        textAlign: 'center',
        fontSize: 15,
        color: '#292828',
        fontWeight: 500,
        marginBottom: 30
    },
    foodDetails: {
        paddingHorizontal: 15,
        paddingBottom: 20,
        borderBottomColor: '#E3E3E3',
        borderBottomWidth: 2
    },
    foodName: {
        fontSize: 30,
        fontWeight: 700
    },
    kcalInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rate: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBlock: 20,
        borderBottomColor: '#E3E3E3',
        borderBottomWidth: 2
    },
    orderSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 30,
        paddingHorizontal: 15,
        paddingBottom: 100
    },
    addToCartSection: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#419F7D',
        paddingHorizontal: 20,
        borderRadius: 100,
        gap: 10
    },
    addToCartButton: {
        color: '#fff',
        fontWeight: 500
    },
    addIcon: {
        padding: 5,
        backgroundColor: '#F5E5CE',
        borderRadius: 100,
    }
}) 