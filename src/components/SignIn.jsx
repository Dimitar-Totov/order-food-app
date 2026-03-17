import { StyleSheet, Text, TextInput, View } from "react-native"

import { Eye, EyeOff } from "lucide-react-native";
import { useState } from "react";

export default function SignIn() {
    const [showPasswordClicked, setShowPasswordClicked] = useState(false);

    return (
        <>
            <Text style={styles.labelText}>Email Address</Text>
            <TextInput placeholder="john@gmail.com" style={styles.inputField} />

            <Text style={styles.labelText}>Password</Text>
            <View>
                <TextInput placeholder="••••••••••" secureTextEntry={!showPasswordClicked} style={styles.inputField} />
                {showPasswordClicked ? <Eye style={styles.showPasswordIcon} onPress={() => setShowPasswordClicked(false)} /> : <EyeOff style={styles.showPasswordIcon} onPress={() => setShowPasswordClicked(true)} />}
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    labelText: {
        fontSize: 16,
        fontWeight: 500,
        color: '#3a3a3a',
        marginBottom: 5
    },
    inputField: {
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 15,
        marginBottom: 20
    },
    showPasswordIcon: {
        position: 'absolute',
        right: 15,
        top: 12
    }
})