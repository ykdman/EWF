import React from "react";
import { ICategory } from "../../../shared/models/category.model";
import { NavLink } from "react-router-dom";
import Button from "../../../shared/ui/Button";
interface Props {
  category: ICategory;
}
function CategoryItem({ category }: Props) {
  return (
    <li className="hover:bg-sub-1 cursor-pointer rounded-md border border-solid border-black px-3 py-2 shadow-md transition-[colors,transform] hover:scale-110">
      <NavLink to={category.url} end>
        {category.name}
      </NavLink>
    </li>
  );
}

export default CategoryItem;
