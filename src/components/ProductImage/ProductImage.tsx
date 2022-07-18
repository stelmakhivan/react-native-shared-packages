import React, { FC } from 'react';
import { Image, ImageProps } from 'react-native';

const ProductImage: FC<ImageProps> = (props) => {
  return <Image {...props} />;
};

export { ProductImage };
