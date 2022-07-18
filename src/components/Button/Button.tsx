import { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './button.styles';
import { ButtonProps } from './button.types';

const Button: FC<ButtonProps> = ({
  onPress,
  buttonStyle,
  label,
  labelStyle,
  ...buttonProps
}) => {
  return (
    <TouchableOpacity
      {...buttonProps}
      onPress={onPress}
      style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export { Button };
