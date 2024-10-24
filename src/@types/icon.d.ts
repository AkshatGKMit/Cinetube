import { StyleProp, TextStyle } from 'react-native';

declare global {
  type IconFamily =
    | 'AntDesign'
    | 'Entypo'
    | 'EvilIcons'
    | 'Feather'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'FontAwesome6'
    | 'Fontisto'
    | 'Foundation'
    | 'Ionicons'
    | 'MaterialCommunityIcons'
    | 'MaterialIcons'
    | 'Octicons'
    | 'SimpleLineIcons'
    | 'Zocial';
  type IconProps = {
    family: IconFamily;
    name: string;
    size?: number;
    color?: string;
    style?: StyleProp<TextStyle>;
  };
}
