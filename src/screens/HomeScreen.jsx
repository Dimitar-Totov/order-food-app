import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.primaryText}>Hello Dimitar</Text>
                <Text style={styles.secondaryText}>What do you want to order today ?</Text>
            </View>
        </View>
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
        
    },
    primaryText: {
        fontSize: 30
    },
    secondaryText: {
        fontSize: 15
    }
})