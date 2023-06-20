/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import { Alert } from 'react-native';
import { baseUrl } from "../apiUtils/api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

export const handleUserRegister = async (firstName, lastName, email, phoneNumber, password, address,aptNo, city, state, country, zipcode, imageSource, navigation) => {
    
    try {
      if (
        !firstName ||
        !lastName ||
        !email ||
        !phoneNumber ||
        !password ||
        !address ||
        !city ||
        !state ||
        !country ||
        !zipcode
      ) {
        Alert.alert('Error', 'One or more required fields are empty');
        return;
      }

      const requestModel = {
        user_FirstName: firstName,
        user_LastName: lastName,
        user_Email: email,
        user_PhoneNumber: phoneNumber,
        user_Password: password,
        user_Address: address,
        apt_Number: aptNo,
        user_City: city,
        user_State: state,
        user_Country: country,
        user_Zipcode: zipcode,
        user_Image: 'null',
        created_On: new Date(),
        updated_On: new Date(),
      };
      const newUser = [requestModel];
      const postData = {
        newUser,
      };
      const postDataString = JSON.stringify(postData);
      console.log(postDataString);
      const accessToken = await AsyncStorage.getItem('accessToken');
      console.log("Access token is :", accessToken);
        const url = 'User/createnewuser';
        const response = await axios.post(baseUrl + url, postDataString,{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
          },
        });
        console.log(response.data);
      
        if (response && response.data.message === 'Success') {
          Alert.alert('Success', 'User registered successfully');
          navigation.navigate('Home');
        } else {
          Alert.alert('Error', 'User registration failed');
          console.log(error);
        }
      } catch (error) {
        Alert.alert('Error', 'Exception during user registration');
        console.log(error);
      }    
  };