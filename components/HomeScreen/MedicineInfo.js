import React from "react";
import { View, Text, Button} from "react-native";

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
            <View style={{margin: 6, flexDirection: 'row', justifyContent: 'space-between'}}>
                <>
                <Text style={{fontWeight: "900", color: 'white', paddingTop: 10, borderRadius: 5, borderWidth: 1, paddingHorizontal: 8, backgroundColor: 'green'}}>
                    Price : {price_per_unit}
                </Text>
                </>
                <Button title="Add to Cart" onPress={() => alert('Item Added to Cart')}>Add to Cart</Button>
            </View>
        </View>
    );
}
