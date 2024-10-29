import { memo, useContext, useMemo } from 'react';
import { View, Text, Image } from 'react-native';
import AsyncStorageManager from '@storage/AsyncStorageManager';
import SessionContext from '@contexts/SessionContext';
import IconButton from '@components/iconButton';
import GuestSessionTimer from './GuestSessionTimer';
import ApiConstants from '@network/apiConstants';
import { drawerProfileStyles } from './styles';

const DrawerProfile = () => {
  const styles = drawerProfileStyles();

  const {
    isUserGuest,
    user: {
      name,
      username,
      image: { hash: hashImage, profile: profileImage },
    },
  } = AsyncStorageManager.getInstance();

  const { logOut } = useContext(SessionContext);

  const {
    avatarHashUrl,
    imageSecureBaseUrl,
    imageSizes: {
      logo: { w92 },
    },
  } = ApiConstants;

  const profileImageUri = `${imageSecureBaseUrl}${w92}${profileImage}`;
  const hashImageUri = `${avatarHashUrl}${hashImage}.jpg`;

  const nameFirstWord = useMemo(() => name.split(' ')[0], [name]);
  const imageUri = useMemo(
    () => (profileImage ? profileImageUri : hashImageUri),
    [profileImage, profileImageUri, hashImageUri],
  );

  return (
    <View style={styles.profileSection}>
      <View style={styles.avatar}>
        {isUserGuest ? (
          <View style={styles.avatarImage}>
            <Text style={styles.guest}>G</Text>
          </View>
        ) : (
          <Image
            source={{ uri: imageUri }}
            style={styles.avatarImage}
          />
        )}
      </View>

      <View style={styles.detail}>
        <Text
          style={styles.profileName}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {isUserGuest ? 'Guest' : nameFirstWord}
        </Text>

        {!isUserGuest ? (
          <Text
            style={styles.username}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {username}
          </Text>
        ) : (
          <GuestSessionTimer />
        )}
      </View>

      <View style={styles.logoutView}>
        <IconButton
          icon={{
            family: 'MaterialIcons',
            name: 'logout',
            size: 20,
          }}
          onPress={() => logOut(isUserGuest)}
        />
      </View>
    </View>
  );
};

export default memo(DrawerProfile);
