import React from "react";
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";

export default function Camera() {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <G clip-path="url(#clip0_258_2800)">
        <Path
          d="M30.36 25.08C30.36 25.7801 30.0819 26.4516 29.5868 26.9467C29.0917 27.4418 28.4202 27.72 27.72 27.72H3.96001C3.25984 27.72 2.58834 27.4418 2.09325 26.9467C1.59815 26.4516 1.32001 25.7801 1.32001 25.08V10.56C1.32001 9.85979 1.59815 9.1883 2.09325 8.6932C2.58834 8.1981 3.25984 7.91996 3.96001 7.91996H9.24001L11.88 3.95996H19.8L22.44 7.91996H27.72C28.4202 7.91996 29.0917 8.1981 29.5868 8.6932C30.0819 9.1883 30.36 9.85979 30.36 10.56V25.08Z"
          stroke="#D4D4D8"
          stroke-width="2.64"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M15.84 22.44C18.7561 22.44 21.12 20.076 21.12 17.16C21.12 14.2439 18.7561 11.88 15.84 11.88C12.9239 11.88 10.56 14.2439 10.56 17.16C10.56 20.076 12.9239 22.44 15.84 22.44Z"
          stroke="#D4D4D8"
          stroke-width="2.64"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_258_2800">
          <Rect width="31.68" height="31.68" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
