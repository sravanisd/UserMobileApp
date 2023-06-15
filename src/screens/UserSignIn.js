/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { handleSignIn } from '../logic/AuthUser';
import styles from './UserSignInStyles';


function UserSignIn({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [loginStatus, setLoginStatus] = useState(null);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const handleUserSignIn = () => {
        handleSignIn(email, password, navigation, setLoginStatus);
    };
    return (
        <ScrollView>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.welcomeText}>Welcome to MYB - Store!</Text>
                    <Image source={require('../assets/myBazar.jpg')} style={styles.logoImage} />
                    <Text style={styles.descriptionText}>Your One Stop Indian Store</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email Address"
                        placeholderTextColor="#B6B7B7"
                        onChangeText={setEmail}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#B6B7B7"
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />

                    <TouchableOpacity
                        style={styles.checkboxContainer}
                        onPress={handleCheckboxChange}
                    >
                        <View
                            style={[
                                styles.checkbox,
                                {
                                    backgroundColor: isChecked ? '#3D79B2' : 'transparent',
                                },
                            ]}
                        />
                        <Text style={styles.rememberMeText}>Remember Me</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={handleUserSignIn}
                    >
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>

                    {loginStatus === 'failed' && (
                        <Text style={styles.loginFailedText}>
                            Login failed. Please check your credentials.
                        </Text>
                    )}
                    {loginStatus === 'empty' && (
                        <Text style={styles.loginFailedText}>
                            Email & Password cannot be empty.
                        </Text>
                    )}

                    <TouchableOpacity style={styles.forgotPasswordText}>
                        <Text>Forgot Password</Text>
                    </TouchableOpacity>

                    <View style={styles.signUpContainer}>
                        <Text style={styles.signUpText}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.signUpLink}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.appVersionText}>App Version 1.0.1</Text>
                </View>
            </SafeAreaView>
        </ScrollView>
    );

};

export default UserSignIn;
