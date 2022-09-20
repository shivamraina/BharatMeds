import React from "react";
import { View } from "react-native";

export default function Medicines() {
    return (
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Title />
            <Signout />
        </View>
    );
}
