/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        marginTop: 10,
        alignItems: 'center',
    },
    welcomeText: {
        marginTop: height * 0.1,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#525252',
    },
    logoImage: {
        marginTop: 10,
        width: 100,
        height: 100,
    },
    descriptionText: {
        marginTop: 10,
        fontSize: 16,
        color: '#525252',
    },
    input: {
        marginTop: 30,
        width: '100%',
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    checkboxContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'black',
        marginRight: 5,
    },
    rememberMeText: {
        color: 'black',
    },
    loginButton: {
        marginTop: 20,
        width: '100%',
        height: 40,
        backgroundColor: '#3D79B2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    loginButtonText: {
        color: '#F8F8F8',
        fontWeight: 'bold',
        fontSize: 16,
    },
    loginFailedText: {
        color: 'red',
        marginTop: 10,
    },
    forgotPasswordText: {
        marginTop: 20,
        color: '#3D79B2',
        fontWeight: 'bold',
        fontSize: 16,
    },
    signUpContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    signUpText: {
        color: 'black',
    },
    signUpLink: {
        color: '#3D79B2',
        fontWeight: 'bold',
    },
    appVersionText: {
        marginTop: 10,
    },
    appleButton: {
        marginTop: 20,
        width: 350,
        height: 40,
        backgroundColor: '#3D79B2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
      },
      buttonContainer: {
        alignItems: 'center',
        marginTop: 250,
      },
});
