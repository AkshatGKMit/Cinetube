import { useContext, useMemo } from 'react';
import { View, Text } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import ThemeContext from '@contexts/ThemeContext';
import IconButton from '@components/iconButton';
import drawerHeaderStyles from './style';

const CustomHeader = ({ title, isDrawerHeader }: HeaderProps) => {
  const { dispatch } = useNavigation<DrawerNavigation>();

  const {
    theme: { header: theme },
  } = useContext(ThemeContext);

  const styles = useMemo(() => drawerHeaderStyles(), []);

  function _onPressLeftIcon() {
    isDrawerHeader ? dispatch(DrawerActions.toggleDrawer()) : null;
  }

  const parentViewStyles = [styles.header, !isDrawerHeader ? styles.headerFlexStart : null];

  const icon: IconProps = {
    family: isDrawerHeader ? 'MaterialIcons' : 'Feather',
    name: isDrawerHeader ? 'line-weight' : 'arrow-left',
    size: 24,
    color: theme.content,
  };

  return (
    <View style={parentViewStyles}>
      <IconButton
        icon={icon}
        style={styles.icon}
        onPress={_onPressLeftIcon}
      />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default CustomHeader;
