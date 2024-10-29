import { DrawerNavigationProp } from '@react-navigation/drawer';
import Routes from '@constants/routes';

declare global {
  type DrawerScreenNames = keyof typeof Routes.Drawer;
  type RootDrawerParamList = Record<DrawerScreenNames, undefined>;
  type DrawerNavigation = DrawerNavigationProp<RootDrawerParamList>;
}
