import rocketLogo from "../assets/rocket.svg";
import todoLogo from "../assets/todo.png";

export function Header() {
  return (
    <header className="w-full h-48 bg-Gray-700 flex items-center justify-center gap-3">
      <img src={rocketLogo} alt="" />
      <img src={todoLogo} alt="" />
    </header>
  );
}
