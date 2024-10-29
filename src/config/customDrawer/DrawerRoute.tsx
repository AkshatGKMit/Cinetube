import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { drawerRouteStyles } from './styles';
import Icon from '@components/icon';

const DrawerRoute = ({ route, title, icon, _onPressRoute, isFocused, index }: DrawerRouteProps) => {
  const styles = drawerRouteStyles();

  const { key } = route;

  const routeStyle = [styles.route, isFocused ? styles.currentRoute : null];
  const routeNameStyle = [styles.routeName, isFocused ? styles.currentRouteName : null];

  return (
    <TouchableWithoutFeedback
      key={key}
      onPress={() => _onPressRoute(index)}
    >
      <View style={routeStyle}>
        <Icon {...icon} />
        <Text style={routeNameStyle}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DrawerRoute;
