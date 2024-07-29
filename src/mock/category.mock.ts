import { http, HttpResponse } from "msw";
import { v4 } from "uuid";
const CATEGORY = [
  {
    id: "category_" + v4(),
    name: "루틴 게시판",
  },
  {
    id: "category_" + v4(),
    name: "장비 게시판",
  },
];

export const getCategory = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/category`,
  () => {
    return HttpResponse.json(CATEGORY, { status: 200 });
  }
);
