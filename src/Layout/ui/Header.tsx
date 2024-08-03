import { Link } from "react-router-dom";
import Button from "../../shared/ui/Button";
import ThemeToggleButton from "../../widget/ui/ThemeToggleButton";

function Header() {
  return (
    <header
      className={
        "sticky top-0 mx-auto mt-1 flex h-[76px] w-full max-w-screen-xl border-b-2 border-solid border-zinc-500 bg-background-light px-4 text-text-light dark:bg-background-dark dark:text-text-dark"
      }
    >
      <div className="relative mx-auto flex w-full items-center">
        <div className="relative left-2">
          {/* DarkMode 전환 버튼 */}
          <ThemeToggleButton />
        </div>
        <div className="absolute left-[50%] mx-auto w-max max-w-max translate-x-[-50%]">
          <h1 className="font-sans text-3xl font-semibold">Waymaker</h1>
        </div>

        <div className="absolute right-2 flex items-center justify-center gap-5 px-4">
          {/* sign */}
          <div className="flex gap-4">
            <Button color="normal" size="normal">
              <Link to={"/signin"} className="text-base text-zinc-300">
                로그인
              </Link>
            </Button>
            <Button color="primary" size="normal">
              <Link to={"/signup"} className="text-base text-zinc-300">
                회원가입
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
