import React from 'react';
import {Image, StyleSheet, View, Text  } from 'react-native';

export default function SubmittedScreen({navigation}) {
    setTimeout(function(){navigation.push('Home')}, 2000)
        return(
            <View style={styles.image} >
                <Image source={require('../assets/check.png')} style={{ width: 70, height: 70 }}/>
                <Text>Submitted Successfully</Text>
                <Text style={{ fontSize: 20 }}>Thanks for submitting !</Text>
            </View>
        );
}

const styles = StyleSheet.create({
    all: {
       backgroundColor: 'green',
       justifyContent: 'center',
    },
    image: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
        // width: 100, 
        // height: 100,
    }
});