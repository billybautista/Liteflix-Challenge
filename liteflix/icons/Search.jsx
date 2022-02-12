import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const Search = ({color, props}) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 19 19"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G stroke={color} strokeLinecap="round" strokeLinejoin="round">
      <Path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14ZM12.95 12.95 17 17" />
    </G>
  </Svg>
);

export default Search;
