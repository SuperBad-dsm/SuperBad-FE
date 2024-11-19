import { ProductEnum } from "@/@types/type";

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
