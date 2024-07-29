import { ICategory } from "../models/category.model";
import { httpClient } from "./http";

const fetchGetCategories = async () => {
  const response = await httpClient.get<ICategory[]>("/category");
  return response.data;
};

const categoryApi = {
  fetchGetCategories,
};

export default categoryApi;
