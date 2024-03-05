import MenuIcon from "@/icons/menu-icon";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="flex w-full justify-between items-center px-6 py-4 shadow-sm">
        <div>
          <Image width={85} height={85} src="logo.svg" alt="KoinX logo" />
        </div>
        <div>
          <MenuIcon />
        </div>
      </div>
    </header>
  );
}
