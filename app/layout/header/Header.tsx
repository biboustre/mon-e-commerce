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
    <header className="flex justify-between p-7">
      <section className="flex gap-20">
        <h1 className="font-extrabold text-3xl">Home</h1>
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