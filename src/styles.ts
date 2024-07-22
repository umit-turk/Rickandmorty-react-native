import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  filterButton: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  selectedFilter: {
    backgroundColor: '#007BFF',
  },
  filterText: {
    color: '#fff',
    fontSize: 18,
  },
  locationContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  locationButton: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  selectedLocation: {
    backgroundColor: '#007BFF',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 16,
    color: '#666',
  },
  location: {
    fontSize: 16,
    color: '#000',
  },
});

export default styles;
