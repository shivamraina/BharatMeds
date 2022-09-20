import React from "react";
import { Image, ScrollView, View, Text } from "react-native";
import MedicineInfo from "./MedicineInfo";

export default function Medicines({medicines}) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {medicines.map((medicine, index) => (
                <View key={index}>
                    <Image
                        source={medicine.path}
                        style={{
                            width: "100%",
                            height: 180,
                            resizeMode: "contain"
                        }}
                    />
                    <View>
                        <MedicineInfo 
                            name={medicine.name}
                            symptoms={medicine.symptoms}
                            expiry={medicine.expiry}
                            quantity={medicine.quantity}
                            manufacturer={medicine.manufacturer}
                        />
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}
