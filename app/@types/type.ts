import React from "react";

export interface MenuType {
  icon: React.JSX.Element;
  name: string;
  to: string;
}

export enum ProductEnum {
  옷 = "CLOTHES",
  굿즈 = "GOODS",
  가전제품 = "ELECTRONICS",
  무료나눔 = "FREE",
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
