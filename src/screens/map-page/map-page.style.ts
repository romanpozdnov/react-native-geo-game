import { COLORS } from './../../constants/theme';
import { StyleSheet } from 'react-native';
export const STYLE = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonRight: {
    position: 'absolute',
    right: '10%',
    bottom: '10%',
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: COLORS.move_to_item_button,
  },
  buttonLeft: {
    position: 'absolute',
    left: '10%',
    bottom: '10%',
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: COLORS.move_to_user_button,
  },
  title: {
    position: 'absolute',
    top: 0,
  },
});
