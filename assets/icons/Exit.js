import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Exit = props => (
  <Svg
    style={{
      enableBackground: 'new 0 0 24 24',
    }}
    viewBox="0 0 24 24"
    width={props.width}
    height={props.height}>
    <Path
      fill={props.color}
      d="M12 10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2s-2 .9-2 2v4c0 1.1.9 2 2 2z"
    />
    <Path
      fill={props.color}
      d="M19.1 4.9c-.3-.3-.6-.4-1.1-.4-.8 0-1.5.7-1.5 1.5 0 .4.2.8.4 1.1 1.3 1.3 2 3 2 4.9 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-1.9.8-3.7 2.1-4.9.3-.3.5-.7.5-1.1 0-.8-.7-1.5-1.5-1.5-.4 0-.8.2-1.1.4C3.1 6.7 2 9.2 2 12c0 5.5 4.5 10 10 10s10-4.5 10-10c0-2.8-1.1-5.3-2.9-7.1z"
    />
  </Svg>
);

export default Exit;
