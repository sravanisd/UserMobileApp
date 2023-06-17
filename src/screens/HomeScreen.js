/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, Text, Button, View, Alert } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import styles from './HomeScreenStyles';
function HomeScreen ({navigation}){
    const handleLogout = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          Alert.alert('Log Out', 'Logged Out Successfully');
          console.log('User signout successfully');
          navigation.navigate('UserSignIn');
        } catch (error) {
          console.error('Error signing out:', error);
        }
    }
    
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.centerContainer}>
            <Text style={styles.homeText}>HomeScreen</Text>
            <Button title="Log out" onPress={handleLogout} />
        </View>
        </SafeAreaView>
    );
};
export default HomeScreen;