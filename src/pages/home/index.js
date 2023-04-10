import { useState } from "react";

import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
} from "react-native";

import { Logo } from "../../componts/logo";
import { Ionicons } from "@expo/vector-icons";

export function Home() {
    const [inputValue, setInputValue] = useState("");

    function handleSearch() {
        console.log("UC ESCREVEU:");
        console.log(inputValue);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Logo />
            <Text style={styles.title}>Econtre a receita</Text>
            <Text style={styles.title}>que combine com sua fome</Text>
            <View style={styles.form}>
                <TextInput
                    placeholder="Digite o nome da comida"
                    style={styles.imput}
                    value={inputValue}
                    onChangeText={text => setInputValue(text)}
                />

                <TouchableOpacity onPress={handleSearch}>
                    <Ionicons name="search" size={28} color="#4CB26C" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F9FF",
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#0e0e0e",
    },
    form: {
        width: "100%",
        borderRadius: 8,
        marginTop: 16,
        backgroundColor: "#FFF",
        marginBottom: 16,
        borderWidth: 1,
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    imput: {
        width: "90%",
        maxWidth: "90%",
        height: 40,
    },
});
