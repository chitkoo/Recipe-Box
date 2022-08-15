import * as React from 'react';
import Svg, {Path} from 'react-native-svg';


const Email = props => (
  <Svg
    viewBox="0 0 512 512"
    width={props.width}
    height={props.height}
    fill={props.color}>
    <Path d="M426.667 64H85.333a64.073 64.073 0 0 0-64 64v256a64.073 64.073 0 0 0 64 64h341.334a64.073 64.073 0 0 0 64-64V128a64.073 64.073 0 0 0-64-64ZM85.333 106.667h341.334a21.358 21.358 0 0 1 19.739 13.267L284.543 265.61a42.581 42.581 0 0 1-57.085 0L65.595 119.934a21.358 21.358 0 0 1 19.738-13.267Zm341.334 298.666H85.333A21.357 21.357 0 0 1 64 384V175.9l134.916 121.425a85.155 85.155 0 0 0 114.169 0L448 175.9V384a21.357 21.357 0 0 1-21.333 21.333Z" />
  </Svg>
);

export default Email;
