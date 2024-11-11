import { Product } from "@/@types/type";
import { path } from "@/constants";
import { instance } from "@/utils/function/api/instance";
import { useQuery } from "@tanstack/react-query";

export const useGetProductList = () => {
  return useQuery({
    queryKey: ["productList"],
    queryFn: async () => {
      const { data } = await instance.get<Product[]>(`${path.products}`);
      return data;
    },
  });
};
