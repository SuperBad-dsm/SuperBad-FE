import React from "react";
import { Path, Svg } from "react-native-svg";
import { IconProps } from ".";
export default function Lightning({Fill, width, height}:IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 40 49" fill="none">
      <Path
        d="M39.5351 15.5238H26.7099L38.2423 0.766451C38.4813 0.453987 38.2657 0 37.8758 0H15.5499C15.3869 0 15.2296 0.0884293 15.1478 0.235812L0.0641694 26.6198C-0.116308 26.9324 0.104906 27.3273 0.465861 27.3273H10.6189L5.41426 48.4111C5.30362 48.871 5.8509 49.1954 6.18854 48.8651L39.8554 16.3316C40.1581 16.0427 39.9541 15.5238 39.5351 15.5238Z"
        fill={Fill || "#FFEC3E"}
      />
    </Svg>
  );
}
