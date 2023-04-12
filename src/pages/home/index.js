import { useState, useEffect } from "react";

import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    FlatList,
} from "react-native";

import { Logo } from "../../componts/logo";
import { Ionicons } from "@expo/vector-icons";
import { FoodList } from "../../componts/foodlist";

import api from "../../services/api";

export function Home() {
    const [inputValue, setInputValue] = useState("");
    const [foods, setFoods] = useState("");

    useEffect(() => {
        async function fetchApi() {
            const response = await api.get('/foods');
            setFoods(response.data);
        }

        fetchApi();
    }, []);

    function handleSearch() {
        console.log("Você ESCREVEU:");
        console.log(inputValue);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Logo />
            <Text style={styles.title}>Econtre a receita </Text>
            <Text style={styles.title}>que combine com sua fome! </Text>
            <View style={styles.form}>
                <TextInput
                    placeholder="Digite o nome do pratos"
                    style={styles.imput}
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                />

                <TouchableOpacity onPress={handleSearch}>
                    <Ionicons name="search" size={28} color="#4CB26C" />
                </TouchableOpacity>
            </View>

            <FlatList
            data={foods}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <FoodList data={item}/>}  
            showsHorizontalScrollIndicator = {false}
            />
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
        backgroundColor: "#fff",
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
