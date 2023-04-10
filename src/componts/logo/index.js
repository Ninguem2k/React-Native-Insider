import { StyleSheet, View, Text } from "react-native";

export function Logo() {
    return (
        <View style={styles.logoArea}>
            <Text style={styles.logo}>Receita Facil</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    logoArea: {
        backgroundColor: "#4CBE6c",
        alignSelf: "flex-start",
        padding: 0,
        paddingLeft: 16,
        paddingRight: 20,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 100,
        marginBottom: 8,
    },
    logo: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF",
    },
});
