import { PostProductType, Product } from "@/@types/type";
import { path } from "@/constants";
import { getToken } from "@/utils";
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
      formData.append("price", param.price.toString()); // 가격은 문자열로 변환
      formData.append("category", param.category || "");

      if (param.imageUri) {
        // imageUri가 File 객체일 경우, 파일을 FormData에 추가
        if (param.imageUri instanceof File) {
          formData.append("image", param.imageUri, param.imageUri.name); // 파일과 파일 이름을 추가
        } else {
          // imageUri가 URI인 경우 처리 (이미지 URI가 제공된 경우)
          const uri = param.imageUri.uri;
          const response = await fetch(uri);
          const blob = await response.blob(); // 파일을 Blob으로 변환
          formData.append("image", blob, "image.jpg"); // Blob을 FormData에 추가
        }
      }
      const { accessToken } = await getToken(); // 오타 수정
      const headers = {
        Authorization: `Bearer ${accessToken}`, // Authorization 헤더 (자신의 토큰으로 교체)
      };

      const requestOptions = {
        method: "POST",
        headers: headers,
        body: formData,
      };

      try {
        instance
          .post(`${path.products}`, formData, {
            headers: {
              "content-type": "multipart/formed-data",
            },
          })
          .then(() => {
            console.log("애려");
          })
          .catch((err) => {
            console.log("에효", err);
          });

        // const response = await fetch(
        //   `${process.env.EXPO_PUBLIC_BASE_URL}${path.products}`,
        //   requestOptions
        // );
        // const result = await response.text();
        // if (response.ok) {
        //   console.log("성공:", result);
        // } else {
        //   console.error("서버 오류:", result);
        // }
      } catch (error) {
        console.error("네트워크 오류:", error);
      }
    },
    onSuccess: () => {
      console.log("성공");
    },
    onError: (error) => {
      console.error("에러 발생:", error);
    },
  });
};
