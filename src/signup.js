import React, { useState } from 'react';
import { StyleSheet, Image, ScrollView, TouchableOpacity, Button, TextInput, Text, View, Touchable } from 'react-native';

export default function Signup({ navigation }) {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [errMsg, setErrMsg] = useState('');

    
    


    return (

        <View>
            <Text style={styles.Signup}>
                Sign-Up
            </Text><Text style={styles.Are}>
               Want To
                <TouchableOpacity>
                    <Text onPress={() => { navigation.navigate('FreeBook') }} style={styles.Signin}>
                      Read Free Books
                    </Text>
                </TouchableOpacity>
            </Text>
            <TextInput value={name} style={styles.input} placeholder="Your Name" onChangeText={text => (setname(text))}></TextInput>
            <TextInput style={styles.input} placeholder="Your G-mail" onChangeText={text => (setemail(text))}></TextInput>
            <TextInput style={styles.input} placeholder="Your Password" onChangeText={text => (setpassword(text))}></TextInput>
            <TouchableOpacity>

                <Text onPress={() => { alert("Google no ok") }} style={{ textAlign: "center", backgroundColor: "#841584", color: "Black", height: 40, width: 100, paddingTop: 10, marginLeft: "35%", fontWeight: "bold", fontSize: 20, borderColor: "#841584", borderRadius: 10, }} > SignUp</Text>
            </TouchableOpacity>

            {errMsg ? <Text style={{ color: "red", textAlign: "center", fontSize: 15, fontWeight: "bold" }}>{errMsg}</Text> : null}
         

          
        
          





        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: "#841584",
        padding: 10,
        marginTop: 18,
        color: "#841584",
        borderRadius: 9,
    },
    Signup: {
        fontSize: 30,

        fontWeight: "bold",
        marginTop: 50,
        textAlign: "center",
        color: "#841584"

    }, Are: {
        fontSize: 30,

        fontWeight: "bold",
        marginTop: 50,
        textAlign: "center",
        color: "grey",
    },
    Signin: {
        fontSize: 25,
        color: "blue",
        textAlign: "center",
    },
});
