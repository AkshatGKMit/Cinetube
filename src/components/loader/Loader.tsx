import { ActivityIndicator } from 'react-native';
import { Light } from '@constants/colors';

const Loader = ({ color, size }: LoaderProps) => {
  return (
    <ActivityIndicator
      color={color ?? Light.purple10}
      size={size ?? 'small'}
    />
  );
};

export default Loader;
