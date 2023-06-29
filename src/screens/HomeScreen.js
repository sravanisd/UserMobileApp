import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Button, View, Alert, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import axios from 'axios';
import styles from './HomeScreenStyles';
import { baseUrl } from '../apiUtils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchBar from 'react-native-search-bar';

function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [storeData, setStoreData] = useState([]);
  const [filteredStoreData, setFilteredStoreData] = useState([]);

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      console.log(token);
      const url = 'Store/getallStoreDetails';
      const response = await axios.get(baseUrl + url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const fetchedStores = response.data.getAllStores;
      console.log(fetchedStores);
      setStoreData(fetchedStores);
      setFilteredStoreData(fetchedStores);
    } catch (error) {
      console.error('Error fetching stores:', error);
    }
  };
  const filterStoreData = (text) => {
    if (storeData.length > 0) {
      const filtered = storeData.filter((store) =>
        store.store_Name.toLowerCase().includes(text.toLowerCase())
      );
      console.log('Filtered stores:', filtered);
      setFilteredStoreData(filtered);
    } else {
      setFilteredStoreData([]);
    }
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    filterStoreData(text);
  };

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
  };
  const renderStoreItem = ({ item }) => (
    <View key={item.id} style={styles.collectionItem}>
      <View style={styles.collectionItemContent}>
        <View style={styles.storeImage} />
        <View style={styles.storeInfo}>
          <Text style={styles.storeName}>{item.store_Name}</Text>
          <Text style={styles.storeCity}>{item.store_City}</Text>
          <Text style={styles.storeZipcode}>{item.store_Zipcode}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.toolbar}>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Log out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <SearchBar
          placeholder="Search stores..."
          onChangeText={handleSearch}
          value={searchQuery}
        />
        {filteredStoreData.length > 0 ? (
          <FlatList
            data={filteredStoreData}
            renderItem={renderStoreItem}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text style={styles.emptyListLabel}>No stores found.</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
