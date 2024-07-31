import { SiAlwaysdata } from "react-icons/si";
import { useCategory } from "../../../hooks/useCategory";

function Header() {
  const { fetchedCategory } = useCategory();

  return (
    <header className="w-full h-[80px] flex justify-between  items-center bg-gradient-to-r from-indigo-500  to-emerald-500 ">
      <div className="px-2">
        {/* logo */}
        <SiAlwaysdata className="w-10 h-10" />
      </div>

      <div>
        <h1 className="font-bold">Waymaker</h1>
      </div>

      <div className="px-4">
        {/* sign */}
        <div className="flex gap-4">
          <button>로그인</button>
          <button>회원가입</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
