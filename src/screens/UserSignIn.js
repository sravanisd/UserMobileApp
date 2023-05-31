/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Dimensions, SafeAreaView, ScrollView } from 'react-native';


function UserSignIn({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const { height } = Dimensions.get('window');
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const handleSignIn = () => {
        if (email.trim() === '' || password.trim() === '') {
            console.log('Email and password cannot be empty');
            return;
        }
        try {
            const baseUrl = 'https://localhost:44342/api/v1/';
            const url = `User/getUserDetails?UserEmail=${email}&UserPassword=${password}`;

            fetch(baseUrl + url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    //'Authorization': 'Bearer your_token_here',
                },
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log('API response:', responseJson);

                    if (responseJson.message === 'Success') {
                        console.log('Login successful');
                        navigation.navigate('Home');
                    } else {
                        console.log('Login failed');
                    }
                })
                .catch((error) => {
                    console.error('Sign in failed:', error);
                });
        } catch (error) {
            console.error('Sign in failed:', error);
        }
    };
    return (
        <ScrollView>
            <SafeAreaView style={{ flex: 1 }} >
                <View style={{ flex: 1, margin: 20, marginTop: 10, alignItems: 'center' }}>
                    <Text style={{ marginTop: height * 0.1, fontSize: 24, fontWeight: 'bold', color: '#525252' }}>
                        Welcome to MYB - Store!
                    </Text>
                    <Image
                        source={require('../assets/myBazar.jpg')}
                        style={{ marginTop: 10, width: 100, height: 100 }}
                    />
                    <Text style={{ marginTop: 10, fontSize: 16, color: '#525252' }}>
                        Your One Stop Indian Store
                    </Text>

                    <TextInput
                        style={{
                            marginTop: 40,
                            width: '100%',
                            height: 45,
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 8,
                            paddingHorizontal: 10,
                        }}
                        placeholder="Email Address"
                        placeholderTextColor="#B6B7B7"
                        onChangeText={setEmail}
                    />

                    <TextInput
                        style={{
                            marginTop: 20,
                            width: '100%',
                            height: 45,
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 8,
                            paddingHorizontal: 10,
                        }}
                        placeholder="Password"
                        placeholderTextColor="#B6B7B7"
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />

                    <TouchableOpacity
                        style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}
                        onPress={handleCheckboxChange}
                    >
                        <View
                            style={{
                                width: 20,
                                height: 20,
                                borderWidth: 1,
                                borderColor: 'black',
                                marginRight: 5,
                                backgroundColor: isChecked ? '#3D79B2' : 'transparent',
                            }}
                        />
                        <Text>Remember Me</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            marginTop: 20,
                            width: '100%',
                            height: 40,
                            backgroundColor: '#3D79B2',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 8,
                        }}
                        onPress={handleSignIn}
                    >
                        <Text style={{ color: '#F8F8F8', fontWeight: 'bold', fontSize: 16 }}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginTop: 20 }}>
                        <Text style={{ color: '#3D79B2', fontWeight: 'bold', fontSize: 16 }}>
                            Forgot Password
                        </Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ color: 'black' }}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')} >
                            <Text style={{ color: '#3D79B2', fontWeight: 'bold' }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ marginTop: 10 }}>App Version 1.0.1</Text>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default UserSignIn;
