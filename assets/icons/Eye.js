import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';


const Eye = props => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 32 32"
    style={{
      enableBackground: 'new 0 0 32 32',
    }}>
    <Path
      stroke={props.color}
      className="st1"
      d="M29 16s-5.8 8-13 8-13-8-13-8 5.8-8 13-8 13 8 13 8z"
    />
    <Circle className="st1" cx={16} cy={16} r={4} fill={props.color} />
  </Svg>
);

export default Eye;
