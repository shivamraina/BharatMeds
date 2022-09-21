import React from "react";
import {StyleSheet, View,TextInput, Text, TouchableOpacity, ScrollView } from "react-native";
import RadioButton from '../components/RadioButton';

const values= [
    {
        key: 'donate',
        text: 'Donate',
    },
    {
        key: 'getMoney',
        text: 'Get 20% of MRP',
    },
];


export default class UploadMedidiceDetails extends React.Component {
    render(){
        return(
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.regform}>
                        <Text style={styles.header}>Upload Medicines</Text>
                        <TextInput style={styles.textinput} placeholder="Medicine Name" underlineColorAndroid={'transparent'}/>
                        <TextInput style={styles.textinput} placeholder="Manufacturer Name" underlineColorAndroid={'transparent'}/>
                        <TextInput style={styles.textinput} placeholder="Illness cured" underlineColorAndroid={'transparent'}/>
                        <TextInput style={styles.textinput} placeholder="Expiry Date" underlineColorAndroid={'transparent'}/>
                        <TextInput style={styles.textinput} placeholder="Quantity" underlineColorAndroid={'transparent'}/>
                        <TextInput style={styles.textinput} placeholder="Pickup Date and Time" underlineColorAndroid={'transparent'}/>
                        <View style={styles.radiocontainer}>
                            <RadioButton PROP={values} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles= StyleSheet.create({
    regform: {
        alignSelf: 'stretch',
    },
    header: {
        fontSize: 24,
        color : '#213562',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: "red",
        borderBottomWidth: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingLeft: 60,
        paddingRight: 60,
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#123456',
        borderBottomColor: '#f5f5f5',
        borderBottomWidth: 1,
    },
    radiocontainer: {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }
    }

});

