export { default as EyeOff } from "./Hide";
export { default as Eye } from "./Show";
export { default as LightningIcon } from "./Lightning";
export { default as SuperBadLogo } from "./SuperbadLogo.png";
export { default as SearchIcon } from "./Search";
export { default as BellIcon } from "./Bell";
export { default as BackIcon } from "./Back";
export { default as SuperBad } from "./SuperBad";
export { default as People } from "./people";

export interface IconProps {
  OnPress?: () => void;
  Fill?: string;
}
