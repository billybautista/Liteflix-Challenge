import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Heart = ({color}) => (
  <Svg
    width={23}
    height={20}
    fill="none"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M10.09 17S1 11.91 1 5.727a4.728 4.728 0 0 1 9.09-1.821h0a4.728 4.728 0 0 1 9.092 1.821C19.182 11.91 10.09 17 10.09 17Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Heart;
