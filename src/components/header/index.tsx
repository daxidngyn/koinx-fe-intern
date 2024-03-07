import Image from "next/image";
import MenuIcon from "@/icons/menu-icon";
import Link from "next/link";

const navItems = ["Crypto Taxes", "Free Tools", "Resource Center"];

export default function Header() {
  return (
    <header className="bg-white">
      <div className="flex w-full justify-between items-center px-8 md:px-12 lg:px-8 xl:px-14 py-6 lg:py-8 shadow-sm">
        <div>
          <Image width={85} height={85} src="logo.svg" alt="KoinX logo" />
        </div>
        <div className="lg:hidden">
          <MenuIcon />
        </div>

        <div className="items-center hidden lg:flex">
          <div className="space-x-8 mr-11">
            {navItems.map((navItem) => (
              <Link
                href="#"
                key={navItem}
                className="text-[#0F1629] font-semibold"
              >
                {navItem}
              </Link>
            ))}
          </div>

          <div>
            <Link
              href="#"
              className="rounded-lg px-6 py-2.5 bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] text-white font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
