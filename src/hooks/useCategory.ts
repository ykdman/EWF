import { useEffect, useState } from "react";
import { ICategory } from "../shared/models/category.model";
import { categoryApi } from "../shared/api";

export const useCategory = () => {
  const [fetchedCategory, setFetchedCategory] = useState<ICategory[]>([]);

  useEffect(() => {
    categoryApi.fetchGetCategories().then((categories) => {
      setFetchedCategory(categories);
    });
  }, []);

  return { fetchedCategory };
};
