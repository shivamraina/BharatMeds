import React from "react";
import { View, Text } from "react-native";

export default function MedicineInfo({name, expiry, symptoms, manufacturer, quantity}) {
    return (
        <View>
            <Text>
                <Text style={{fontWeight: "700", fontFamily: "comicsans"}}>
                    Name : 
                </Text>
                <Text style={{fontFamily: "verdana", fontStyle: "italic", fontWeight: "900"}}>
                    {" "+name}
                </Text>
            </Text>
            <Text>
                <Text style={{fontWeight: "700", fontFamily: "comicsans"}}>
                    Quanity : 
                </Text>
                <Text style={{fontFamily: "verdana"}}>
                    {" "+quantity}
                </Text>
            </Text>
            <Text>
                <Text style={{fontWeight: "700", fontFamily: "comicsans"}}>
                    Expiry : 
                </Text>
                <Text style={{fontFamily: "verdana"}}>
                    {" "+expiry}
                </Text>
            </Text>
            <Text>
                <Text style={{fontWeight: "700", fontFamily: "comicsans"}}>
                    Symptoms : 
                </Text>
                <Text style={{fontFamily: "verdana"}}>
                    {" "+symptoms.split(",").map(s => s[0].toUpperCase() + s.substring(1)).join(",")}
                </Text>
            </Text>
            <Text>
                <Text style={{fontWeight: "700", fontFamily: "comicsans"}}>
                    Manufacturer : 
                </Text>
                <Text style={{fontFamily: "verdana"}}>
                    {" "+manufacturer}
                </Text>
            </Text>
        </View>
    );
}
