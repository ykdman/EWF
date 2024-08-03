import { useCategory } from "../../../hooks/useCategory";
import { Link } from "react-router-dom";
import CategoryItem from "./CategoryItem";

function CategoryMain() {
  const { fetchedCategory } = useCategory();

  return (
    <section
      id="category"
      className="dark:bg-sub dark:text-dark mx-auto my-4 w-max max-w-screen-xl bg-primary-3 px-5 py-4"
    >
      <nav className="mx-auto w-max">
        <ul className="flex gap-4">
          {fetchedCategory.map((category) => (
            <CategoryItem category={category} key={category.id} />
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default CategoryMain;
