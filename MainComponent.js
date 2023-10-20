import React, { Component, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const MainComponent = () => {
    const[visible, setVisibility] = useState(false);
    const[text, setText] = useState('Pokaż');
    const onPressButton = () => {
        setVisibility(!visible);
        setText(text === 'Pokaż'? 'Ukryj' : 'Pokaż');
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Zadanie 2</Text>
            <TouchableOpacity style={styles.button} onPress={onPressButton}>
                <Text style={styles.text_blue}>{text}</Text>
            </TouchableOpacity>    
            {visible && (
                <View visible={visible} >
                    <Text>Nazywam się</Text>
                    <Text style={styles.bold}>Michał Polak</Text>
                </View>
            )}
        </View>
    );
}

export default MainComponent;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        margin: 15,
        borderRadius: 20,
        backgroundColor: '#cfeffa',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 30,
        fontFamily: 'Verdana',
        color: 'black'
    },
    button: {
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 40,
        margin: 15,
        backgroundColor: '#6876f2',
        
        borderColor: '#09465c'
    },
    text_blue: {
        color: '#051be3',
        fontWeight: "bold"
    },
    bold: {
        fontWeight: "bold"
    }

});