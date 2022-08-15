import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const Plus = props => (
  <Svg
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    width={props.width}
    height={props.height}>
    <Circle cx={12} cy={12} r={10} />
    <Path d="M12 8v8M8 12h8" />
  </Svg>
);

export default Plus;
