import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";

export default function Searchbar() {
    return (
        <View styles = {styles.container}>
            <TextInput
                placeholder = "Search"
                style = {styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        justifyContent: "space-between"
    },
    input: {
        backgroundColor: "#fff",
        padding: 10,
        marginLeft: 10,
        marginTop: 20,
        marginRight: 11,
        borderRadius: 18,
        color: "#000",
        borderWidth: 1
    }
});