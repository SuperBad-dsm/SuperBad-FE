import React from "react";

export interface MenuType {
  icon: React.JSX.Element;
  name: string;
  to: string;
}

export enum ProductEnum {
  의류 = "CLOTHES",
  굿즈 = "GOODS",
  가전제품 = "ELECTRONICS",
  무료나눔 = "FREE",
}

export enum Dwq {
  CLOTHES = "의류",
  GOODS = "굿즈",
  ELECTRONICS = "가전제품",
  FREE = "무료나눔",
  HIGHEND = "명품",
}

export enum dwe {
  ONSALES = "판매중",
  RESERVATION = "예약중",
  SOLDOUT = "판매완료",
  available = "판매중",
}

export interface Product {
  id: number;
  title: string;
  content: string;
  price: number;
  category: ProductEnum;
  createdDate: string;
  heartCount: number;
  status: string;
  imageUrl: string;
  seller: {
    userId: string;
    nickname: string;
    password: string;
  };
}

export interface PostProductType {
  title: string;
  content: string;
  price: number;
  category: string | undefined;
  imageUri?: File | { uri: string };
}
