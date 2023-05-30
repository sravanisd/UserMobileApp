/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
//import auth from '@react-native-firebase/auth';
//import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

function FbLogin({ navigation }) {
    /*async function onFacebookButtonPress() {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }

        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw 'Something went wrong obtaining access token';
        }

        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(facebookCredential);
    }*/
    return (
        <SafeAreaView>

            <TouchableOpacity
                style={{
                    marginTop: 50,
                    width: '100%',
                    height: 40,
                    backgroundColor: '#3D79B2',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 8,
                }}
                //onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}

            >
                <Text style={{ color: '#F8F8F8', fontWeight: 'bold', fontSize: 16 }}>Login with Facebook</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};
export default FbLogin;