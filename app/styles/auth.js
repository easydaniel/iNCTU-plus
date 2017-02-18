import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(157, 139, 220)',
  },
  headerContainer: {
    height: 20,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FBFBFB',
  },
  loginContainer: {
    height: 180,
    width: 250,
    alignItems: 'center',
    paddingTop: 15,
  },
  input: {
    width: 160,
    height: 40,
  },
  actionContainer: {
    height: 40,
    width: 120,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  action: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'rgb(157, 139, 220)',
  },
});
