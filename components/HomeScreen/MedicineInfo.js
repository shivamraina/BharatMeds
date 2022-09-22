import React from "react";
import { View, Text } from "react-native";

export default function MedicineInfo({name, expiry, symptoms, manufacturer, quantity, price_per_unit}) {
    return (
        <View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: "700"}}>
                    Name : 
                </Text>
                <Text style={{ fontStyle: "italic", fontWeight: "900"}}>
                    {" "+name}
                </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: "700"}}>
                    Quanity : 
                </Text>
                <Text>
                    {" "+quantity}
                </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: "700"}}>
                    Expiry : 
                </Text>
                <Text>
                    {" "+expiry}
                </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: "700"}}>
                    Symptoms : 
                </Text>
                <Text>
                    {" "+symptoms.split(",").map(s => s[0].toUpperCase() + s.substring(1)).join(",")}
                </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: "700"}}>
                    Manufacturer : 
                </Text>
                <Text>
                    {" "+manufacturer}
                </Text>
            </View>
            <View style={{marginTop: 3, flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={{fontWeight: "700", color: 'red'}}>
                    Price Per Unit : 
                </Text>
                <Text style={{color: 'green', fontWeight: '900'}}>
                    {" "+price_per_unit}
                </Text>
            </View>
        </View>
    );
}
