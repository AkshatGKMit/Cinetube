import { useContext } from 'react';
import { View } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import ThemeContext from '@contexts/ThemeContext';
import DrawerProfile from './DrawerProfile';
import DrawerRoute from './DrawerRoute';
import Routes from '@constants/routes';
import customDrawerStyles, { drawerRouteStyles } from './styles';

const CustomDrawer = ({ state: { routes, index }, navigation: { closeDrawer, navigate } }: DrawerContentComponentProps) => {
  const { MovieStack, Settings } = Routes.Drawer;

  const {
    theme: { drawer: theme },
  } = useContext(ThemeContext);

  const styles = customDrawerStyles();
  const routeStyles = drawerRouteStyles();

  function _onPressRoute(idx: number) {
    closeDrawer();

    switch (idx) {
      case 0:
        navigate(MovieStack);
        break;
      case 1:
        navigate(Settings);
    }
  }

  function getRouteTitle(idx: number): string {
    switch (idx) {
      case 0:
        return 'Movies';
      case 1:
        return 'Settings';

      default:
        return '';
    }
  }

  function getRouteIcon(idx: number): IconProps {
    const icon: IconProps = {
      family: 'MaterialIcons',
      size: routeStyles.routeName.fontSize,
      color: idx === index ? theme.focusedRouteFG : theme.routeContent,
    };

    switch (idx) {
      case 0:
        return { ...icon, name: 'movie' };
      case 1:
        return { ...icon, name: 'settings' };

      default:
        return icon;
    }
  }

  return (
    <View style={styles.drawer}>
      <DrawerProfile />

      <View style={styles.routes}>
        {routes.map((route: DrawerRoute, idx: number) => (
          <DrawerRoute
            route={route}
            index={idx}
            title={getRouteTitle(idx)}
            icon={getRouteIcon(idx)}
            isFocused={idx === index}
            _onPressRoute={_onPressRoute}
          />
        ))}
      </View>
    </View>
  );
};

export default CustomDrawer;
