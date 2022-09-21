import React from "react";
import { Text } from "react-native";
import { TouchableOpacity, View } from "react-native";

export default function Title() {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: "white",
                paddingVertical: 6, 
                paddingHorizontal: 16,
                borderRadius: 30
            }}
        >
            {/* logo */}
            <Text style={{color:"black", fontSize: 18, fontWeight: '900'}}>BHARATMEDS</Text>
        </TouchableOpacity>
    );
}
