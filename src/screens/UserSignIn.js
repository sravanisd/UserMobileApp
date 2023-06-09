/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, Alert, Platform } from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin
} from '@react-native-google-signin/google-signin';
import { handleSignIn } from '../logic/AuthUser';
import styles from './UserSignInStyles';
import appleAuth, {AppleButton} from '@invertase/react-native-apple-authentication';
import {handleEmailCheck} from '../logic/UserEmailCheck';


GoogleSignin.configure({
    webClientId: '803557420882-imecrgi8nf3066vnqtu5o4hvu3odpp89.apps.googleusercontent.com',
  });
function UserSignIn({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const handleUserSignIn = () => {
        handleSignIn(email, password, navigation);
    };
    const googleSignIn = async () => {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = await auth.GoogleAuthProvider.credential(idToken);
        const res = await auth().signInWithCredential(googleCredential);
        const accessToken = await (await GoogleSignin.getTokens()).accessToken;
        const { email, displayName} = res.user;
        handleEmailCheck(email)
      .then((userExists) => {
        console.log(userExists);
        if (userExists) {
          console.log('User Email:', email);
          console.log('Name:', displayName);
          console.log(accessToken);
          Alert.alert('Welcome', `Logged in as ${displayName}`);
          navigation.navigate('Home');
        } else {
          const firstName = displayName.split(' ')[0];
          const lastName = displayName.split(' ')[1];
          const password = 'gmaillogin'; // Set password to 'gmaillogin' for Gmail sign-in users
          navigation.navigate('Register', {
            firstName,
            lastName,
            email,
            password,
          });
        }
      })
      .catch((error) => {
        console.error('Error checking email:', error);
      });
    };

    const handleAppleSignIn = () => {
        return appleAuth
          .performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
          })
          .then(appleAuthRequestResponse => {
            let { email, fullName } = appleAuthRequestResponse;
   
            let firstName = '';
            let lastName = '';
   
            if (fullName && fullName.givenName && fullName.familyName) {
              firstName = fullName.givenName;
              lastName = fullName.familyName;
            }
            handleEmailCheck(email)

            .then((userExists) => {
              console.log(userExists);
              if (userExists) {
                console.log('User Email:', email);
                console.log('Name:', firstName);
                Alert.alert('Welcome', `Logged in as ${firstName} ${lastName}`);
                navigation.navigate('Home');
              } else {
                const password = 'appleSignin'; 
                navigation.navigate('Register', {
                  firstName,
                  lastName,
                  email,
                  password,
                });
              }
            });
          });
        }
            
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
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={googleSignIn}
                    >
                        <Text style={styles.loginButtonText}>Continue With Google</Text>
                    </TouchableOpacity>
                    <View>
                    {Platform.OS === 'ios' && (
                    <TouchableOpacity style={[styles.loginButton, styles.appleButton]} onPress={handleAppleSignIn}>
                    <Text style={styles.loginButtonText}>Continue With Apple</Text>
                    </TouchableOpacity>
                    )}
                    </View>
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
