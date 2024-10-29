import AsyncStorage from '@react-native-async-storage/async-storage';
import { defaultStorageValues } from '@constants/constants';

const {
  firstTimeAppInstall: defaultFirstTimeAppInstall,
  isUserGuest: defaultIsUserGuest,
  sessionId: defaultSessionId,
} = defaultStorageValues;

class AsyncStorageManager {
  private static instance: AsyncStorageManager;

  public firstTimeAppInstall: boolean = defaultFirstTimeAppInstall;
  public sessionId: Session = defaultSessionId;
  public isUserGuest: boolean = defaultIsUserGuest;

  private constructor() {
    this.loadStore();
  }

  public static getInstance(): AsyncStorageManager {
    if (!AsyncStorageManager.instance) {
      AsyncStorageManager.instance = new AsyncStorageManager();
    }
    return AsyncStorageManager.instance;
  }

  public async getStore<T>(key: StorageKey): Promise<T | undefined> {
    try {
      const item = await AsyncStorage.getItem(key);

      if (!item) {
        return undefined;
      }

      return JSON.parse(item) as T;
    } catch (error) {
      console.log(`Async Storage: Error retrieving item for key "${key}":`, error);
      return undefined;
    }
  }

  private async saveStoreValue(key: StorageKey, value: string) {
    await AsyncStorage.setItem(key, value);
  }

  private async loadStore() {
    this.firstTimeAppInstall = (await this.getStore<boolean>('firstTimeAppInstall')) ?? true;
    this.sessionId = (await this.getStore<Session>('session')) ?? defaultSessionId;
  }
  public setUserAsGuest() {
    this.isUserGuest = true;
  }

  public removeUserAsGuest() {
    this.isUserGuest = false;
  }

  public async saveSessionId(session: Session) {
    await this.saveStoreValue('session', JSON.stringify(session));
  }

  public async removeSessionId() {
    this.sessionId = defaultSessionId;
    await this.saveSessionId(defaultSessionId);
  }

  public clearFirstTimeAppInstall() {
    this.firstTimeAppInstall = false;
    this.saveStoreValue('firstTimeAppInstall', JSON.stringify(false));
  }
}

export default AsyncStorageManager;
