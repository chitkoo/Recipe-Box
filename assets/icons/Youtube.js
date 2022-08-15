import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Youtube = props => (
  <Svg
    viewBox="0 0 512 512"
    style={{
      enableBackground: 'new 0 0 512 512',
    }}
    width={props.width}
    height={props.height}>
    <Path
      style={{
        fill: '#f44336',
      }}
      d="M490.24 113.92c-13.888-24.704-28.96-29.248-59.648-30.976C399.936 80.864 322.848 80 256.064 80c-66.912 0-144.032.864-174.656 2.912-30.624 1.76-45.728 6.272-59.744 31.008C7.36 138.592 0 181.088 0 255.904v.256c0 74.496 7.36 117.312 21.664 141.728 14.016 24.704 29.088 29.184 59.712 31.264C112.032 430.944 189.152 432 256.064 432c66.784 0 143.872-1.056 174.56-2.816 30.688-2.08 45.76-6.56 59.648-31.264C504.704 373.504 512 330.688 512 256.192v-.256c0-74.848-7.296-117.344-21.76-142.016z"
    />
    <Path
      style={{
        fill: '#fafafa',
      }}
      d="M192 352V160l160 96z"
    />
  </Svg>
);

export default Youtube;