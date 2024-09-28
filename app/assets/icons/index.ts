export { default as EyeOff } from "./Hide";
export { default as Eye } from "./Show";
export { default as LightningIcon } from "./Lightning";
export { default as BackIcon } from "./Back"

export interface IconProps {
  OnPress?: () => void;
  Fill?: string;
}
