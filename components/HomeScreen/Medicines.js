import React from "react";
import { Image, ScrollView, View, Text, TouchableOpacity } from "react-native";
import MedicineInfo from "./MedicineInfo";

export default function Medicines({medicines}) {
    return (
        <>
            {medicines.map((medicine, index) => (
                <TouchableOpacity key={index} style={{borderRadius: 9, borderColor: "grey", borderWidth: 1, padding: 5, margin: 10}}>
                    <Image
                        source={medicine.path}
                        style={{
                            width: "90%",
                            height: 150,
                            resizeMode: "contain",
                            margin: 10,
                            alignItems: "center"
                        }}
                    />
                    <View>
                        <MedicineInfo 
                            name={medicine.name}
                            symptoms={medicine.symptoms}
                            expiry={medicine.expiry}
                            quantity={medicine.quantity}
                            manufacturer={medicine.manufacturer}
                            price_per_unit={medicine.price_per_item}
                        />
                    </View>
                </TouchableOpacity>
            ))}
        </>
    );
}
