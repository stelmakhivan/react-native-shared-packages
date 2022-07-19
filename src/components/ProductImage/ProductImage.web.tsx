import type { FC } from 'react';

import Image, { ImageProps } from 'next/image';

const ProductImage: FC<ImageProps> = (props) => {
  console.warn('Web ProductImage props: ', props);
  return <Image {...props} />;
};

export { ProductImage };
