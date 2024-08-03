import { FaSun } from "react-icons/fa";
import { useDarkMode } from "../../hooks/useDarkMode";
import { BsMoonStarsFill } from "react-icons/bs";

function ThemeToggleButton() {
  const { isDarkMode, toggleTheme } = useDarkMode();

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? (
        <FaSun className="fill-yellow-200 text-2xl" />
      ) : (
        <BsMoonStarsFill className="fill-cyan-500 text-2xl" />
      )}
    </button>
  );
}

export default ThemeToggleButton;
