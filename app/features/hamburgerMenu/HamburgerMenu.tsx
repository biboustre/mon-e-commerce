"use client";

import { useState } from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn] = useState<boolean>(false);
  const userName = "bibou;";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="lg:hidden">
      <button
        className="p-2 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Open Menu"
      >
        <div className="mb-1 h-1 w-6 bg-slate-100"></div>
        <div className="mb-1 h-1 w-6 bg-slate-100"></div>
        <div className="h-1 w-6 bg-slate-100"></div>
      </button>
      {isOpen && (
        <div className="fixed right-0 top-0 h-60 w-full translate-x-0 bg-zinc-950/95 text-white transition-transform md:h-full md:w-64">
          <button
            className="absolute right-4 top-4 text-2xl"
            onClick={toggleMenu}
          >
            &times;
          </button>
          <nav className="flex flex-col items-center gap-5 py-7">
            <Link href="" className="flex items-center gap-2">
              <FaUser />
              <span>{isLoggedIn ? userName : "Connexion"}</span>
            </Link>
            <ul className="gap-10">
              <li>
                <Link href="">Boutique</Link>{" "}
              </li>
              <li>
                <Link href="">A propos</Link>{" "}
              </li>
              <li>
                <Link href="">FAQ</Link>{" "}
              </li>
              <li>
                <Link href="">Contact</Link>{" "}
              </li>
            </ul>
          </nav>
        </div>
      )}
    </section>
  );
}
