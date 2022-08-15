import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Profile = props => (
  <Svg viewBox="0 0 32 32" {...props} fill={props.color}>
    <Path d="M21 30H11a5 5 0 0 1-5-5v-1a9 9 0 0 1 9-9h2a9 9 0 0 1 9 9v1a5 5 0 0 1-5 5Zm-6-13a7 7 0 0 0-7 7v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1a7 7 0 0 0-7-7ZM16 14a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm0-10a4 4 0 1 0 4 4 4 4 0 0 0-4-4Z" />
  </Svg>
);

export default Profile;
