export { default as EyeOff } from "./Hide";
export { default as Eye } from "./Show";
export { default as LightningIcon } from "./Lightning";
export { default as SuperBadLogo } from "./SuperbadLogo.png";
export { default as SearchIcon } from "./Search";
export { default as BellIcon } from "./Bell";
export { default as BackIcon } from "./Back";
export { default as SuperBad } from "./SuperBad";
export { default as People } from "./people";
export { default as Clothing } from "./clothing";
export { default as Devices } from "./Devices";
export { default as Dice } from "./dice";
export { default as Dollar } from "./Dollar";
export { default as Goods } from "./goods";
export { default as Roulette } from "./roulette";
export { default as Store } from "./store";
export { default as Window } from "./window";

export interface IconProps {
  OnPress?: () => void;
  Fill?: string;
}
