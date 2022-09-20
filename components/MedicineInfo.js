import React from "react";
import { View, Text } from "react-native";

export default function MedicineInfo({name, expiry, symptoms, manufacturer, quantity}) {
    return (
        <View>
            <Text>
                <Text>
                    Name : 
                </Text>
                <Text>
                    {" "+name}
                </Text>
            </Text>
            <Text>
                <Text>
                    Quanity : 
                </Text>
                <Text>
                    {" "+quantity}
                </Text>
            </Text>
            <Text>
                <Text>
                    Expiry : 
                </Text>
                <Text>
                    {" "+expiry}
                </Text>
            </Text>
            <Text>
                <Text>
                    Symptoms : 
                </Text>
                <Text>
                    {" "+symptoms.split(",").map(s => s[0].toUpperCase() + s.substring(1)).join(",")}
                </Text>
            </Text>
            <Text>
                <Text>
                    Manufacturer : 
                </Text>
                <Text>
                    {" "+manufacturer}
                </Text>
            </Text>
        </View>
    );
}
