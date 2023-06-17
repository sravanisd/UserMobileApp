import React from 'react';
 import { Alert } from 'react-native';
 import appleAuth, {
    AppleButton,
  } from '@invertase/react-native-apple-authentication';
    const handleSignIn = () => {
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
 
          Alert.alert(
            ` \nEmail: ${email}\nFirst Name: ${firstName}\nLast Name: ${lastName}`
          );
        });
    }