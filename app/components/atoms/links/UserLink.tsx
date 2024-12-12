import Link from "next/link";
import { FaUser } from "react-icons/fa";

interface UserLinkProps {
  isLoggedIn: boolean;
  userName: string;
}

export default function UserLink({ isLoggedIn, userName }: UserLinkProps) {
  return (
    <Link href="" className="hidden md:flex items-center gap-2">
      <FaUser />
      <span>{isLoggedIn ? userName : "Connexion"}</span>
    </Link>
  );
}