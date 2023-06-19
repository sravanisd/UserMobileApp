/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    profileImageContainer: {
        alignItems: 'center',
    },
    profileImageFrame: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    addPhotoButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    addPhotoButtonText: {
        color: '#3D79B2',
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#525252',
    },
    textInput: {
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    signupButton: {
        backgroundColor: '#3D79B2',
        alignItems: 'center',
        paddingVertical: 10,
        width: 300,
        alignSelf: 'center',
        marginTop: 10,
    },
    signupButtonText: {
        color: '#F8F8F8',
    },
    registerButton: {
        marginTop: 20,
        width: '100%',
        height: 40,
        backgroundColor: '#3D79B2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    registerButtonText: {
        color: '#F8F8F8',
        fontWeight: 'bold',
        fontSize: 16,
    },
});