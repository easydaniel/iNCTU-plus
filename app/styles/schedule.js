
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  pageContainer: {
    width,
    height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  scheduleActionContainer: {
    height: 50,
    backgroundColor: 'rgb(157, 139, 220)',
    paddingTop: 25,
    flexDirection: 'row',
  },
  scheduleSelect: {
    flex: 1,
    borderWidth: 0,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scheduleSelectText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  dayNavigator: {
    height: 30,
    flexDirection: 'row',
    borderBottomColor: 'rgba(211, 208, 203, .2)',
    shadowOffset: {
      height: 6,
    },
    shadowColor: 'rgba(91,80, 190, .6)',
    shadowOpacity: 0.4,
    zIndex: 3,
    backgroundColor: 'rgb(157, 139, 220)',
  },
  dayNavigatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayNavigatorText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  dayNavigatorIndicator: {
    width: (width / 7) - 30,
    height: 3,
    marginTop: -3,
    borderTopRightRadius: 2,
    borderTopLeftRadius: 2,
    backgroundColor: '#FFFFFF',
    zIndex: 5,
  },
  dayContainer: {
    width: width - 60,
    marginBottom: 120,
  },
  timeContainer: {
    width: width - 70,
    height: 110,
    backgroundColor: 'white',
    borderColor: 'rgba(211, 208, 203, .6)',
    borderWidth: 1,
    borderLeftColor: 'rgb(175, 210, 126)',
    borderLeftWidth: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: 'rgba(211, 208, 203, 1)',
    shadowOpacity: 0.6,
    alignSelf: 'center',
    marginTop: 26,
    paddingLeft: 12,
    paddingTop: 10,
    flex: 1,
  },
  courseName: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  courseLocationContainer: {
    padding: 0,
    paddingVertical: 10,
  },
  courseLocation: {
    color: 'rgba(0,0,0,.6)',
  },
  courseTimeContainer: {
    padding: 0,
  },
  courseTime: {
    flex: 2,
    color: 'rgba(0,0,0,.6)',
  },
  courseSection: {
    flex: 1,
    color: 'rgba(0,0,0,.6)',
  },
});
