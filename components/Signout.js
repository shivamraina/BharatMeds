import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Signout() {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: "red",
                paddingVertical: 6, 
                paddingHorizontal: 16,
                borderRadius: 30
            }}
        >
            <Text style={{color:"white", fontSize: 18, fontWeight: '900'}}>Signout</Text>
        </TouchableOpacity>
    );
}
