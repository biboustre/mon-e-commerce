import NavLinksHeader from "../../components/atoms/links/NavLinksHeader";
import UserLink from "../../components/atoms/links/UserLink";
import { FaBagShopping } from "react-icons/fa6";
import HamburgerMenu from "../../features/hamburgerMenu/HamburgerMenu";
import Link from "next/link";

interface HeaderProps {
  isLoggedIn: boolean;
  userName: string;
}

export default function Header({ isLoggedIn, userName }: HeaderProps) {
  return (
    <header className="flex justify-between p-7 fixed w-full bg-gray-900 text-white inset-0 z-50 h-[100px]">
      <section className="flex gap-20">
        <Link href="/" className="font-extrabold text-3xl">
          <h1>Home</h1>
        </Link>
        <NavLinksHeader />
      </section>
      <section className="flex gap-5">
        <UserLink isLoggedIn={isLoggedIn} userName={userName} />
        <Link href="" className="flex items-center">
          <FaBagShopping />
        </Link>
        <div className="md:hidden">
          <HamburgerMenu />
        </div>
      </section>
    </header>
  );
}
