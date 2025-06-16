import Link from "next/link";
import { FC } from "react";

const status = "notAuthenticated";

const AuthLinks: FC = ({}) => {
  return (
    <>
      {status === "notAuthenticated" ? (
        <>
          <Link href="/login">Login</Link>
        </>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className="cursor-pointer">Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
