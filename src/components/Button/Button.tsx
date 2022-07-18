import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './button.styles';

const Button = () => {
  const handlePress = () => {
    // eslint-disable-next-line no-alert
    alert('Button pressed');
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Text style={styles.text}>Press</Text>
    </TouchableOpacity>
  );
};

export { Button };
