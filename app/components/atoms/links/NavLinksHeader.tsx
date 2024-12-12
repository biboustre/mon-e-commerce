import Link from "next/link";

export default function NavLinksHeader() {
  return (
    <nav className="hidden md:flex gap-10">
      <Link href="">Boutique</Link>
      <Link href="">A propos</Link>
      <Link href="">FAQ</Link>
      <Link href="">Contact</Link>
    </nav>
  );
}