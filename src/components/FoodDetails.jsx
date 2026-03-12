import { StyleSheet, Text, View } from "react-native";

export default function FoodDetails() {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.content}>
                <Text>Test</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        backgroundColor: '#419F7D',
        justifyContent: 'flex-end',
    },
    content: {
       backgroundColor: '#fff',
       borderTopLeftRadius: 10,
       borderTopRightRadius: 10,
       paddingBottom: 500
    }
}) 