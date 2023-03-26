import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    height: 64,
    backgroundColor: '#262626',
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333333',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    gap: 8
  },
  descriptionUnchecked: {
    flex: 1,
    fontSize: 14,
    color: '#f2f2f2',
  },
  descriptionChecked: {
    flex: 1,
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: '#808080'
  },
  uncheckedButton: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#4EA8DE'
  },
  checkedButton: {
    height: 18,
    width: 18,
    borderRadius: 9,
    backgroundColor: '#5E60CE',
    justifyContent: 'center',
    alignItems: 'center'
  }
})