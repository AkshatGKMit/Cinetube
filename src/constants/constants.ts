import { Platform } from 'react-native';

export const isIos = Platform.OS === 'ios';

export const isAndroid = Platform.OS === 'android';

export const defaultStorageValues: StorageValues = {
  firstTimeAppInstall: false,
  sessionId: { id: '' },
  isUserGuest: false,
};
