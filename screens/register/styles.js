import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  background: { flex: 1, resizeMode: 'cover', justifyContent: 'flex-end' },

  signInContainer: {
    position: 'relative',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 92,
    paddingBottom: 78,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  innerWrapper: { marginHorizontal: 16 },

  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    textAlign: 'center',
    color: '#212121',
    marginBottom: 32,
  },

  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#BDBDBD',
  },

  inputFocused: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FF6C00',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#000',
  },

  userAvatarContainer: {
    position: 'absolute',
    top: -60,
    left: '50%',
    transform: [{ translateX: -60 }],
    width: 120,
    height: 120,
    backgroundColor: '#f6f6f6',
    borderRadius: 16,
  },

  userAvatar: {
    flex: 1,
    borderRadius: 16,
  },

  userAvatarAddButton: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FF6C00',
    position: 'absolute',
    bottom: 26,
    right: -12,
  },

  userAvatarAddButtonText: {
    color: '#FF6C00',
    fontSize: 26,
    fontFamily: 'Roboto-Thin',
  },

  buttonRegister: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    height: 50,
    backgroundColor: '#FF6C00',
    borderRadius: 100,
    marginTop: 42,
    marginBottom: 16,
  },

  buttonRegisterTitle: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Roboto-Regular',
  },

  buttonLoginText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    textAlign: 'center',
    color: '#1B4371',
  },
});