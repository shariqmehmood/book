




import React from "react";
import { StyleSheet, Image, ScrollView, TouchableOpacity, Button, TextInput, Text, View, Touchable } from 'react-native';
function Books() {
    const MoreDetail = () => {
        alert("looding more")
    }
    return (
        <View style={styles.main} >
            <View style={styles.card}>
                <Text style={styles.Bookname}>
                    My English Book
                </Text>
                <Text style={styles.Authername}>
                    Jhon Dolton
                </Text>
                <Text style={styles.price}>
                    1200 $
                </Text>
                <Text style={styles.genre}>
                    Genre
                </Text><Text style={styles.Detail} onPress={MoreDetail}>
                    More Detail
                </Text>
            </View>
        </View>
)
}
export default Books;
const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        borderColor: "black",
        marginTop: 10,
        marginLeft: 15,
        width: "90%",
        padding: 10,
        marginTop: 18,
        color: "#841584",
        borderRadius: 9,
        backgroundColor: "grey"
    },
    Bookname: {
        fontSize: 30,
        color: "black",
        textAlign: "center",
        paddingBottom: 5,
    },
    Authername: {
        fontSize: 12,
        color: "black",
        marginLeft: "80%",
        paddingTop: 7,
    },
    price: {
        fontSize: 12,
        color: "black",
        marginLeft: "80%",
        paddingTop: 7,
    },
    genre: {
        fontSize: 12,
        color: "black",
        marginLeft: "80%",
        paddingTop: 7,
    },
    Detail: {
        marginTop: 5,
        fontSize: 12,
        borderRadius:10,
        marginLeft: "60%",
        paddingTop: 7,
        borderWidth: 2,
        borderColor: "white",
        color: "white",
        backgroundColor: "black",
        textAlign: "center",
        fontSize: 20,
    },
    main: {
        marginTop: 40,
    }
});



        
           
           










