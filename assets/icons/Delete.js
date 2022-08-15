import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const Delete = props => (
  <Svg width={props.width} height={props.height} viewBox="0 0 64 64">
    <G data-name="Layer 20">
      <Path fill={props.color} d="M49.93 17.33h-8.06V12a1.5 1.5 0 0 0-1.5-1.5H23.63a1.5 1.5 0 0 0-1.5 1.5v5.33h-8.06a1.5 1.5 0 0 0 0 3H16V48a5.49 5.49 0 0 0 5.49 5.48h21.1A5.49 5.49 0 0 0 48 48V20.33h1.89a1.5 1.5 0 0 0 .04-3Zm-24.8-3.83h13.74v3.83H25.13ZM45 48a2.49 2.49 0 0 1-2.49 2.48H21.45A2.49 2.49 0 0 1 19 48V20.33h26Z" />
      <Path fill={props.color} d="M28 25.87a1.5 1.5 0 0 0-1.5 1.5v16.09a1.5 1.5 0 1 0 3 0V27.37a1.5 1.5 0 0 0-1.5-1.5ZM36 25.87a1.5 1.5 0 0 0-1.5 1.5v16.09a1.5 1.5 0 1 0 3 0V27.37a1.5 1.5 0 0 0-1.5-1.5Z" />
    </G>
  </Svg>
);

export default Delete;
