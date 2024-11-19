import { PostProductType, Product } from "@/@types/type";
import { path } from "@/constants";
import { getEnumCategory } from "@/hooks";
import { instance } from "@/utils/function/api/instance";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetProductList = () => {
  return useQuery({
    queryKey: ["productList"],
    queryFn: async () => {
      const { data } = await instance.get<Product[]>(`${path.products}`);
      return data;
    },
  });
};

export const usePostProduct = () => {
  return useMutation({
    mutationFn: async (param: PostProductType) => {
      const formData = new FormData();
      formData.append("title", param.title);
      formData.append("content", param.content);
      formData.append("price", param.price);
      formData.append("category", param.category || "");

      if (param.imageUri) {
        formData.append("image", param.imageUri, "image.jpg");
      }

      console.log(param.imageUri);

      await instance.post(`${path.products}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: () => {
      console.log("성공");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
