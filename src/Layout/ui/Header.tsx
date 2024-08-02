import { SiAlwaysdata } from "react-icons/si";
import { Link } from "react-router-dom";
import Button from "../../shared/ui/Button";
import ThemeToggleButton from "../../widget/ui/ThemeToggleButton";

function Header() {
  return (
    <header className="flex h-[80px] w-full items-center justify-between gap-2 bg-primary">
      {/* <div className="flex-grow-0 px-2">
        <SiAlwaysdata className="h-10 w-10" />
      </div> */}

      <div className="">
        <h1 className="font-sans text-3xl font-semibold">Waymaker</h1>
      </div>

      <div className="flex items-center justify-center gap-5 px-4">
        <div>
          {/* DarkMode 전환 버튼 */}
          <ThemeToggleButton />
        </div>
        {/* sign */}
        <div className="flex gap-4">
          <Button color="normal" size="large">
            <Link to={"/signin"} className="text-base text-zinc-300">
              로그인
            </Link>
          </Button>
          <Button color="primary" size="large">
            <Link to={"/signup"} className="text-base text-zinc-300">
              회원가입
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
