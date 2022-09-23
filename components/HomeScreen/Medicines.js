import React from "react";
import { Image, ScrollView, View, Button, TouchableOpacity } from "react-native";
import MedicineInfo from "./MedicineInfo";

export default function Medicines({medicines}) {
    return (
        <>
            {medicines.map((medicine, index) => (
                <View key={index} style={{borderRadius: 9, borderColor: "grey", borderWidth: 1, padding: 15, margin: 10, shadowColor: '#000000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.9,
                    shadowRadius: 3,
                    elevation: 5,}}>
                    <Image
                        source={medicine.path}
                        style={{
                            width: "90%",
                            height: 150,
                            margin: 10,
                            alignItems: "center",
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
                </View>
            ))}
        </>
    );
}
