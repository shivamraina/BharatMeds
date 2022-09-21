import React from "react";
import { View, SafeAreaView, Image, Text } from "react-native";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Medicines from "../components/Medicines";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/BottomTabs";
import { ScrollView } from "react-native";

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
            "path": require("../assets/avomine.jpg"),
            "price_per_item": "120 INR"
        },,
        {
            "id": 2,
            "name": "Azithromycin",
            "otherNames": "azi",
            "symptoms": "chest infection,fever",
            "quantity": "15",
            "expiry": "6-10-2023",
            "manufacturer": "Inabata Pharmaceutical",
            "path": require("../assets/azithromycin.jpg"),
            "price_per_item": "100 INR"
        },
        {
            "id": 3,
            "name": "Crocin Advance",
            "otherNames": "crocin",
            "symptoms": "fever,body pain",
            "quantity": "35",
            "expiry": "10-3-2025",
            "manufacturer": "GlaxoSmithKline",
            "path": require("../assets/crocin.png"),
            "price_per_item": "90 INR"
        },
        {
            "id": 4,
            "name": "Dolo",
            "otherNames": "",
            "symptoms": "fever,body pain",
            "quantity": "35",
            "expiry": "10-3-2025",
            "manufacturer": "Micro Labs Ltd.",
            "path": require("../assets/dolo.jpg"),
            "price_per_item": "190 INR"
        },
        {
            "id": 5,
            "name": "Dolonex DT",
            "otherNames": "dolonex",
            "symptoms": "pain relief,inflammation,swelling",
            "quantity": "10",
            "expiry": "01-03-2025",
            "manufacturer": "Pfizer Ltd.",
            "path": require("../assets/dolonex dt.jpg"),
            "price_per_item": "80 INR"
        },
        {
            "id": 6,
            "name": "Equirex",
            "otherNames": "",
            "symptoms": "IBS,anti spasmatic",
            "quantity": "50",
            "expiry": "01-03-2025",
            "manufacturer": "Jagsonpal Pharmaceuticals Ltd",
            "path": require("../assets/equirex.jpg"),
            "price_per_item": "20 INR"
        },
        {
            "id": 7,
            "name": "Moov",
            "otherNames": "",
            "symptoms": "ache,pain,inflammation",
            "quantity": "5",
            "expiry": "16-12-2025",
            "manufacturer": "Reckit Benckiser India Pvt. Ltd.",
            "path": require("../assets/moov.jpg"),
            "price_per_item": "80 INR"
        },
        {
            "id": 8,
            "name": "Olox OZ",
            "otherNames": "Ofloxacin",
            "symptoms": "Intestinal Infection",
            "quantity": "5",
            "expiry": "16-12-2025",
            "manufacturer": "Cipla Ltd.",
            "path": require("../assets/olox.jpg"),
            "price_per_item": "290 INR"
        },
        {
            "id": 9,
            "name": "ORS",
            "otherNames": "oral rehydration solution",
            "symptoms": "dehydration",
            "quantity": "5",
            "expiry": "09-08-2025",
            "manufacturer": "Halewood Laboratories",
            "path": require("../assets/ors.jpg"),
            "price_per_item": "10 INR"
        },
        {
            "id": 10,
            "name": "Pantosec D",
            "otherNames": "pantosec",
            "symptoms": "heartburn,acid reflux,ulcer",
            "quantity": "5",
            "expiry": "09-08-2025",
            "manufacturer": "Cipla Ltd.",
            "path": require("../assets/pantosec.jpg"),
            "price_per_item": "100 INR"
        }
    ];

    return (
        <SafeAreaView  style={{backgroundColor: "#eee", flex:1}}>
            <View style={{backgroundColor: "white", padding: 15}}>
                <Navbar />
                <Searchbar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: "white"}}>
                <Medicines medicines={medicines}/>
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    );
}