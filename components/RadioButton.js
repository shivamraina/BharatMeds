import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
export default class RadioButton extends Component {
	state = {
		value: null,
	};
	render() {
		const { PROP } = this.props;
		const { value } = this.state;
		return (
			<View style={styles.radiobox}>
				{PROP.map(res => {
					return (
                        <View key={res.key} style={styles.container}>
                            <Text style={styles.radioText}>{res.text}</Text>
                            <TouchableOpacity
                                style={styles.radioCircle}
                                onPress={() => {
                                    this.setState({
                                        value: res.key,
                                    });
                                }}>
                                {value === res.key && <View style={styles.selectedRb} />}
                            </TouchableOpacity>
                        </View>
					);
				})}
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
        alignItems: 'center',
        borderBottomColor: '#f5f5f5',
        borderBottomWidth: 1,
        flexDirection: 'row',
		justifyContent: 'space-between',

	},
    radioText: {
      //  flexDirection: 'row',
        //alignSelf: 'stretch',
        color: '#123456',
        alignItems: 'center',
		justifyContent: 'center',
        //borderBottomColor: '#f5f5f5',
        //borderBottomWidth: 1,
    },
    radiobox: {
        height: 40,
        marginBottom: 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
	radioCircle: {
		height: 15,
		width: 15,
		borderRadius: 100,
		borderWidth: 1.5,
		borderColor: '#111111',
        marginLeft: 5,
        alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 7.5,
		height: 7.5,
		borderRadius: 100,
		backgroundColor: '#3740ff',
    },
});