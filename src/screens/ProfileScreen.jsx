import { useRef, useState } from "react";
import {
    Animated,
    Image,
    Keyboard,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

export default function ProfileScreen() {
    const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

    const [selected, setSelected] = useState('signup');

    const signUpAnim = useRef(new Animated.Value(1)).current;
    const signInAnim = useRef(new Animated.Value(0)).current;

    const selectOption = (option) => {
        setSelected(option);

        Animated.parallel([
            Animated.timing(signUpAnim, {
                toValue: option === 'signup' ? 1 : 0,
                duration: 250,
                useNativeDriver: false
            }),
            Animated.timing(signInAnim, {
                toValue: option === 'signin' ? 1 : 0,
                duration: 250,
                useNativeDriver: false
            })
        ]).start();
    };

    const signUpBg = signUpAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['#fff', '#FF4C34']
    });

    const signInBg = signInAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['#fff', '#FF4C34']
    });

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1 }}>

                    <View style={styles.headerSection}>
                        <Image style={styles.image} source={require('../../assets/chef.avif')} />
                    </View>

                    <View style={styles.content}>
                        <View style={styles.signOptions}>
                            <AnimatedTouchableOpacity
                                style={[
                                    styles.signOptionButton,
                                    { backgroundColor: signUpBg },
                                ]}
                                onPress={() => selectOption('signup')}
                            >
                                <Text style={[styles.signButtonText, { color: selected === 'signup' ? '#fff' : '#373535' }]}>
                                    Sign Up
                                </Text>
                            </AnimatedTouchableOpacity>

                            <AnimatedTouchableOpacity
                                style={[
                                    styles.signOptionButton,
                                    { backgroundColor: signInBg },
                                ]}
                                onPress={() => selectOption('signin')}
                            >
                                <Text style={[styles.signButtonText, { color: selected === 'signin' ? '#fff' : '#373535' }]}>
                                    Sign In
                                </Text>
                            </AnimatedTouchableOpacity>
                        </View>

                        <View style={styles.userDataSection}>
                            {selected === 'signup'
                                ? <SignUp />
                                : <SignIn />
                            }
                        </View>

                        <View style={styles.buttonSection}>
                            <TouchableOpacity style={styles.signButton}>
                                {selected === 'signin' ? <Text style={styles.signButtonText}>Log In</Text> : <Text style={styles.signButtonText}>Create Account</Text>}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    image: {
        height: 250,
        width: 250,
        resizeMode: 'cover'
    },
    content: {
        alignItems: 'center',
        backgroundColor: '#F5F4F7',
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 30,
        flex: 1
    },
    signOptions: {
        flexDirection: 'row',
        width: '100%',
        padding: 5,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 50,
        marginBottom: 25
    },
    signOptionButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 50,
        marginHorizontal: 5
    },
    signButtonText: {
        fontSize: 15,
        fontWeight: 600,
        color: '#fff'
    },
    userDataSection: {
        width: '100%'
    },

    buttonSection: {
        width: '100%',
        marginTop: 15
    },
    signButton: {
        backgroundColor: '#FF4C34',
        width: '100%',
        alignItems: 'center',
        padding: 15,
        borderRadius: 50
    }
});