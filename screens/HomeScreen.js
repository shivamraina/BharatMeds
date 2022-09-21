import React from "react";
import { View, SafeAreaView, Image, Text } from "react-native";
import Navbar from "../components/HomeScreen/Navbar";
import Searchbar from "../components/HomeScreen/Searchbar";
import Medicines from "../components/HomeScreen/Medicines";
import { ScrollView } from "react-native";
import { medicines } from "../files/medicines";

export default function HomeScreen() {

    return (
        <SafeAreaView  style={{backgroundColor: "#eee", flex:1}}>
            <View style={{backgroundColor: "white", padding: 15}}>
                <Navbar />
                <Searchbar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: "white"}}>
                <Medicines medicines={medicines}/>
            </ScrollView>
        </SafeAreaView>
    );
}