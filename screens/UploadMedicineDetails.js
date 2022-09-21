import React, {useState} from 'react';
import {StyleSheet, View,TextInput, Button, Text, TouchableOpacity, ScrollView ,SafeAreaView  } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import RadioButton from '../components/RadioButton';
import { Formik } from 'formik'

const values= [
    {
        key: 'donate',
        text: 'Donate ❤️',
    },
    {
        key: 'getMoney',
        text: 'Get 20% of MRP',
    },
];


export default function  UploadMedidiceDetails({navigation}) {
   
        return(
            <Formik>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.regform}>
                        <Text style={styles.header}>Upload Medicines</Text>
                        <TextInput style={styles.textinput} placeholder="Medicine Name" underlineColorAndroid={'transparent'}/>
                        <TextInput style={styles.textinput} placeholder="Manufacturer Name" underlineColorAndroid={'transparent'}/>
                        <TextInput style={styles.textinput} placeholder="Illness cured" underlineColorAndroid={'transparent'}/>
                        <Text style={styles.datePicker}>
                        <Text>Expiry Date</Text>
                        <DatePicker />
                        </Text>
                        <TextInput style={styles.textinput} placeholder="Quantity" underlineColorAndroid={'transparent'}/>
                        <Text style={styles.datePicker}>
                        <Text>Pickup Date</Text>
                        <DatePicker />
                        </Text>
                        <Text style={styles.datePicker}>
                        <Text>Pickup Time</Text>
                        <TimePicker />
                        </Text>
                        <View>
                            <RadioButton PROP={values} />
                        </View>
                        <Button onPress = {()=> navigation.navigate('Submitted')} title="Submit"/>
                    </View>
                </View>
            </ScrollView>
            </Formik>
        );
    
}


export function DatePicker() {
   const [mydate, setDate] = useState(new Date());
   const [displaymode, setMode] = useState('time');
   const [isDisplayDate, setShow] = useState(false);
   const changeSelectedDate = (event, selectedDate) => {
      const currentDate = selectedDate || mydate;
      setDate(currentDate);
   };
   const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
   };
   const displayTimepicker = () => {
      showMode('date');
   };
   return (
      <SafeAreaView>
         <View style={styles.dateButton}>
            <Button onPress={displayTimepicker} title="Select" />
         </View>
         {isDisplayDate && (
            <DateTimePicker
               value={mydate}
               mode={displaymode}
               is24Hour={true}
               display="default"
               onChange={changeSelectedDate}
            />
         )}
      </SafeAreaView>
   );
};

export function TimePicker() {
    const [mydate, setDate] = useState(new Date());
    const [displaymode, setMode] = useState('time');
    const [isDisplayDate, setShow] = useState(false);
    const changeSelectedDate = (event, selectedDate) => {
       const currentDate = selectedDate || mydate;
       setDate(currentDate);
    };
    const showMode = (currentMode) => {
       setShow(true);
       setMode(currentMode);
    };
    const displayTimepicker = () => {
       showMode('time');
    };
    return (
       <SafeAreaView>
          <View style={styles.dateButton}>
             <Button onPress={displayTimepicker} title="Select" />
          </View>
          {isDisplayDate && (
             <DateTimePicker
                value={mydate}
                mode={displaymode}
                is24Hour={true}
                display="default"
                onChange={changeSelectedDate}
             />
          )}
       </SafeAreaView>
    );
 };

const styles = StyleSheet.create({
    dateButton: {
       // backgroundColor: 'green',
       justifyContent: 'center',
        paddingLeft: 10,
    },
//    datecontainer: {
//      flexDirection: 'row',
//    },
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
    datePicker: {
        justifyContent: 'space-between',
        flexDirection: 'row',
       // alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#123456',
        borderBottomColor: '#f5f5f5',
        borderBottomWidth: 1,
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#123456',
        borderBottomColor: '#f5f5f5',
        borderBottomWidth: 1,
    },

});

// import React from 'react';
// import { View, Text, Image, Button } from 'react-native';
// import ImagePicker from 'react-native-image-picker';

// export default class App extends React.Component {
//   state = {
//     photo: null,
//   };

//   handleChoosePhoto = () => {
//     const options = {
//       noData: true,
//     };
//     ImagePicker.launchImageLibrary(options, (response) => {
//       if (response.uri) {
//         this.setState({ photo: response });
//       }
//     });
//   };

//   render() {
//     const { photo } = this.state;
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         {photo && (
//           <Image
//             source={{ uri: photo.uri }}
//             style={{ width: 300, height: 300 }}
//           />
//         )}
//         <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
//       </View>
//     );
//   }
// }