import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const Camera = ({color}) => (
  <Svg
    width={36}
    height={18}
    fill="none"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg">
    <G stroke={color}>
      <Path
        d="M1.877 1h14.032c.93 0 1.822.322 2.48.896.658.574 1.028 1.352 1.028 2.163v9.176a.719.719 0 0 1-.257.541.946.946 0 0 1-.62.224H4.508c-.93 0-1.823-.322-2.48-.896C1.37 12.531 1 11.752 1 10.941V1.765c0-.203.092-.398.257-.541A.946.946 0 0 1 1.877 1v0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M10.5 4.25v6M13.5 7.25h-6" />
      <Path
        d="m19.416 6.056 5.417-2.89v8.668l-5.417-2.89"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

export default Camera;
