import React from "react";
import { View, SafeAreaView, Image } from "react-native";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Medicines from "../components/Medicines";

export default function Home() {
    const medicines = [
        {
            "id": 1,
            "name": "Avomine",
            "otherNames": "avomine",
            "symptoms": "nausea,vomiting,Stomach problem",
            "quantity": "5",
            "expiry": "16-12-2025",
            "manufacturer": "Rhone-Poulenc India Ltd.",
            "path": require("../assets/avomine.jpg")
        },,
      
    ];

    return (
        <SafeAreaView  style={{backgroundColor: "#eee", flex:1}}>
            <View style={{backgroundColor: "white", padding: 15}}>
                <Medicines medicines={medicines} />
            </View>
        </SafeAreaView>
    );
}

