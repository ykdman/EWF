import { IoBarbellSharp } from "react-icons/io5";
import { useCategory } from "../../../hooks/useCategory";
import HeaderNavList from "./HeaderNavList";
import HeaderCredential from "./HeaderCredential";

function Header() {
  const { fetchedCategory } = useCategory();

  return (
    <header className="w-full  flex p-5 justify-between items-center bg-gradient-to-r from-cyan-500 to-blue-600 ">
      {/* <div id="title">
        <h1 className="text-7xl">모.운.게</h1>
      </div> */}
      <div id="logo">
        <IoBarbellSharp className="w-24 h-24 hover:text-cyan-50 cursor-pointer" />
      </div>
      <p className="w-full my-0 mx-auto flex justify-center">
        <h1 className="text-2xl font-bold">모두의 운동!</h1>
      </p>
      <div className="flex justify-between items-center w-[300px] gap-6">
        <HeaderNavList categories={fetchedCategory} />
        <HeaderCredential />
      </div>
    </header>
  );
}

export default Header;
