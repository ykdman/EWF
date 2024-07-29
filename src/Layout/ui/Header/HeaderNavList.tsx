import React from "react";
import { ICategory } from "../../../shared/models/category.model";
import HeaderNavListItem from "./HeaderNavListItem";

interface Props {
  categories: ICategory[];
}

function HeaderNavList({ categories }: Props) {
  return (
    <nav id="nav-list">
      <ul className="flex justify-between gap-6">
        {/* Category */}
        {categories.map((category) => (
          <HeaderNavListItem key={category.id} category={category} />
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNavList;
