import type { FC } from 'react';

import Image from 'next/image';

import type { ProductImageProps } from './productImageProps';

const ProductImage: FC<ProductImageProps> = (props) => {
  console.warn('Web ProductImage props: ', props);
  return <Image {...props} />;
};

export { ProductImage };
