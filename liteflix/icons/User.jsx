import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const User = ({color, props}) => (
  <Svg
    width={22}
    height={20}
    fill="none"
    viewBox="0 0 19 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G stroke={color}>
      <Path
        d="M9.436 12.13a5.565 5.565 0 1 0 0-11.13 5.565 5.565 0 0 0 0 11.13Z"
        strokeMiterlimit={10}
      />
      <Path
        d="M1 17a9.743 9.743 0 0 1 16.872 0"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

export default User;
