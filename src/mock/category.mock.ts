import { http, HttpResponse } from "msw";
import { v4 } from "uuid";
import { ICategory } from "../shared/models/category.model";
const CATEGORY = [
  {
    id: "category_" + v4(),
    name: "마이 페이지",
    url: "/mypage",
  },
  {
    id: "category_" + v4(),
    name: "새로운 여정",
    url: "/journey",
  },
];

export const getCategory = http.get<ICategory>(
  `${import.meta.env.VITE_API_BASE_URL}/category`,
  () => {
    return HttpResponse.json(CATEGORY, { status: 200 });
  },
);
