import React from "react";
import { ICategory } from "../../../shared/models/category.model";
import { Link } from "react-router-dom";

interface Props {
  category: ICategory;
}
function HeaderNavListItem({ category }: Props) {
  return (
    <li className="w-max font-semibold text-xl">
      <Link to={"/"}>{category.name}</Link>
    </li>
  );
}

export default HeaderNavListItem;
