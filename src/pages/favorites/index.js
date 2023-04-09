import { StyleSheet, View, Text } from "react-native";

export function Favorites() {
    return (
        <View style={styles.container}>
            <Text>Página Favorites</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "yelow",
    },
});
