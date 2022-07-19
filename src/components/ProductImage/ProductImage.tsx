import type { FC } from 'react';
import { Image, ImageProps } from 'react-native';

const ProductImage: FC<ImageProps> = (props) => {
  console.warn('Native ProductImage props: ', props);
  return <Image {...props} />;
};

export { ProductImage };
