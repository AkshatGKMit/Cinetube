type StorageKey = 'session' | 'firstTimeAppInstall';

type Session = { id: string; expiresAt?: string };

type StorageValues = {
  firstTimeAppInstall: boolean;
  sessionId: Session;
  isUserGuest: boolean;
};
