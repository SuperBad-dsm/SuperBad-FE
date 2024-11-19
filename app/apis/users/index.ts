import { path } from "@/constants";
import { instance } from "@/utils/function/api/instance";
import { useMutation, useQueries, useQuery } from "@tanstack/react-query";

interface userInfo {
  userId: string;
  nickname: string;
  password: string;
}

interface userDetailInfo {
  userId: string;
  nickname: string;
  password: string;
  products: {
    id: number;
    title: string;
    content: string;
    price: number;
    category: string;
    createdDate: string;
    heartCount: number;
    status: string;
    imageUrl: string;
  }[];
}

export const UserSimpleInfo = () => {
  return useQuery({
    queryKey: ["userinfoSimple"],
    queryFn: async () => {
      const { data } = await instance.get<userInfo>(`${path.users}/myinfo`);
      return data;
    },
  });
};

export const userDetailInfo = (userId: string) => {
  return useMutation({
    mutationFn: async () => {
      const { data } = await instance.get<userDetailInfo>(
        `${path.users}/${userId}`
      );
      return data;
    },
  });
};
