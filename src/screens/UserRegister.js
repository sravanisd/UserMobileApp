/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, ScrollView, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './UserRegisterStyles';
import { handleUserRegister } from '../logic/RegisterUser';
import handleAddPhoto from '../logic/RegisterUser'
import { useRoute } from '@react-navigation/native';

function UserRegister({navigation}){
    const route = useRoute();
    const { firstName: initialFirstName, lastName: initialLastName, email: initialEmail, password: initialPassword } = route.params || {};
    console.log(route.params);
    const isGoogleLogin = !!initialFirstName || !!initialLastName || !!initialEmail || !!initialPassword;
    console.log(isGoogleLogin);
    const [firstName, setFirstName] = useState(initialFirstName || '');
    const [lastName, setLastName] = useState(initialLastName || '');
    const [email, setEmail] = useState(initialEmail || '');
    const [password, setPassword] = useState(initialPassword || '');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [aptNo, setAptNo] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [zipcode, setZipcode] = useState('');
    const imageSource = '0x9EE965'; 
    const handleRegister = () => {
        handleUserRegister(firstName, lastName, email, phoneNumber, password, address,aptNo, city, state, country, zipcode, imageSource, navigation);
    };
return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                <View style={styles.profileImageContainer}>
                    <View style={styles.profileImageFrame}>
                    </View>
                </View>
                <TouchableOpacity style={styles.addPhotoButton} onPress={handleAddPhoto}>
                    <Text style={styles.addPhotoButtonText}>Add Photo</Text>
                </TouchableOpacity>
            </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Personal Details</Text>
                {!isGoogleLogin && (
                    <>
                    <TextInput
                        style={styles.textInput}
                        placeholder="First Name"
                        placeholderTextColor="#B6B7B7"
                        onChangeText={text => setFirstName(text)}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Last Name"
                        keyboardType="email-address"
                        placeholderTextColor="#B6B7B7"
                        onChangeText={text => setLastName(text)}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email Address"
                        placeholderTextColor="#B6B7B7"
                        onChangeText={text => setEmail(text)}
                    />
                    </>
                )}
                    <TextInput
                        style={styles.textInput}
                        placeholder="Phone Number"
                        placeholderTextColor="#B6B7B7"
                        onChangeText={text => setPhoneNumber(text)}
                    />
                {!isGoogleLogin && (
                <>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        secureTextEntry
                        placeholderTextColor="#B6B7B7"
                        onChangeText={text => setPassword(text)}
                    />
                </>
                )}
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Contact Details</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Address"
                        placeholderTextColor="#B6B7B7"
                        onChangeText={text => setAddress(text)}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="AptNo"
                        placeholderTextColor="#B6B7B7"
                        onChangeText={text => setAptNo(text)}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="City"
                        placeholderTextColor="#B6B7B7"
                        onChangeText={text => setCity(text)}

                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="State"
                        placeholderTextColor="#B6B7B7"
                        onChangeText={text => setState(text)}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Country"
                        placeholderTextColor="#B6B7B7"
                        onChangeText={text => setCountry(text)}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Zipcode"
                        placeholderTextColor="#B6B7B7"
                        onChangeText={text => setZipcode(text)}
                    />
                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={handleRegister}
                >
                    <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default UserRegister;
