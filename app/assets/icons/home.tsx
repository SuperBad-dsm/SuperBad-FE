import React from "react";
import { Path, Svg } from "react-native-svg";
import { IconProps } from ".";

export default function Home({ Fill }: IconProps) {
  return (
    <Svg width="34" height="34" viewBox="0 0 34 34" fill="none">
      <Path
        d="M28.3333 24.0836V16.224C28.3333 15.467 28.3327 15.0883 28.2406 14.7361C28.1591 14.4239 28.0252 14.1285 27.844 13.8616C27.6395 13.5604 27.3552 13.3106 26.7855 12.8121L19.9855 6.86209C18.9278 5.9366 18.399 5.47409 17.8038 5.29808C17.2793 5.14299 16.7204 5.14299 16.1959 5.29808C15.6012 5.47396 15.0731 5.93603 14.017 6.86012L7.21475 12.8121C6.64506 13.3106 6.36088 13.5604 6.1564 13.8616C5.9752 14.1285 5.84027 14.4239 5.7587 14.7361C5.66666 15.0883 5.66666 15.467 5.66666 16.224V24.0836C5.66666 25.4037 5.66666 26.0636 5.88233 26.5842C6.1699 27.2785 6.72111 27.8307 7.41535 28.1183C7.93604 28.334 8.59612 28.334 9.91629 28.334C11.2365 28.334 11.8973 28.334 12.418 28.1183C13.1122 27.8307 13.6633 27.2786 13.9508 26.5844C14.1665 26.0637 14.1667 25.4036 14.1667 24.0834V22.6668C14.1667 21.102 15.4352 19.8334 17 19.8334C18.5648 19.8334 19.8333 21.102 19.8333 22.6668V24.0834C19.8333 25.4036 19.8333 26.0637 20.049 26.5844C20.3366 27.2786 20.8878 27.8307 21.582 28.1183C22.1027 28.334 22.7628 28.334 24.083 28.334C25.4031 28.334 26.0639 28.334 26.5846 28.1183C27.2789 27.8307 27.8299 27.2785 28.1175 26.5842C28.3332 26.0636 28.3333 25.4037 28.3333 24.0836Z"
        fill={Fill}
        stroke={Fill}
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}