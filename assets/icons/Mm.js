import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Mm = props => (
  <Svg
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 512 512">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M256 32c123.712 0 224 100.288 224 224S379.712 480 256 480 32 379.712 32 256 132.288 32 256 32Z"
      fill="#32AB45"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M465.887 177.6H46.094C77.874 92.555 159.86 32 255.99 32c96.13 0 178.117 60.555 209.896 145.6Z"
      fill="#FFE70E"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M255.147 479.998c-95.766-.353-177.367-60.802-209.053-145.6h419.794c-31.686 84.798-113.286 145.247-209.053 145.6h-1.688Z"
      fill="#E92B2B"
    />
    <Path
      d="m256 120 32.105 100.839H392l-84.053 62.322L340.053 384 256 321.678 171.947 384l32.106-100.839L120 220.839h103.895L256 120Z"
      fill="#FBFBFB"
    />
  </Svg>
);

export default Mm;
