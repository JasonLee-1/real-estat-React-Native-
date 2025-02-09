import { styles } from '../../screens/authScreens/styles.js';
import { Image, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import OutlineInput from 'react-native-outline-input';
import { Text } from '../../components/Themed';
import { SafeAreaView, } from 'react-native';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const stylees = StyleSheet.create({
    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: 40,
        height: 55,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
        borderRadius: 12
    },
    focusCell: {
        borderColor: '#000',
    },
});

const CELL_COUNT = 6;

const EnterCode = ({ navigation, route }: { navigation: NavigationProp<any>, route: any }) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    useEffect(() => {
        console.log(value);
        if (value.length == 6) {
            navigation.navigate('CreatePassword', { name: 'Jane' })
        }
    }, [value])
    return (
        <View style={styles.loginPageStyle}>
            {/* <View style={styles.loginHeader}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.goBack()} >
                    <Image style={styles.buttonImage} source={require('./assets/icons/backBtn.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.subTextView}>
                <Text style={styles.title}>Check email</Text>
            </View>
            <View style={styles.subTextView}>
                <Text style={styles.subText}>Enter the code that we sent to your email</Text>
            </View>
            <View style={styles.subTextView}>
                <SafeAreaView style={stylees.root}>
                    <CodeField
                        ref={ref}
                        {...props}
                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={stylees.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <Text
                                key={index}
                                style={[stylees.cell, isFocused && stylees.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />
                </SafeAreaView>
            </View>

            <View style={{ padding: '7%', width: '100%', justifyContent: 'center', marginTop: '38%' }}>
                <TouchableOpacity
                // onPress={() => navigation.navigate('Register', { name: 'Jane' })}
                >
                    <View style={styles.subTextView}>
                        <Text style={styles.subText} >Resend Code</Text>
                    </View>
                </TouchableOpacity>
            </View> */}

        </View>
    );
};

export default EnterCode
