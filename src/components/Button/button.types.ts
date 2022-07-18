import type { TextStyle, TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  label?: string;
  labelStyle?: TextStyle;
  buttonStyle?: TouchableOpacityProps['style'];
}
