import React from "react";
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";

export default function Dollar() {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <G clip-path="url(#clip0_281_2963)">
        <Path
          d="M16 1.33331V30.6666M22.6667 6.66665H12.6667C11.429 6.66665 10.242 7.15831 9.36684 8.03348C8.49167 8.90865 8 10.0956 8 11.3333C8 12.571 8.49167 13.758 9.36684 14.6331C10.242 15.5083 11.429 16 12.6667 16H19.3333C20.571 16 21.758 16.4916 22.6332 17.3668C23.5083 18.242 24 19.429 24 20.6666C24 21.9043 23.5083 23.0913 22.6332 23.9665C21.758 24.8416 20.571 25.3333 19.3333 25.3333H8"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_281_2963">
          <Rect width="32" height="32" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
