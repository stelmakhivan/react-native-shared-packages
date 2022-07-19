import type { ImageProps as ReactNativeImageProps } from 'react-native';

import type { ImageProps as NextImageProps } from 'next/image';

export type ProductImageProps = Omit<NextImageProps, 'src'> &
  Omit<ReactNativeImageProps, 'source'> & {
    source: string;
  };
