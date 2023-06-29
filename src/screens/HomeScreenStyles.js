import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#525252',
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3D79B2',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#525252',
  },
  searchBar: {
    flex: 1,
    marginLeft: 10,
  },
  emptyListLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  collectionItem: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#525252',
    backgroundColor: '#EDEDED',
    marginBottom: 20,
  },
  collectionItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeImage: {
    width: 150,
    height: 110,
    backgroundColor: 'black',
  },
  storeInfo: {
    marginLeft: 10,
    flex: 1,
  },
  storeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  storeCity: {
    fontSize: 16,
  },
  storeZipcode: {
    fontSize: 16,
  },
});
