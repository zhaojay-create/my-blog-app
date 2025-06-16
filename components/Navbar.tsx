import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import AuthLinks from "./AuthLinks";
import ThemeToggle from "./ThemeToggle";

const Navbar: FC = ({}) => {
  return (
    <div className="h-[100px] flex justify-between items-center">
      {/* social logo list */}
      <div className="flex flex-1 gap-2">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      {/* logo */}
      <div className="flex-1 font-bold text-2xl text-center">lamablog</div>
      <div className="flex flex-1 gap-2 text-lg">
        <ThemeToggle />
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
