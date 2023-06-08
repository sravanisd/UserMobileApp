import React from 'react';
import { Alert } from 'react-native';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import appleAuth, {
  AppleButton,
} from '@invertase/react-native-apple-authentication';

const App = () => {
  const handleSignIn = () => {
    return appleAuth
      .performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      })
      .then(appleAuthRequestResponse => {
        let { identityToken, email, fullName } = appleAuthRequestResponse;
      
        let firstName = '';
        let lastName = '';
      
        if (fullName && fullName.givenName && fullName.familyName) {
          firstName = fullName.givenName;
          lastName = fullName.familyName;
        }
      
        Alert.alert(
          `Identity Token: ${identityToken}\nEmail: ${email}\nFirst Name: ${firstName}\nLast Name: ${lastName}`
        );
      });
      
      

     
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonContainer}>
          <AppleButton
            buttonStyle={AppleButton.Style.WHITE}
            buttonType={AppleButton.Type.SIGN_IN}
            style={styles.appleButton}
            onPress={handleSignIn}
          />
          
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 250,
  },
  appleButton: {
    width: 240,
    height: 45,
    marginBottom: 16,
  },
  signInText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
