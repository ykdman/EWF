import { SiAlwaysdata } from "react-icons/si";
import { useCategory } from "../../hooks/useCategory";
import NormalButton from "../../shared/ui/NormalButton";
import PrimaryButton from "../../shared/ui/PrimaryButton";
import { Link } from "react-router-dom";
import Button from "../../shared/ui/Button";

function Header() {
  const { fetchedCategory } = useCategory();

  return (
    <header className="flex h-[80px] w-full items-center justify-between bg-teal-600">
      <div className="px-2">
        {/* logo */}
        <SiAlwaysdata className="h-10 w-10" />
      </div>

      <div>
        <h1 className="font-sans text-3xl font-semibold">Waymaker</h1>
      </div>

      <div className="px-4">
        {/* sign */}
        <div className="flex gap-4">
          {/* <NormalButton>
            <Link to={"/signin"}>로그인</Link>
          </NormalButton> */}
          <Button color="normal" size="small" className="text-xs">
            <Link to={"/signin"}>로그인</Link>
          </Button>
          <Button color="primary" size="large">
            <Link to={"/signup"}>회원가입</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
