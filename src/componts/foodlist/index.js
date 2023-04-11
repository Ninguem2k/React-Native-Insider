import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export function FoodList({data}) {
    const navigation = useNavigation();

    function handleNavigate() {
        navigation.navigate("Detail",{data:data});
    }

    return(
        <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={handleNavigate}>
           
            <Image
            source={{uri: data.cover}}
            style={styles.cover}
            />
            <View style={styles.info}>
                 <Text style={styles.name}>{data.name}</Text>
                 <Text style={styles.description}>{data.total_ingredients} ingredientes | {data.time} Min</Text>
            </View>

            <LinearGradient
                colors={['transparent','rgba(0,0,0, 0.70)','rgba(0,0,0, 0.95)']}
                style={styles.gradient}
            />
            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom : 8
    },
    cover: {
        width : '100%',
        height : 200,
        borderColor : "#000",
        borderRadius : 20
    },
    info: {
        position : "absolute",
        bottom : 14,
        left : 14,
        zIndex : 999
    },
    name: {
        fontSize : 18 ,
        fontWeight : "bold",
        color : "#fff"
    },
    description: {
        fontSize : 14,
        color : "#fff"
    },
    gradient: {
        position : "absolute",
        bottom : 0,
        left : 0,
        right : 0,
        zIndex : 1,
        borderRadius : 20,
        height : '55%',
        backgroundColor : 'transparent'

    },
});