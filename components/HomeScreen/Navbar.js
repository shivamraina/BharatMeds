import React from "react";
import { View } from "react-native";
import Signout from "./Signout";
import Title from "./Title";

export default function Navbar() {
    return (
        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Title />
            <Signout />
        </View>
    );
}
