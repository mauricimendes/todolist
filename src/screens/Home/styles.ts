import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#1A1A1A'
  },
  header: {
    backgroundColor: '#0D0D0D',
    width: '100%',
    height: 173,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    marginTop: -27,
    paddingHorizontal: 24,
    marginBottom: 32
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#0D0D0D',
    borderRadius: 6,
    paddingHorizontal: 16,
    color: '#F2F2F2',
    fontSize: 16,
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infos: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20
  },
  infoText: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 17,
  },
  counter: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center'
  },
  counterText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D9D9D9',
  },
  empty: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#333333',
    borderTopWidth: 1,
    height: 208
  },
  emptyText: {
    fontSize: 14,
    color: '#808080',
  }
})