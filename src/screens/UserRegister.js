/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ScrollView, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './UserRegisterStyles';
import handleUserRegister from '../logic/RegisterUser';
import handleAddPhoto from '../logic/RegisterUser'

function UserRegister(){
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
                    <TextInput
                        style={styles.textInput}
                        placeholder="First Name"
                        placeholderTextColor="#B6B7B7"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Last Name"
                        keyboardType="email-address"
                        placeholderTextColor="#B6B7B7"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email Address"
                        placeholderTextColor="#B6B7B7"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Phone Number"
                        placeholderTextColor="#B6B7B7"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        secureTextEntry
                        placeholderTextColor="#B6B7B7"
                    />
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Contact Details</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Address"
                        placeholderTextColor="#B6B7B7"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="AptNo"
                        placeholderTextColor="#B6B7B7"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="City"
                        placeholderTextColor="#B6B7B7"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="State"
                        placeholderTextColor="#B6B7B7"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Country"
                        placeholderTextColor="#B6B7B7"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Zipcode"
                        placeholderTextColor="#B6B7B7"
                    />
                <TouchableOpacity
                    style={styles.registerButton}
                    onPress={handleUserRegister}
                >
                    <Text style={styles.registerButtonText}>Register</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default UserRegister;
