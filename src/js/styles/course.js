import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(203, 203, 203, .6)',
    marginHorizontal: width / 12,
  },
  menuContainer: {
    backgroundColor: 'rgb(157, 139, 220)',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  listSelect: {
    flex: 1,
    borderWidth: 0,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listSelectText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  listContainer: {
    marginBottom: 60,
  },
  rowContainer: {
    flex: 1,
    height: (height - 120) / 5,
    marginHorizontal: width / 12,
    paddingVertical: 12,
  },
  courseInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  courseName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  newInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  teacherName: {
    flex: 1,
    fontSize: 14,
    alignSelf: 'center',
    color: 'rgba(0, 0, 0, .4)',
  },
  newInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  homework: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
