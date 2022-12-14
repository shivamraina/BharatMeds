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
            <View style={{backgroundColor: "white", padding: 10, paddingTop: 33}}>
                <Navbar navigation={navigation}/>
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: "white"}}>
                <Medicines medicines={medicines}/>
            </ScrollView>
        </SafeAreaView>
    );
}