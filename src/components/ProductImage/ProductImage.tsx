import type { FC } from 'react';

import { Image } from 'react-native';

import type { ProductImageProps } from './productImageProps';

const ProductImage: FC<ProductImageProps> = ({ source, ...props }) => {
  console.warn('Native ProductImage props: ', props);
  return <Image {...props} source={{ uri: source }} />;
};

export { ProductImage };
