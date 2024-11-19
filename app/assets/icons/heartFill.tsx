import { IconProps } from ".";
import { Path, Svg } from "react-native-svg";
import React from "react";

export default function HeartFill({ Fill, width, height }: IconProps) {
  return (
    <Svg
      width={width || 28}
      height={height || 28}
      viewBox="0 0 28 28"
      fill="none"
    >
      <Path
        d="M19.4688 3.9375C17.2714 3.9375 15.3212 4.80484 14 6.29563C12.6788 4.80484 10.7286 3.9375 8.53125 3.9375C6.61743 3.93982 4.78266 4.7011 3.42938 6.05438C2.0761 7.40766 1.31482 9.24243 1.3125 11.1562C1.3125 19.0684 12.8855 25.3903 13.3777 25.6561C13.5689 25.7591 13.7828 25.813 14 25.813C14.2172 25.813 14.4311 25.7591 14.6223 25.6561C15.1145 25.3903 26.6875 19.0684 26.6875 11.1562C26.6852 9.24243 25.9239 7.40766 24.5706 6.05438C23.2173 4.7011 21.3826 3.93982 19.4688 3.9375ZM18.8683 19.5081C17.345 20.8008 15.7166 21.9642 14 22.9862C12.2834 21.9642 10.655 20.8008 9.13172 19.5081C6.76156 17.4748 3.9375 14.3741 3.9375 11.1562C3.9375 9.93791 4.42148 8.76947 5.28298 7.90798C6.14447 7.04648 7.31291 6.5625 8.53125 6.5625C10.4781 6.5625 12.1078 7.59062 12.7848 9.24656C12.8834 9.48796 13.0516 9.69454 13.268 9.83995C13.4844 9.98537 13.7393 10.063 14 10.063C14.2607 10.063 14.5156 9.98537 14.732 9.83995C14.9484 9.69454 15.1166 9.48796 15.2152 9.24656C15.8922 7.59062 17.5219 6.5625 19.4688 6.5625C20.6871 6.5625 21.8555 7.04648 22.717 7.90798C23.5785 8.76947 24.0625 9.93791 24.0625 11.1562C24.0625 14.3741 21.2384 17.4748 18.8683 19.5081Z"
        fill={Fill}
      />
      <Path
        d="M18.8683 19.5081C17.345 20.8008 15.7166 21.9642 14 22.9862C12.2834 21.9642 10.655 20.8008 9.13172 19.5081C6.76156 17.4748 3.9375 14.3741 3.9375 11.1562C3.9375 9.93791 4.42148 8.76947 5.28298 7.90798C6.14447 7.04648 7.31291 6.5625 8.53125 6.5625C10.4781 6.5625 12.1078 7.59062 12.7848 9.24656C12.8834 9.48796 13.0516 9.69454 13.268 9.83995C13.4844 9.98537 13.7393 10.063 14 10.063C14.2607 10.063 14.5156 9.98537 14.732 9.83995C14.9484 9.69454 15.1166 9.48796 15.2152 9.24656C15.8922 7.59062 17.5219 6.5625 19.4688 6.5625C20.6871 6.5625 21.8555 7.04648 22.717 7.90798C23.5785 8.76947 24.0625 9.93791 24.0625 11.1562C24.0625 14.3741 21.2384 17.4748 18.8683 19.5081Z"
        fill={Fill}
      />
    </Svg>
  );
}
