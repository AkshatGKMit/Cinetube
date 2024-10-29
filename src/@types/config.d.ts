type DrawerRoute = {
  name: string;
  key: string;
};

type DrawerRouteProps = {
  route: DrawerRoute;
  title: string;
  icon: IconProps;
  isFocused: boolean;
  index: number;
  _onPressRoute: (index: number) => void;
};
