import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function Navbar() {
    return (
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <TouchableOpacity
                style={{
                    backgroundColor: "white",
                    paddingVertical: 6, 
                    paddingHorizontal: 16,
                    borderRadius: 30,
                    marginTop: 7
                }}
                >
            <Text style={{color:"black", fontSize: 18, fontWeight: '900'}}>BHARATMEDS</Text>
                </TouchableOpacity>
            <TouchableOpacity
                style={{
                    backgroundColor: "red",
                    paddingVertical: 6, 
                    paddingHorizontal: 16,
                    borderRadius: 30,
                    marginTop: 7
                }}
            >
                <Text style={{color:"white", fontSize: 18, fontWeight: '900'}}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}
