/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useCallback} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const UserSignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const handleSignIn = useCallback(async () => {
        if (email.trim() === '' || password.trim() === '') {
            console.log('Email and password cannot be empty');
            return;
        }

        try {
            const baseUrl = 'https://localhost:44342/api/v1/';
            const url = `User/getUserDetails?UserEmail=${email}&UserPassword=${password}`;

            fetch(baseUrl + url)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log('API response:', responseJson);

                    if (responseJson.success) {
                        console.log('Login successful');
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
    }, [email, password]);
    return (
        <View style={{ margin: 20, marginTop: 50, alignItems: 'center' }}>
            <Text style={{ marginTop: 10, fontSize: 24, fontWeight: 'bold', color: '#525252' }}>
                Welcome to MYB - Store!
            </Text>
            <Text style={{ marginTop: 10, fontSize: 16, color: '#525252' }}>
                Your One Stop Indian Store
            </Text>

            <TextInput
                style={{
                    marginTop: 30,
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
                    marginTop: 10,
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
                style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}
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
                    marginTop: 10,
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

            <TouchableOpacity style={{ marginTop: 10 }}>
                <Text style={{ color: '#3D79B2', fontWeight: 'bold', fontSize: 16 }}>
                    Forgot Password
                </Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Text style={{ color: 'black' }}>Don't have an account?</Text>
                <TouchableOpacity>
                    <Text style={{ color: '#3D79B2', fontWeight: 'bold' }}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default UserSignIn;
