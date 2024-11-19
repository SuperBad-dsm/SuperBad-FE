import { Dwq, ProductEnum, dwe } from "@/@types/type";

export const getEnumCategory = (category: string | undefined) => {
  switch (category) {
    case "의류":
      return ProductEnum.의류;
    case "굿즈":
      return ProductEnum.굿즈;
    case "가전제품":
      return ProductEnum.가전제품;
    case "무료나눔":
      return ProductEnum.무료나눔;
    default:
      return undefined;
  }
};
export const getEnumCategorYfwe = (category: string | undefined) => {
  switch (category) {
    case "GOODS":
      return Dwq.GOODS;
    case "CLOTHES":
      return Dwq.CLOTHES;
    case "ELECTRONICS":
      return Dwq.ELECTRONICS;
    case "FREE":
      return Dwq.FREE;
    case "HIGHEND":
      return Dwq.HIGHEND;
    default:
      return undefined;
  }
};

export const V = (a: string | undefined) => {
  switch (a) {
    case "ONSALES":
      return dwe.ONSALES;
    case "RESERVATION":
      return dwe.RESERVATION;
    case "SOLDOUT":
      return dwe.SOLDOUT;
    case "available":
      return dwe.available;
    default:
      return undefined;
  }
};
