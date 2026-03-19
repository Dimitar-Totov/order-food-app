import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { ChevronRight } from "lucide-react-native";

export default function SwipeHintArrow() {
    const slide = useRef(new Animated.Value(0)).current;
    const opacity = useRef(new Animated.Value(0.5)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.parallel([
                    Animated.timing(slide, {
                        toValue: -6, 
                        duration: 700,
                        useNativeDriver: true,
                    }),
                    Animated.timing(opacity, {
                        toValue: 1,
                        duration: 700,
                        useNativeDriver: true,
                    })
                ]),
                Animated.parallel([
                    Animated.timing(slide, {
                        toValue: 0,
                        duration: 700,
                        useNativeDriver: true,
                    }),
                    Animated.timing(opacity, {
                        toValue: 0.4,
                        duration: 700,
                        useNativeDriver: true,
                    })
                ]),
            ])
        ).start();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View style={{ transform: [{ translateX: slide }], opacity }}>
                <ChevronRight size={35} color="#000" />
            </Animated.View>
            <Text style={{fontStyle: 'italic',fontWeight: 500, color: '#434242'}}>Swipe to go back</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 30,
        left: 15,
        transform: [{ translateY: -20 }],
        zIndex: 999,
        padding: 4,
        opacity: 0.9,
    },
});