import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Save = props => (
  <Svg
    width={props.width}
    height={props.height}
    fill="none"
    viewBox="0 0 24 24">
    <Path
      d="M18 21a1 1 0 0 1-.491-.13l-5.673-3.207-5.323 3.2A1 1 0 0 1 5 20V5.334A2.272 2.272 0 0 1 7.2 3h9.6A2.273 2.273 0 0 1 19 5.334V20a1 1 0 0 1-1 1Zm-6.18-5.494a1 1 0 0 1 .493.129L17 18.286V5.334c0-.2-.12-.334-.2-.334H7.2c-.08 0-.2.133-.2.334v12.9l4.306-2.586a1 1 0 0 1 .515-.142Z"
      fill={props.color}
    />
  </Svg>
);

export default Save;

