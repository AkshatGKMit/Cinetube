import ThemeContext from '@contexts/ThemeContext';
import { useContext } from 'react';
import { Dimensions, StyleSheet } from 'react-native';

const styles = () => {
  const {
    theme: { drawer: theme },
  } = useContext(ThemeContext);

  return StyleSheet.create({
    drawer: {
      flex: 1,
      backgroundColor: theme.background,
      paddingHorizontal: 8,
      paddingVertical: 12,
      gap: 20,
    },
    routes: {
      gap: 12,
    },
  });
};

export const drawerProfileStyles = () => {
  const {
    theme: { drawer: theme },
  } = useContext(ThemeContext);

  const windowWidth = Dimensions.get('window').width;

  return StyleSheet.create({
    profileSection: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 7,
    },
    avatar: {
      borderWidth: 1,
      borderColor: theme.focusedRouteFG,
      padding: 2,
      borderRadius: 40,
    },
    avatarImage: {
      height: 60,
      width: 60,
      borderRadius: 40,
      backgroundColor: theme.focusedRouteBG,
      alignItems: 'center',
      justifyContent: 'center',
    },
    guest: {
      fontSize: 30,
      fontWeight: '900',
      color: theme.focusedRouteFG,
    },
    detail: {
      flexDirection: 'column',
      width: windowWidth * 0.375,
    },
    profileName: {
      fontWeight: '700',
      fontSize: 24,
      color: theme.routeContent,
    },
    username: {
      color: theme.routeContent,
    },
    logoutView: {
      flex: 1,
      alignItems: 'flex-end',
    },
  });
};

export const guestSessionTimerStyles = () => {
  const { theme } = useContext(ThemeContext);

  return StyleSheet.create({
    view: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 2,
    },
    timerText: {
      color: theme.primaryText,
      textAlign: 'center',
      fontSize: 10,
      fontWeight: '700',
    },
  });
};

export const drawerRouteStyles = () => {
  const {
    theme: { drawer: theme },
  } = useContext(ThemeContext);

  return StyleSheet.create({
    route: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      gap: 10,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 12,
    },
    currentRoute: {
      backgroundColor: theme.focusedRouteBG,
    },
    currentRouteName: {
      color: theme.focusedRouteFG,
    },
    routeName: {
      color: theme.routeContent,
      fontSize: 18,
    },
  });
};

export default styles;
