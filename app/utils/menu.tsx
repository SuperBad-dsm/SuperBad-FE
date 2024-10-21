import React from "react";
import { MenuType } from "@/@types/type";
import { Image, View } from "react-native";
import Home from "@/assets/icons/home";
import { theme } from "./function/color/constant";
import {
  Clothing,
  Devices,
  Dice,
  Dollar,
  Goods,
  Roulette,
  SmallLightning,
  Store,
} from "@/assets/icons";
import Chat from "@/assets/icons/chat";

export const MenuList: MenuType[] = [
  {
    name: "전체",
    to: "전체",
    icon: <Home Fill={theme.color.white} />,
  },
  {
    name: "추천상품",
    to: "추천",
    icon: <SmallLightning />,
  },
  {
    name: "무료나눔",
    to: "무료나눔",
    icon: <Dollar />,
  },
  {
    name: "굿즈",
    to: "굿즈",
    icon: <Goods />,
  },

  {
    name: "가전제품",
    to: "가전제품",
    icon: <Devices />,
  },
  {
    name: "의류",
    to: "의류",
    icon: <Clothing />,
  },
  {
    name: "채팅",
    to: "채팅",
    icon: <Chat Fill={theme.color.white} />,
  },
  {
    name: "내 상점",
    to: "내 상점",
    icon: <Store />,
  },
  {
    name: "룰렛",
    to: "룰렛",
    icon: <Roulette />,
  },

  {
    name: "랜덤",
    to: "랜덤",
    icon: <Dice />,
  },
];
