import React from "react";
import { View, SafeAreaView } from "react-native";
import Navbar from "../components/HomeScreen/Navbar";
import SearchBar from "../components/HomeScreen/SearchBar";
import Medicines from "../components/HomeScreen/Medicines";
import { ScrollView } from "react-native";
import { medicines } from "../files/medicines";

export default function HomeScreen({navigation}) {

    return (
        <SafeAreaView  style={{backgroundColor: "#eee", flex:1}}>
            <View style={{backgroundColor: "white", padding: 15}}>
                <Navbar />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: "white"}}>
                <Medicines medicines={medicines}/>
            </ScrollView>
        </SafeAreaView>
    );
}