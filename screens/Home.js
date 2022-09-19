import React from "react";
import { View, SafeAreaView } from "react-native";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";

export default function Home() {
    return (
        <SafeAreaView  style={{backgroundColor: "#eee", flex:1}}>
            <View style={{backgroundColor: "white", padding: 15}}>
                <Navbar />
                <Searchbar />
            </View>
        </SafeAreaView>
    );
}