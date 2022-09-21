import React from "react";
import { View, Text } from "react-native";

export default function MedicineInfo({name, expiry, symptoms, manufacturer, quantity, price_per_unit}) {
    return (
        <View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: "700", fontFamily: "comicsans"}}>
                    Name : 
                </Text>
                <Text style={{fontFamily: "verdana", fontStyle: "italic", fontWeight: "900"}}>
                    {" "+name}
                </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: "700", fontFamily: "comicsans"}}>
                    Quanity : 
                </Text>
                <Text style={{fontFamily: "verdana"}}>
                    {" "+quantity}
                </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: "700", fontFamily: "comicsans"}}>
                    Expiry : 
                </Text>
                <Text style={{fontFamily: "verdana"}}>
                    {" "+expiry}
                </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: "700", fontFamily: "comicsans"}}>
                    Symptoms : 
                </Text>
                <Text style={{fontFamily: "verdana"}}>
                    {" "+symptoms.split(",").map(s => s[0].toUpperCase() + s.substring(1)).join(",")}
                </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: "700", fontFamily: "comicsans"}}>
                    Manufacturer : 
                </Text>
                <Text style={{fontFamily: "verdana"}}>
                    {" "+manufacturer}
                </Text>
            </View>
            <View style={{marginTop: 3, flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={{fontWeight: "700", fontFamily: "comicsans", color: 'red'}}>
                    Price Per Unit : 
                </Text>
                <Text style={{fontFamily: "verdana", color: 'green', fontWeight: '900'}}>
                    {" "+price_per_unit}
                </Text>
            </View>
        </View>
    );
}
